// Dati del viaggio in Scozia, 13-25 agosto 2026
// Per aggiungere i link AirBnB: compila il campo "airbnb" di ogni alloggio con l'URL dell'annuncio.

const ACCOMMODATIONS = [
  {
    id: "edimburgo1",
    name: "Edimburgo — Haymarket",
    dates: "Notte del 13 agosto",
    day: 13,
    lat: 55.9446, lng: -3.2216,
    note: "13 Rosebery Crescent, Haymarket. Host: Joivy Scotland. Camera familiare, a piedi da Royal Mile e Castello.",
    airbnb: "https://www.airbnb.it/trips/v1/1729198868187407096/ro/RESERVATION2_CHECKIN/HMQMSDFBAF"
  },
  {
    id: "aviemore",
    name: "Aviemore — Cairn View",
    dates: "Notti del 14-15 agosto",
    day: 14,
    lat: 57.1865, lng: -3.8170,
    note: "Holiday Park, 53 Dalfaber Road. Host: Daniel - Interhome (Cairn View by Interhome). Base per Loch Morlich, Cairngorm Mountain e Loch an Eilein.",
    airbnb: "https://www.airbnb.it/trips/v1/1729234312995742072/ro/RESERVATION2_CHECKIN/HMZ4T2DHB5"
  },
  {
    id: "bettyhill",
    name: "Bettyhill",
    dates: "Notti del 16-17 agosto",
    day: 16,
    lat: 58.5258, lng: -4.2170,
    note: "Munro Place. Host: Angela and Ian (Cozy Bettyhill Bungalow, NC500). Base per Dunrobin Castle e la giornata Tongue-Durness-Smoo Cave.",
    airbnb: "https://www.airbnb.it/trips/v1/1729608329082324464/ro/RESERVATION2_CHECKIN/HME3CYE43X"
  },
  {
    id: "inchbae",
    name: "Inchbae Lodge (Garve)",
    dates: "Notte del 18 agosto",
    day: 18,
    lat: 57.6642, lng: -4.7115,
    note: "A835. Host: Rita. Lodge isolato vicino al fiume Black Water, dopo Ullapool.",
    airbnb: "https://www.airbnb.it/trips/v1/1729947386199202589/ro/RESERVATION2_CHECKIN/HM8DTEBE4C"
  },
  {
    id: "fortwilliam",
    name: "Fort William",
    dates: "Notti del 19-20 agosto",
    day: 19,
    lat: 56.8220, lng: -5.0995,
    note: "4 Caledonian Road. Host: West. Base per Loch Ness/Urquhart Castle e per Glenfinnan/Glen Nevis.",
    airbnb: "https://www.airbnb.it/trips/v1/1731669783519089166/ro/RESERVATION2_CHECKIN/HM43HTTBFC"
  },
  {
    id: "oban",
    name: "Oban",
    dates: "Notti del 21-22 agosto",
    day: 21,
    lat: 56.4180, lng: -5.4740,
    note: "2A Castle Road. Host: Lynne (OBAN Modern 2 Bed Flat, Private Parking & Garden). Base per Glencoe, Castle Stalker e la gita a Mull.",
    airbnb: "https://www.airbnb.it/trips/v1/1731416287238703071/ro/RESERVATION2_CHECKIN/HMXTB5FHYZ"
  },
  {
    id: "stirling",
    name: "Stirling — Raploch",
    dates: "Notte del 23 agosto",
    day: 23,
    lat: 56.1230, lng: -3.9520,
    note: "Raploch Road. Host: Anna (Sunny Flat Close to Stirling Castle - Free Parking). Tappa dopo Loch Awe, Inveraray e Loch Lomond.",
    airbnb: "https://www.airbnb.it/trips/v1/1734652449716443747/ro/RESERVATION2_CHECKIN/HMXYCEMKC2"
  },
  {
    id: "leith",
    name: "Edimburgo — Leith",
    dates: "Notte del 24 agosto",
    day: 24,
    lat: 55.9760, lng: -3.1665,
    note: "4 Salamander Court, Leith. Host: Kamila (Spacious 2 bed Apartment with Free Parking). Ultima notte prima della partenza del 25.",
    airbnb: "https://www.airbnb.it/trips/v1/1731398423639421145/ro/RESERVATION2_CHECKIN/HMCYEY9BJM"
  }
];

