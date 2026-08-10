// ============================================================
// Galleria foto condivisa — richiede Supabase
// Configura le credenziali in supabase-config.js (vedi le istruzioni lì).
// ============================================================
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { supabaseUrl, supabaseAnonKey } from './supabase-config.js';

const BUCKET = 'photos';
const TABLE = 'photos';

let supabase;
let supabaseReady = false;

try {
  if (
    supabaseUrl && !supabaseUrl.startsWith('INCOLLA_QUI') &&
    supabaseAnonKey && !supabaseAnonKey.startsWith('INCOLLA_QUI')
  ) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    supabaseReady = true;
  }
} catch (err) {
  console.error("Errore nell'inizializzazione di Supabase:", err);
}

const galleryModal = document.getElementById('galleryModal');
const openGalleryBtn = document.getElementById('openGallery');
const closeGalleryBtn = document.getElementById('closeGallery');
const gridPhotos = document.getElementById('gridPhotos');
const inputPhotos = document.getElementById('inputPhotos');
const uploadStatus = document.getElementById('uploadStatus');
const notConfiguredEl = document.getElementById('galleryNotConfigured');
const galleryBody = document.getElementById('galleryBody');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const closeLightboxBtn = document.getElementById('closeLightbox');

openGalleryBtn.addEventListener('click', () => {
  galleryModal.classList.add('open');
  if (!supabaseReady) {
    notConfiguredEl.style.display = '';
    galleryBody.style.display = 'none';
  } else {
    notConfiguredEl.style.display = 'none';
    galleryBody.style.display = '';
    loadPhotos();
  }
});
closeGalleryBtn.addEventListener('click', () => galleryModal.classList.remove('open'));
galleryModal.addEventListener('click', (e) => { if (e.target === galleryModal) galleryModal.classList.remove('open'); });

document.getElementById('addPhotosBtn').addEventListener('click', () => inputPhotos.click());

// Calcola l'impronta (hash) del contenuto del file per riconoscere i doppioni,
// indipendentemente dal nome con cui è stato salvato sul telefono.
async function sha256(file) {
  const buf = await file.arrayBuffer();
  const hashBuf = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function safeName(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

async function handleUpload(fileList) {
  if (!supabaseReady || !fileList || fileList.length === 0) return;

  for (const file of Array.from(fileList)) {
    uploadStatus.textContent = `Controllo "${file.name}"...`;
    let hash;
    try {
      hash = await sha256(file);
    } catch (err) {
      console.error(err);
      uploadStatus.textContent = `Errore nel controllo di "${file.name}", saltata.`;
      continue;
    }

    try {
      const { data: dupes, error } = await supabase
        .from(TABLE)
        .select('name')
        .eq('hash', hash)
        .limit(1);
      if (error) throw error;
      if (dupes && dupes.length > 0) {
        const proceed = confirm(`Foto già presente ("${dupes[0].name}"). Vuoi caricarla lo stesso?`);
        if (!proceed) {
          uploadStatus.textContent = `"${file.name}" non caricata (doppione).`;
          continue;
        }
      }
    } catch (err) {
      console.error('Errore nel controllo doppioni:', err);
    }

    uploadStatus.textContent = `Carico "${file.name}"...`;
    try {
      const path = `${hash}-${Date.now()}-${safeName(file.name)}`;
      const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, file);
      if (upErr) throw upErr;

      const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
      const url = pub.publicUrl;

      const { error: insErr } = await supabase
        .from(TABLE)
        .insert({ hash, name: file.name, path, url, size: file.size });
      if (insErr) throw insErr;

      uploadStatus.textContent = `"${file.name}" caricata.`;
      await loadPhotos();
    } catch (err) {
      console.error(err);
      uploadStatus.textContent = `Errore nel caricamento di "${file.name}".`;
    }
  }
  setTimeout(() => { uploadStatus.textContent = ''; }, 4000);
}

inputPhotos.addEventListener('change', (e) => { handleUpload(e.target.files); e.target.value = ''; });

async function loadPhotos() {
  if (!supabaseReady) return;
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error(error);
    gridPhotos.innerHTML = `<p class="gallery-empty">Errore nel caricamento della galleria.</p>`;
    return;
  }
  renderGrid(data || []);
}

function renderGrid(rows) {
  gridPhotos.innerHTML = '';
  if (rows.length === 0) {
    gridPhotos.innerHTML = `<p class="gallery-empty">Nessuna foto ancora. Aggiungine una!</p>`;
    return;
  }
  rows.forEach(row => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <button type="button" class="gallery-thumb-btn"><img src="${row.url}" alt="${row.name || ''}" loading="lazy"></button>
      <button type="button" class="gallery-delete-btn" title="Elimina foto">🗑</button>
    `;
    item.querySelector('.gallery-thumb-btn').addEventListener('click', () => openLightbox(row));
    item.querySelector('.gallery-delete-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      confirmAndDelete(row);
    });
    gridPhotos.appendChild(item);
  });
}

async function confirmAndDelete(row) {
  const label = row.name ? `"${row.name}"` : 'questa foto';
  if (!confirm(`Eliminare ${label}? Non si può annullare.`)) return;
  try {
    if (row.path) {
      const { error: rmErr } = await supabase.storage.from(BUCKET).remove([row.path]);
      if (rmErr) console.error('Errore nella rimozione del file:', rmErr);
    }
    const { error: delErr } = await supabase.from(TABLE).delete().eq('id', row.id);
    if (delErr) throw delErr;
    uploadStatus.textContent = 'Foto eliminata.';
    setTimeout(() => { uploadStatus.textContent = ''; }, 3000);
    if (currentLightboxRow && currentLightboxRow.id === row.id) closeLightbox();
    await loadPhotos();
  } catch (err) {
    console.error(err);
    alert("Errore durante l'eliminazione. Riprova.");
  }
}

let currentLightboxRow = null;

function openLightbox(row) {
  currentLightboxRow = row;
  lightboxContent.innerHTML = `<img src="${row.url}" alt="${row.name || ''}">`;
  lightbox.classList.add('open');
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxContent.innerHTML = '';
  currentLightboxRow = null;
}
closeLightboxBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

const deleteLightboxBtn = document.getElementById('deleteLightboxBtn');
if (deleteLightboxBtn) {
  deleteLightboxBtn.addEventListener('click', () => {
    if (currentLightboxRow) confirmAndDelete(currentLightboxRow);
  });
}
