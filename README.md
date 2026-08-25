# Scozia 2026 — sito del viaggio

Pagina web statica con mappa interattiva del viaggio (13–25 agosto 2026): marker distinti per alloggi (🏠) e cose da vedere (📍), filtro per giorno, pulsanti "Documenti di viaggio" e "Numeri utili", una scheda "Check-in & regole" per ogni alloggio, e una galleria foto/video condivisa.

## File

- `index.html` — la pagina (mappa Leaflet/OpenStreetMap, nessuna chiave API richiesta)
- `data.js` — tutti i dati: alloggi (con orari di check-in/out e regole della casa), luoghi da vedere, documenti, numeri utili. **Modifica solo questo file** per aggiornare i contenuti testuali.
- `documenti/` — i PDF scaricabili dalla pagina.
- `favicon.svg` — l'icona del sito (bandiera scozzese, il saltire).
- `gallery.js` — logica della galleria foto (upload, riconoscimento doppioni, ordinamento per data di scatto, visualizzazione a slide).
- `supabase-config.js` — **da configurare** perché la galleria funzioni: contiene le istruzioni passo-passo per collegare un progetto Supabase gratuito (nessuna carta di credito richiesta). Finché non è configurato, il pulsante "Galleria" mostra solo un avviso.
- `firebase-config.js` — non più usato (la galleria non usa più Firebase), lasciato solo come nota.

## Check-in, check-out e regole della casa

Nel popup di ogni alloggio sulla mappa c'è ora un pulsante "📋 Check-in & regole" che apre una scheda con orari, metodo di accesso, regole della casa e indicazioni per arrivare. Per modificarli, cerca l'alloggio in `data.js` e aggiorna i campi `checkin`, `checkout`, `checkinMethod`, `rules`, `directions`, `contact`, `nearby`.

## Galleria foto

Il pulsante "📷 Galleria foto" in alto apre la galleria condivisa (solo foto, non video). Da telefono, "Aggiungi foto" apre direttamente il selettore di foto del dispositivo con selezione multipla. Prima di caricare un file, il sito ne calcola un'impronta digitale e — se una foto identica è già presente — chiede "Foto già presente, vuoi caricarla lo stesso?".

Poiché il sito è statico (pubblicato su GitHub Pages, senza un server proprio), la galleria si appoggia a **Supabase** (piano gratuito, nessuna carta di credito richiesta) per salvare i file e renderli visibili a tutti, su ogni dispositivo. Va configurata una sola volta: apri `supabase-config.js` e segui le istruzioni scritte lì dentro.

Limiti del piano gratuito Supabase da tenere a mente: 1 GB di spazio per le foto, e il progetto va "in pausa" se resta inattivo per 7 giorni di fila (si riattiva con un clic nella dashboard Supabase).

Le foto sono mostrate tutte, in miniature di dimensione fissa che non si sovrappongono mai, ordinate per **data di scatto** (letta dai metadati EXIF della foto, non da quando è stata caricata). Toccando una foto si apre a schermo intero e ci si può spostare tra le foto scorrendo col dito (swipe) a sinistra/destra, con le frecce, o con i tasti ← →.

### Migrazione una tantum per l'ordinamento per data di scatto

Se hai già configurato Supabase in passato (prima di questo aggiornamento), la tabella `photos` non ha ancora la colonna che memorizza la data di scatto. Vai su **SQL Editor > New query** nella dashboard Supabase e incolla questo blocco, poi **Run** (va fatto una sola volta):

```sql
alter table photos add column if not exists taken_at timestamptz;
create index if not exists photos_taken_at_idx on photos (taken_at);
```

Finché non esegui questa migrazione la galleria continua a funzionare normalmente (ordinata per data di caricamento); dopo averla eseguita, le nuove foto caricate verranno ordinate per data di scatto in modo automatico, senza bisogno di ricaricare quelle già presenti.

## Come aggiungere i link AirBnB

Apri `data.js`, trova l'oggetto dell'alloggio (es. `id: "aviemore"`) e incolla l'URL nel campo `airbnb`, ad esempio:

```js
airbnb: "https://www.airbnb.it/rooms/12345678"
```

Finché il campo è vuoto (`""`), la pagina mostra "Link AirBnB in arrivo" al posto del pulsante.

## Come pubblicarla su GitHub Pages (senza usare il terminale)

1. Vai su [github.com](https://github.com) e crea un nuovo repository (es. `scozia-2026`), pubblico.
2. Nella pagina del repository, clicca **Add file → Upload files**.
3. Trascina dentro tutti i file e cartelle di questa cartella (`index.html`, `data.js`, `documenti/` con i suoi PDF, questo `README.md`) e conferma il commit.
4. Vai su **Settings → Pages**.
5. In "Build and deployment", scegli **Deploy from a branch**, branch `main`, cartella `/root`, poi **Save**.
6. Dopo un minuto la pagina sarà online su `https://<tuo-utente>.github.io/scozia-2026/`.

Ogni volta che modifichi `data.js` (es. per aggiungere i link AirBnB), basta ricaricare il file su GitHub (Upload files, sovrascrivendo quello esistente) e il sito si aggiorna da solo in un paio di minuti.