const POIS = [
  // 13 agosto - Edimburgo storica
  { name: "St Giles' Cathedral", day: 13, date: "13 agosto", lat: 55.9497, lng: -3.1913, desc: "Cattedrale principale della Old Town, la \"Mother Kirk\" del presbiterianesimo scozzese." },
  { name: "Royal Mile", day: 13, date: "13 agosto", lat: 55.9500, lng: -3.1930, desc: "Via medievale principale della Old Town con i suoi caratteristici \"closes\"." },
  { name: "Edinburgh Castle Esplanade", day: 13, date: "13 agosto", lat: 55.9486, lng: -3.1999, desc: "Spianata esterna del castello: solo panorama, niente visita interna." },
  { name: "Victoria Street", day: 13, date: "13 agosto", lat: 55.9481, lng: -3.1944, desc: "Via colorata e curva, spesso associata all'immaginario di Harry Potter." },
  { name: "Grassmarket", day: 13, date: "13 agosto", lat: 55.9469, lng: -3.1958, desc: "Piazza storica con una delle viste più belle sulla rocca del castello." },
  { name: "Greyfriars Bobby & Kirkyard", day: 13, date: "13 agosto", lat: 55.9468, lng: -3.1927, desc: "Statua del celebre cane e cimitero storico, tra i luoghi più suggestivi della città." },
  { name: "Calton Hill", day: 13, date: "13 agosto", lat: 55.9550, lng: -3.1828, desc: "Collina panoramica con vista su Old Town, New Town, Arthur's Seat e Firth of Forth." },

  // 14 agosto - Edimburgo -> Aviemore
  { name: "The Hermitage (Dunkeld)", day: 14, date: "14 agosto", lat: 56.5665, lng: -3.5966, desc: "Foresta con alberi altissimi e la cascata Black Linn Falls (Ossian's Hall)." },
  { name: "Pitlochry", day: 14, date: "14 agosto", lat: 56.7000, lng: -3.7297, desc: "Cittadina scozzese con Atholl Road, negozi e il fiume Tummel." },
  { name: "Loch Morlich", day: 14, date: "14 agosto", lat: 57.1636, lng: -3.6789, desc: "Lago con spiaggia e vista sui Cairngorms, vicino ad Aviemore." },

  // 15 agosto - Cairngorm, Loch an Eilein, Speyside
  { name: "Cairngorm Mountain", day: 15, date: "15 agosto", lat: 57.1339, lng: -3.6428, desc: "Funicolare che sale a 1.097 m, terrazza panoramica ed esposizione \"Cairngorm Story\"." },
  { name: "Loch an Eilein", day: 15, date: "15 agosto", lat: 57.1509, lng: -3.8331, desc: "Lago con rovine di castello su un isolotto; giro completo a piedi di circa 5 km." },
  { name: "Boat of Garten", day: 15, date: "15 agosto", lat: 57.2445, lng: -3.7127, desc: "\"Osprey Village\" con stazione ferroviaria vittoriana." },
  { name: "Nethy Bridge", day: 15, date: "15 agosto", lat: 57.2578, lng: -3.6299, desc: "Villaggio tradizionale dello Speyside, sosta breve vicino al ponte." },
  { name: "Carrbridge", day: 15, date: "15 agosto", lat: 57.2848, lng: -3.7982, desc: "Old Packhorse Bridge del 1717, uno degli scorci più fotografati della zona." },

  // 16 agosto - Clava Cairns, Dornoch, Dunrobin
  { name: "Clava Cairns", day: 16, date: "16 agosto", lat: 57.4766, lng: -4.0733, desc: "Complesso funerario preistorico di circa 4.000 anni fa, con cerchi di pietre." },
  { name: "Dornoch", day: 16, date: "16 agosto", lat: 57.8797, lng: -4.0281, desc: "Cittadina elegante con la Dornoch Cathedral e il centro storico in pietra." },
  { name: "Dunrobin Castle", day: 16, date: "16 agosto", lat: 57.9694, lng: -3.9494, desc: "Castello fiabesco con interni storici, giardini sul mare e spettacolo di falconeria." },
  { name: "Brora", day: 16, date: "16 agosto", lat: 58.0086, lng: -3.8531, desc: "Sosta lungo la costa orientale, utile per rifornimento." },
  { name: "Helmsdale", day: 16, date: "16 agosto", lat: 58.1178, lng: -3.6497, desc: "Ultimo centro prima del tratto di strada più stretto verso nord." },

  // 17 agosto - Costa settentrionale
  { name: "Tongue & Kyle of Tongue", day: 17, date: "17 agosto", lat: 58.4694, lng: -4.4147, desc: "Villaggio affacciato sul Kyle of Tongue, vista su Ben Loyal e Castle Varrich." },
  { name: "Ceannabeinne Beach", day: 17, date: "17 agosto", lat: 58.5407, lng: -4.6858, desc: "Spiaggia selvaggia con la Golden Eagle Zipline, la più settentrionale del Regno Unito." },
  { name: "Smoo Cave", day: 17, date: "17 agosto", lat: 58.5658, lng: -4.7189, desc: "Grande grotta scavata dal mare e da un corso d'acqua sotterraneo." },
  { name: "Durness & Sango Bay", day: 17, date: "17 agosto", lat: 58.5664, lng: -4.7469, desc: "Baia con sabbia chiara, rocce e acqua turchese." },
  { name: "Balnakeil Craft Village", day: 17, date: "17 agosto", lat: 58.5661, lng: -4.7625, desc: "Villaggio artigianale con Cocoa Mountain, famosa per la cioccolata calda." },
  { name: "Balnakeil Beach", day: 17, date: "17 agosto", lat: 58.5717, lng: -4.7639, desc: "Grande spiaggia bianca circondata da dune, vista verso Faraid Head." },

  // 18 agosto - Strathnaver, Rogie Falls, Corrieshalloch, Ullapool
  { name: "Loch Naver", day: 18, date: "18 agosto", lat: 58.3667, lng: -4.3333, desc: "Lago isolato nella valle di Strathnaver, sosta fotografica." },
  { name: "Rogie Falls", day: 18, date: "18 agosto", lat: 57.6169, lng: -4.7231, desc: "Cascata nella foresta con ponte sospeso sul fiume Black Water; possibile avvistare salmoni." },
  { name: "Corrieshalloch Gorge", day: 18, date: "18 agosto", lat: 57.7397, lng: -5.0339, desc: "Gola spettacolare con ponte sospeso vittoriano e le Falls of Measach." },
  { name: "Ullapool", day: 18, date: "18 agosto", lat: 57.8956, lng: -5.1594, desc: "Porto di case bianche su Loch Broom, ultimo centro ben fornito prima di Inchbae." },

  // 19 agosto - Inverness, Loch Ness, Urquhart, Fort Augustus
  { name: "Inverness", day: 19, date: "19 agosto", lat: 57.4778, lng: -4.2247, desc: "Capitale delle Highlands: River Ness, cattedrale, castello e Victorian Market." },
  { name: "Urquhart Castle", day: 19, date: "19 agosto", lat: 57.3241, lng: -4.4419, desc: "Rovine sul Loch Ness, la vista più iconica del lago dalla Grant Tower." },
  { name: "Fort Augustus", day: 19, date: "19 agosto", lat: 57.1447, lng: -4.6811, desc: "Scalinata di chiuse del Canale di Caledonia dove il canale incontra il Loch Ness." },
  { name: "Commando Memorial", day: 19, date: "19 agosto", lat: 56.9075, lng: -4.9528, desc: "Monumento panoramico vicino Spean Bridge, vista su Ben Nevis e Great Glen." },

  // 20 agosto - Glenfinnan, Neptune's Staircase, Glen Nevis
  { name: "Glenfinnan Viaduct", day: 20, date: "20 agosto", lat: 56.8697, lng: -5.4342, desc: "Viadotto reso famoso da Harry Potter, ottimo per vedere passare il treno Jacobite." },
  { name: "Glenfinnan Monument", day: 20, date: "20 agosto", lat: 56.8564, lng: -5.4306, desc: "Monumento sul Loch Shiel dedicato al sollevamento giacobita del 1745." },
  { name: "Neptune's Staircase", day: 20, date: "20 agosto", lat: 56.8497, lng: -5.1156, desc: "Serie di otto chiuse del Canale di Caledonia a Banavie." },
  { name: "Glen Nevis & Steall Falls", day: 20, date: "20 agosto", lat: 56.8064, lng: -4.9797, desc: "Valle ai piedi del Ben Nevis con escursione alla cascata Steall Falls." },

  // 21 agosto - Glencoe, Castle Stalker, Oban
  { name: "Three Sisters of Glencoe", day: 21, date: "21 agosto", lat: 56.6503, lng: -5.0064, desc: "Punto panoramico sulle celebri montagne di Glencoe." },
  { name: "Glen Etive", day: 21, date: "21 agosto", lat: 56.6167, lng: -4.9333, desc: "La \"strada di Skyfall\", valle isolata e spettacolare." },
  { name: "Glencoe Visitor Centre", day: 21, date: "21 agosto", lat: 56.6706, lng: -5.1039, desc: "Centro visitatori con la storia del massacro di Glencoe." },
  { name: "Castle Stalker", day: 21, date: "21 agosto", lat: 56.5486, lng: -5.3286, desc: "Castello su un isolotto, punto panoramico dalla riva." },
  { name: "Dunstaffnage Castle", day: 21, date: "21 agosto", lat: 56.4547, lng: -5.4394, desc: "Castello medievale vicino a Oban, affacciato sul mare." },
  { name: "Oban & McCaig's Tower", day: 21, date: "21 agosto", lat: 56.4147, lng: -5.4728, desc: "Porto principale della costa ovest, con la torre panoramica di McCaig." },

  // 22 agosto - Mull
  { name: "Duart Castle (Mull)", day: 22, date: "22 agosto", lat: 56.4522, lng: -5.6547, desc: "Castello del clan Maclean, sede del capoclan, affacciato sul Sound of Mull." },
  { name: "Tobermory (Mull)", day: 22, date: "22 agosto", lat: 56.6231, lng: -6.0644, desc: "Porto colorato dell'isola di Mull, con Main Street e la distilleria." },
  { name: "Aros Park (Mull)", day: 22, date: "22 agosto", lat: 56.6089, lng: -6.0489, desc: "Parco naturale vicino a Tobermory con sentieri lungo la costa." },

  // 23 agosto - Loch Awe, Inveraray, Loch Lomond
  { name: "Kilchurn Castle", day: 23, date: "23 agosto", lat: 56.4014, lng: -5.0308, desc: "Rovine sul Loch Awe, viste dall'esterno, tra i castelli più fotografati di Scozia." },
  { name: "Inveraray", day: 23, date: "23 agosto", lat: 56.2308, lng: -5.0708, desc: "Villaggio sul Loch Fyne con il castello visto dall'esterno." },
  { name: "Rest and Be Thankful", day: 23, date: "23 agosto", lat: 56.2172, lng: -4.8258, desc: "Passo di montagna panoramico." },
  { name: "Luss", day: 23, date: "23 agosto", lat: 56.0075, lng: -4.6389, desc: "Villaggio sul Loch Lomond, con la chiesa parrocchiale e il molo." },

  // 24 agosto - Stirling, Kelpies, Britannia, Leith
  { name: "Stirling Castle Esplanade", day: 24, date: "24 agosto", lat: 56.1239, lng: -3.9464, desc: "Old Town di Stirling: Mar's Wark, Church of the Holy Rude, spianata del castello." },
  { name: "Wallace Monument", day: 24, date: "24 agosto", lat: 56.1439, lng: -3.9114, desc: "Monumento dedicato a William Wallace, visto dal basso." },
  { name: "The Kelpies", day: 24, date: "24 agosto", lat: 56.0161, lng: -3.7397, desc: "Enormi sculture equine nel parco Helix." },
  { name: "Royal Yacht Britannia", day: 24, date: "24 agosto", lat: 55.9806, lng: -3.1789, desc: "Ex yacht reale ormeggiato a Ocean Terminal, Leith." },

  // 25 agosto - Dean Village, Stockbridge, partenza
  { name: "Dean Village", day: 25, date: "25 agosto", lat: 55.9522, lng: -3.2172, desc: "Villaggio pittoresco sul Water of Leith, con Dean Bridge e Well Court." },
  { name: "St Bernard's Well", day: 25, date: "25 agosto", lat: 55.9542, lng: -3.2181, desc: "Tempietto ottocentesco lungo la passeggiata del Water of Leith." },
  { name: "Stockbridge & Circus Lane", day: 25, date: "25 agosto", lat: 55.9583, lng: -3.2064, desc: "Quartiere elegante con la pittoresca Circus Lane, ultima tappa prima dell'aeroporto." }
];

