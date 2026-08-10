# Scozia 2026 — sito del viaggio

Pagina web statica con mappa interattiva del viaggio (13–25 agosto 2026): marker distinti per alloggi (🏠) e cose da vedere (📍), filtro per giorno, e un pulsante "Documenti di viaggio" con i PDF scaricabili (biglietti, ETA, assicurazione, voucher auto).

## File

- `index.html` — la pagina (mappa Leaflet/OpenStreetMap, nessuna chiave API richiesta)
- `data.js` — tutti i dati: alloggi, luoghi da vedere, documenti. **Modifica solo questo file** per aggiornare contenuti.
- `documenti/` — i PDF scaricabili dalla pagina.

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
