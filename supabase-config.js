// ============================================================
// CONFIGURAZIONE SUPABASE — Galleria foto condivisa (100% gratis, nessuna carta)
// ============================================================
// Segui questi passaggi UNA SOLA VOLTA:
//
// 1. Vai su https://supabase.com, clicca "Start your project" e accedi
//    (puoi usare l'account Google). Non chiede mai una carta di credito
//    per il piano gratuito.
// 2. Clicca "New project": dai un nome (es. "scozia-2026"), scegli una
//    password per il database (salvala da qualche parte, non serve per il
//    sito ma è utile tenerla), scegli una regione vicina (es. Europa) e
//    crea il progetto. Aspetta 1-2 minuti che venga preparato.
// 3. Nel menu a sinistra vai su "SQL Editor" > "New query" e incolla
//    TUTTO il blocco SQL qui sotto, poi clicca "Run":
//
//    create table photos (
//      id uuid primary key default gen_random_uuid(),
//      hash text not null,
//      name text,
//      path text not null,
//      url text not null,
//      size bigint,
//      created_at timestamptz not null default now()
//    );
//    create index photos_hash_idx on photos (hash);
//    alter table photos enable row level security;
//    create policy "Public read" on photos for select using (true);
//    create policy "Public insert" on photos for insert with check (true);
//
// 4. Nel menu a sinistra vai su "Storage" > "New bucket": nome "photos",
//    attiva l'interruttore "Public bucket", crea.
// 5. Torna su "SQL Editor" > "New query" e incolla anche questo secondo
//    blocco, poi "Run" (permette al sito di leggere/caricare le foto nel
//    bucket appena creato):
//
//    create policy "Public read photos bucket" on storage.objects
//      for select using (bucket_id = 'photos');
//    create policy "Public upload photos bucket" on storage.objects
//      for insert with check (bucket_id = 'photos');
//
// 6. Nel menu a sinistra vai su "Project Settings" (icona ingranaggio) >
//    "Data API" (o "API" a seconda della versione). Copia:
//    - "Project URL" → incollalo qui sotto in supabaseUrl
//    - la chiave "anon public" (NON quella "service_role", quella non va
//      mai messa in un sito pubblico) → incollala in supabaseAnonKey
// 7. Salva questo file e ricarica il sito: se tutto è a posto, il pulsante
//    "Galleria" mostra le foto invece dell'avviso.
//
// NOTA: come per qualsiasi sito senza login, chiunque abbia il link del
// sito può caricare o vedere le foto: non condividere il link pubblicamente.
//
// NOTA: i progetti gratuiti Supabase vanno "in pausa" se restano inattivi
// per 7 giorni di fila (nessuno apre il sito). Basta un clic su "Restore
// project" nella dashboard Supabase per riattivarlo, la galleria torna
// visibile subito dopo.

export const supabaseUrl = "https://qduzctmzhyjufkdthivd.supabase.co";
export const supabaseAnonKey = "sb_publishable_n4tSWP6HfOuw_xjLUZ0oww_1TiC-wRP";