const DOCUMENTS = [
  { label: "Biglietti aerei", file: "documenti/Biglietti_aerei_viaggio_Scozia.pdf" },
  { label: "Assicurazione di viaggio", file: "documenti/Assicurazione_viaggio_Scozia.pdf" },
  { label: "Voucher noleggio auto", file: "documenti/Voucher_noleggio_macchina.pdf" },
  { label: "ETA - Simone", file: "documenti/ETA_Simone.pdf" },
  { label: "ETA - Giulia", file: "documenti/ETA_Giulia.pdf" },
  { label: "ETA - Niccolo", file: "documenti/ETA_Niccolo.pdf" },
  { label: "ETA - Eugenia", file: "documenti/ETA_Eugenia.pdf" }
];

// Numeri utili: emergenze, consolato italiano, blocco carte.
// Fonti verificate ad agosto 2026: consedimburgo.esteri.it, americanexpress.com/it,
// it.finecobank.com, intesasanpaolo.com. Controlla comunque i numeri sulle tue carte
// prima di partire, potrebbero cambiare.
const USEFUL_NUMBERS = [
  {
    group: "Emergenze nel Regno Unito",
    items: [
      { label: "Emergenza generale (polizia, ambulanza, vigili del fuoco)", value: "999 (o 112)", tel: "999" },
      { label: "Polizia — numero non urgente", value: "101", tel: "101" },
      { label: "NHS — assistenza medica non urgente", value: "111", tel: "111" }
    ]
  },
  {
    group: "Consolato Generale d'Italia a Edimburgo",
    items: [
      { label: "Indirizzo", value: "Italy House, 20-22 East London Street, Edinburgh EH7 4BQ" },
      { label: "Centralino (lun-ven 10:00-12:00)", value: "+44 (0)131 226 3631", tel: "+441312263631" },
      { label: "Email", value: "consolato.edimburgo@esteri.it" },
      { label: "Reperibilità per vere emergenze (lun-ven 18-22, sab-dom e festivi 9-22)", value: "+44 (0)131 226 3631" },
      { label: "Funzionario di turno Farnesina (fuori da questi orari)", value: "0039 06 3691 2666", tel: "+390636912666" }
    ]
  },
  {
    group: "Blocco carte — smarrimento o furto",
    items: [
      { label: "Mastercard (numero internazionale, valido dall'estero)", value: "+1 636 722 7111", tel: "+16367227111" },
      { label: "Mastercard (numero verde dall'Italia)", value: "800 870 866", tel: "800870866" },
      { label: "American Express (dall'estero, incl. Regno Unito)", value: "+800 263 92 279", tel: "+80026392279" },
      { label: "American Express (dall'Italia)", value: "06 72 900 347", tel: "0672900347" },
      { label: "Fineco — Customer Care 24/7 (da cellulare o dall'estero)", value: "+39 02 2899 2899", tel: "+390228992899" },
      { label: "Fineco — numero verde (da fisso in Italia)", value: "800 52 52 52", tel: "800525252" },
      { label: "Intesa Sanpaolo — carte di credito (da cellulare o dall'estero)", value: "+39 011 80 19 200", tel: "+390118019200" },
      { label: "Intesa Sanpaolo — bancomat/debito (da cellulare o dall'estero)", value: "+39 02 8710 9001", tel: "+390287109001" },
      { label: "Intesa Sanpaolo — numero verde (da fisso in Italia)", value: "800 303 303", tel: "800303303" }
    ]
  }
];
