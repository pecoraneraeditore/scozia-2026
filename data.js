// Dati del viaggio in Scozia, 13-25 agosto 2026
// Per aggiungere i link AirBnB: compila il campo "airbnb" di ogni alloggio con l'URL dell'annuncio.

const ACCOMMODATIONS = [
  {
    id: "edimburgo1",
    name: "Edimburgo — Haymarket",
    dates: "Notte del 13 agosto",
    day: 13,
    lat: 55.9463, lng: -3.2196,
    note: "13 Rosebery Crescent, Haymarket. Host: Joivy Scotland. Camera familiare, a piedi da Royal Mile e Castello.",
    airbnb: "https://www.airbnb.it/trips/v1/1729198868187407096/ro/RESERVATION2_CHECKIN/HMQMSDFBAF",
    checkin: "15:00", checkout: "11:00",
    checkinMethod: "Smart lock. Contatta l'host per le istruzioni di accesso.",
    rules: ["Self check-in con smart lock", "Massimo 4 ospiti", "Nessun animale domestico"]
  },
  {
    id: "aviemore",
    name: "Aviemore — Cairn View",
    dates: "Notti del 14-15 agosto",
    day: 14,
    lat: 57.1887, lng: -3.8278,
    note: "Holiday Park, 53 Dalfaber Road. Host: Daniel - Interhome (Cairn View by Interhome). Base per Loch Morlich, Cairngorm Mountain e Loch an Eilein.",
    airbnb: "https://www.airbnb.it/trips/v1/1729234312995742072/ro/RESERVATION2_CHECKIN/HMZ4T2DHB5",
    checkin: "16:00", checkout: "10:00",
    checkinMethod: "Contatta l'host (Daniel - Interhome) per sapere come effettuare il check-in.",
    rules: ["Massimo 4 ospiti", "Nessun animale domestico", "Vietato organizzare feste o eventi"]
  },
  {
    id: "bettyhill",
    name: "Bettyhill",
    dates: "Notti del 16-17 agosto",
    day: 16,
    lat: 58.5254, lng: -4.2239,
    note: "Munro Place. Host: Angela and Ian (Cozy Bettyhill Bungalow, NC500). Base per Dunrobin Castle e la giornata Tongue-Durness-Smoo Cave.",
    airbnb: "https://www.airbnb.it/trips/v1/1729608329082324464/ro/RESERVATION2_CHECKIN/HME3CYE43X",
    checkin: "16:00", checkout: "11:00",
    checkinMethod: "Self check-in con cassetta di sicurezza. Le istruzioni per accedere arrivano 48 ore prima del check-in.",
    rules: ["Self check-in con cassetta di sicurezza", "Massimo 5 ospiti", "Nessun animale domestico"],
    directions: "4 Munro Place, Bettyhill KW14 7TD. Svolta su Munro Place di fronte al Bettyhill Hotel: la casa è la 4ª sulla sinistra. Parcheggio sul lato della casa."
  },
  {
    id: "inchbae",
    name: "Inchbae Lodge (Garve)",
    dates: "Notte del 18 agosto",
    day: 18,
    lat: 57.6642, lng: -4.7115,
    note: "A835. Host: Rita. Lodge isolato vicino al fiume Black Water, dopo Ullapool.",
    airbnb: "https://www.airbnb.it/trips/v1/1729947386199202589/ro/RESERVATION2_CHECKIN/HM8DTEBE4C",
    checkin: "16:00", checkout: "10:00",
    checkinMethod: "Self check-in con cassetta di sicurezza, codice inviato prima dell'arrivo.",
    rules: ["Self check-in con cassetta di sicurezza", "Massimo 4 ospiti", "Animali domestici ammessi"],
    directions: "ATTENZIONE: non svoltare per Inchbae Farm. Percorri la A9 oltre Keswick Bridge; alla rotonda di Tore 2ª uscita su A835; alla rotonda di Dingwall dritto; attraverso Contin; dopo 6 miglia attraverso Garve; dopo altre 6 miglia svolta a sinistra all'ingresso segnalato del River Black Water Inn, Cafe & Bar. Segui il vialetto a destra (Mountain View) e parcheggia nello spazio a sinistra dell'hotel; attraversa il cancello all'angolo e segui il sentiero fino alla porta d'ingresso.",
    contact: "Amanda (in loco): 07342 458332"
  },
  {
    id: "fortwilliam",
    name: "Fort William",
    dates: "Notti del 19-20 agosto",
    day: 19,
    lat: 56.8450, lng: -5.1350,
    note: "4 Caledonian Road. Host: West. Base per Loch Ness/Urquhart Castle e per Glenfinnan/Glen Nevis.",
    airbnb: "https://www.airbnb.it/trips/v1/1731669783519089166/ro/RESERVATION2_CHECKIN/HM43HTTBFC",
    checkin: "16:00", checkout: "10:00",
    checkinMethod: "Self check-in con cassetta di sicurezza.",
    rules: ["Self check-in con cassetta di sicurezza", "Massimo 4 ospiti", "Animali domestici ammessi"]
  },
  {
    id: "oban",
    name: "Oban",
    dates: "Notti del 21-22 agosto",
    day: 21,
    lat: 56.4217, lng: -5.4769,
    note: "2A Castle Road. Host: Lynne (OBAN Modern 2 Bed Flat, Private Parking & Garden). Base per Glencoe, Castle Stalker e la gita a Mull.",
    airbnb: "https://www.airbnb.it/trips/v1/1731416287238703071/ro/RESERVATION2_CHECKIN/HMXTB5FHYZ",
    checkin: "15:00", checkout: "10:00",
    checkinMethod: "Self check-in con cassetta di sicurezza. Check-in dalle 15:00, check-out entro le 10:00.",
    rules: ["Self check-in con cassetta di sicurezza", "Massimo 4 ospiti", "Nessun animale domestico"],
    directions: "Al 1° roundabout prendi la 2ª uscita restando su A85; al 2° roundabout 1ª uscita su Corran Esplanade; prosegui fino alla chiesa in pietra marrone, svolta a destra e sali la collina; in cima trovi una fermata bus sulla destra, prendi la 1ª a sinistra su Castle Road; la destinazione (2A Castle Road) è sulla destra, con parcheggio privato."
  },
  {
    id: "stirling",
    name: "Stirling — Raploch",
    dates: "Notte del 23 agosto",
    day: 23,
    lat: 56.1283, lng: -3.9547,
    note: "Raploch Road. Host: Anna (Sunny Flat Close to Stirling Castle - Free Parking). Tappa dopo Loch Awe, Inveraray e Loch Lomond.",
    airbnb: "https://www.airbnb.it/trips/v1/1734652449716443747/ro/RESERVATION2_CHECKIN/HMXYCEMKC2",
    checkin: "14:00", checkout: "11:00",
    checkinMethod: "Self check-in con cassetta di sicurezza.",
    rules: ["Self check-in con cassetta di sicurezza", "Animali domestici ammessi"]
  },
  {
    id: "leith",
    name: "Edimburgo — Leith",
    dates: "Notte del 24 agosto",
    day: 24,
    lat: 55.9748, lng: -3.1633,
    note: "4 Salamander Court, Leith. Host: Kamila (Spacious 2 bed Apartment with Free Parking). Ultima notte prima della partenza del 25.",
    airbnb: "https://www.airbnb.it/trips/v1/1731398423639421145/ro/RESERVATION2_CHECKIN/HMCYEY9BJM",
    checkin: "15:00", checkout: "11:00",
    checkinMethod: "Self check-in con cassetta di sicurezza.",
    rules: ["Self check-in con cassetta di sicurezza", "Massimo 4 ospiti", "Nessun animale domestico"],
    directions: "4 Salamander Court, Edinburgh EH6 7HY. Dall'aeroporto (EDI): in tram verso Newhaven, scendi a The Shore, poi 10 minuti a piedi (oppure taxi/Uber 30-40 minuti). In auto: naviga verso \"Salamander Court, Edinburgh\", parcheggio privato gratuito incluso.",
    nearby: "The Shore ~10 min a piedi · Fermata tram The Shore ~5 min a piedi · Ocean Terminal ~15 min a piedi · Centro di Edimburgo ~15 min in tram · Portobello Beach ~15 min in auto"
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
  { name: "Connage Highland Dairy (facoltativo)", day: 19, date: "19 agosto", lat: 57.5582, lng: -4.0359, desc: "Caseificio biologico ad Ardersier (~20 min da Inverness): Cheese Pantry con assaggi e distributori automatici refrigerati di formaggi, yogurt, burro e latte fresco, aperti 8-19 tutti i giorni. Segnalato da Gambero Rosso." },

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

// Dove mangiare: caffetterie specialty e locali tipici (pub, trattorie, bakery) lungo il percorso.
// Selezionati da fonti editoriali (Gambero Rosso, Sprudge, European Coffee Trip, The Skinny, Time Out,
// Forever Edinburgh, Love Cairngorms, Love from Scotland, North Coast 500, Away from the Ordinary,
// Woodlands Glencoe, Postcards From Mull, olive magazine, WeRoad, Scotland4you, Highland Perthshire,
// Independent Stirling), escludendo Tripadvisor/UGC e ristoranti gourmet o stellati.
const RESTAURANTS = [
  // 13 agosto - Edimburgo (Old Town / Haymarket / New Town)
  { name: "Maggie Dickson's", kind: "typical", day: 13, date: "13 agosto", lat: 55.9471, lng: -3.1966, address: "91 Grassmarket, Edinburgh EH1 2HS", website: "https://maggie-dicksons.edan.io/", desc: "Pub storico nel Grassmarket, proprio sul percorso della giornata: haggis, neeps and tatties fatti bene in un ambiente conviviale." },
  { name: "Hideout Cafe", kind: "coffee", day: 13, date: "13 agosto", lat: 55.9490, lng: -3.1939, address: "5 Upper Bow, Edinburgh EH1 2JN", website: "https://www.hideoutcafe.co.uk/", desc: "Caffetteria specialty proprio dove Victoria Street incontra il Royal Mile: buona pausa caffè durante il giro della Old Town." },
  { name: "Cairngorm Coffee", kind: "coffee", day: 13, date: "13 agosto", lat: 55.9513, lng: -3.2115, address: "Melville Place, Edinburgh EH3 7PR (West End)", desc: "Una delle torrefazioni migliori di Edimburgo, a pochi passi dall'alloggio di Haymarket: ottimo per colazione/toast prima di iniziare la giornata." },
  { name: "Artisan Roast", kind: "coffee", day: 13, date: "13 agosto", lat: 55.9580, lng: -3.1890, address: "Broughton Street, Edinburgh EH1 3RJ", desc: "La prima caffetteria specialty aperta in Scozia (2007), con torrefazione propria: atmosfera informale non lontano da Calton Hill." },
  { name: "The Oxford Bar", kind: "typical", day: 13, date: "13 agosto", lat: 55.9528, lng: -3.2054, address: "8 Young Street, Edinburgh EH2 4JB", desc: "Pub minuscolo e senza fronzoli, quasi solo clientela locale: un classico per una pinta genuina in New Town." },
  { name: "The Sheep Heid Inn", kind: "typical", day: 13, date: "13 agosto", lat: 55.9422, lng: -3.1475, address: "43-45 The Causeway, Duddingston, Edinburgh EH15 3QA", desc: "Uno dei pub più antichi di Scozia, ai piedi di Arthur's Seat. È fuori dal percorso a piedi del 13 agosto: da valutare solo con uno spostamento in auto/bus dedicato." },

  // 14 agosto - Pitlochry, Dunkeld, Aviemore
  { name: "Café Calluna", kind: "coffee", day: 14, date: "14 agosto", lat: 56.7010, lng: -3.7280, address: "Atholl Road, Pitlochry", desc: "Caffetteria indipendente nel cuore di Pitlochry: caffè artigianale, zuppe fatte in casa, torte e prodotti locali." },
  { name: "The Old Mill Inn", kind: "typical", day: 14, date: "14 agosto", lat: 56.7037, lng: -3.7343, address: "Mill Lane, Pitlochry PH16 5BH", desc: "Locale storico sul fiume a Pitlochry: haggis neeps and tatties, steak and ale pie e salmone scozzese, con Angus beef e agnello del Perthshire." },
  { name: "The Clootie Dumpling", kind: "coffee", day: 14, date: "14 agosto", lat: 56.5665, lng: -3.5870, address: "Atholl Street, Dunkeld", desc: "Coffee shop a Dunkeld dedicato alla tradizione scozzese: dolci fatti in casa, tra cui il celebre clootie dumpling." },
  { name: "Ryvoan Café", kind: "coffee", day: 14, date: "14 agosto", lat: 57.1935, lng: -3.8280, address: "Aviemore", desc: "Caffetteria luminosa in stile loft con vista sui Cairngorms: caffè di qualità, comoda la sera dell'arrivo ad Aviemore." },

  // 15 agosto - Speyside
  { name: "Cabin Coffee", kind: "coffee", day: 15, date: "15 agosto", lat: 57.1420, lng: -3.8380, address: "Dalraddy, tra Aviemore e Kincraig", desc: "Baracchino tra i boschi lungo la strada per Loch an Eilein: specialty coffee e dolci fatti in casa, sosta comoda lungo il giro di giornata." },
  { name: "KJ's Bothy Bakery", kind: "coffee", day: 15, date: "15 agosto", lat: 57.3305, lng: -3.6070, address: "Grantown-on-Spey", desc: "Forno con torrefazione locale (Cairngorm Leaf & Bean): dolci e salati, poco fuori dal giro Boat of Garten/Nethy Bridge/Carrbridge." },

  // 17 agosto - Costa settentrionale
  
  // 18 agosto - Ullapool
  { name: "The Seafood Shack", kind: "typical", day: 18, date: "18 agosto", lat: 57.8958, lng: -5.1626, address: "West Argyle Street, Ullapool IV26 2TY", phone: "07876 142623", website: "https://www.seafoodshack.co.uk/", desc: "Chiosco di pesce pluripremiato: aragosta, gamberi e ostriche portati ogni mattina dai pescatori locali. Verificare la riapertura dopo la ristrutturazione." },
  { name: "The Arch Inn", kind: "typical", day: 18, date: "18 agosto", lat: 57.8945, lng: -5.1600, address: "Ullapool (South Shore Street)", desc: "Pub tradizionale sul porto: pinta e piatti scozzesi con vista sui traghetti per le Ebridi." },

  // 19 agosto - Inverness e Loch Ness
  { name: "Birch", kind: "coffee", day: 19, date: "19 agosto", lat: 57.4778, lng: -4.2251, address: "21 High Street, Inverness IV1 1HY", website: "https://birch.coffee/", desc: "Specialty coffee aperto nel 2024, con prodotti locali delle Highlands e delle isole: tra i migliori caffè della città." },
  { name: "Velocity Café & Bicycle Workshop", kind: "coffee", day: 19, date: "19 agosto", lat: 57.4795, lng: -4.2260, address: "Inverness", desc: "Social enterprise con caffetteria e officina bici: caffè, colazioni e atmosfera comunitaria fuori dai circuiti turistici." },
  { name: "Johnny Foxes", kind: "typical", day: 19, date: "19 agosto", lat: 57.4772, lng: -4.2255, address: "26 Bank Street, Inverness", website: "https://johnnyfoxes.co.uk/", desc: "Pub dal look informale ma con oltre 25 anni di storia: panini creativi (anche vegetali), birre alla spina e caffè di livello." },
  { name: "Ness Deli", kind: "coffee", day: 19, date: "19 agosto", lat: 57.3280, lng: -4.4400, address: "The Village Green, Drumnadrochit", website: "https://thenessdeli.com/", desc: "Caffetteria e tavola calda a due passi dal Loch Ness Centre: colazioni, pranzi leggeri, shortbread e flapjack fatti in casa." },

  // 20 agosto - Fort William
  { name: "The Wildcat", kind: "coffee", day: 20, date: "20 agosto", lat: 56.8200, lng: -5.1050, address: "21 High Street, Fort William", desc: "Locale 100% vegano con caffè specialty in espresso o V60, shortbread vegetali, wrap e zuppe: sosta ideale prima del treno Jacobite a Glenfinnan." },
  { name: "The Crofter", kind: "typical", day: 20, date: "20 agosto", lat: 56.8205, lng: -5.1045, address: "High Street, Fort William", desc: "Pub tipico scozzese sulla via principale: haggis e cucina locale in un ambiente informale." },

  // 21 agosto - Glencoe e Oban
  { name: "Clachaig Inn", kind: "typical", day: 21, date: "21 agosto", lat: 56.6644, lng: -5.0595, address: "Glencoe, Argyll PH49 4HX", phone: "+44 1855 811252", website: "https://clachaig.com/", desc: "Storico pub ai piedi delle Tre Sorelle di Glencoe: la Boots Bar è perfetta dopo una camminata, con birre locali e piatti scozzesi." },
  { name: "Glencoe Farmhouse & Cafe", kind: "coffee", day: 21, date: "21 agosto", lat: 56.6720, lng: -5.1040, address: "Glencoe", desc: "Coffee shop contemporaneo con grani di Inverness Coffee Roasters: buona sosta tra Glen Etive e il Glencoe Visitor Centre." },
  { name: "Julie's", kind: "coffee", day: 21, date: "21 agosto", lat: 56.4150, lng: -5.4720, address: "Oban (traversa acciottolata vicino al porto)", desc: "Coffee shop raccolto nel centro di Oban: ottimo caffè, prawn sandwich e scones." },

  // 22 agosto - Isola di Mull
  { name: "The Mishnish", kind: "typical", day: 22, date: "22 agosto", lat: 56.6235, lng: -6.0645, address: "Tobermory, Isle of Mull", desc: "Il pub giallo più fotografato di Tobermory: cimeli marinari, atmosfera calorosa, cucina scozzese tradizionale." },
  { name: "Macgochans", kind: "typical", day: 22, date: "22 agosto", lat: 56.6232, lng: -6.0640, address: "Tobermory, Isle of Mull", website: "https://www.macgochans-tobermory.co.uk/", desc: "Ex cottage di pescatori affacciato sul porto: pesce locale, musica dal vivo e vista sul Sound of Mull." },

  // 23 agosto - Loch Lomond
  { name: "The Drovers Inn", kind: "typical", day: 23, date: "23 agosto", lat: 56.3284, lng: -4.7218, address: "Inverarnan, Argyll and Bute G83 7DX", phone: "01301 263108", website: "https://www.droversinn.co.uk/", desc: "Locanda del 1705 sulle rive di Loch Lomond, con animali impagliati e camini accesi: tappa d'atmosfera lungo il rientro verso Stirling." },

  // 24 agosto - Stirling e Leith
  { name: "HBW Coffee", kind: "coffee", day: 24, date: "24 agosto", lat: 56.1180, lng: -3.9370, address: "Barnton Street, Stirling", desc: "Specialty coffee di riferimento a Stirling, monorigine curate: comoda pausa vicino alla spianata del castello." },
  { name: "Unorthodox Roasters", kind: "coffee", day: 24, date: "24 agosto", lat: 56.1192, lng: -3.9380, address: "12 Friars Street, Stirling FK8 1HA", website: "https://www.unorthodoxroasters.co.uk/", desc: "Torrefazione scozzese con caffetteria in centro a Stirling: monorigine curate, segnalata come tappa eccezionale." },
  { name: "Nicky-Tams Bar & Bothy", kind: "typical", day: 24, date: "24 agosto", lat: 56.1195, lng: -3.9375, address: "Baker Street, Stirling", desc: "Uno dei bar più antichi di Stirling (dal 1718), legno e birre locali: haggis, neeps and tatties in un ambiente tradizionale." },
  { name: "The King's Wark", kind: "typical", day: 24, date: "24 agosto", lat: 55.9758, lng: -3.1695, address: "36 The Shore, Leith, Edinburgh EH6 6QU", desc: "Pub con radici nel 1400 sulle rive di Leith, a pochi passi dalla Royal Yacht Britannia: prodotti locali, carne, selvaggina e pesce sostenibile." },

  // 25 agosto - Stockbridge
  { name: "Fortitude Coffee", kind: "coffee", day: 25, date: "25 agosto", lat: 55.9583, lng: -3.2115, address: "Hamilton Place, Stockbridge, Edinburgh", desc: "Torrefazione propria nel cuore di Stockbridge: tappa comoda per l'ultima passeggiata prima dell'aeroporto." },
  { name: "The Stockbridge Tap", kind: "typical", day: 25, date: "25 agosto", lat: 55.9592, lng: -3.2091, address: "Stockbridge, Edinburgh", desc: "Ale selezionate e menu semplice (pie, sandwich) in un pub quasi esclusivamente frequentato da locali." }
];

// Budget del viaggio (riepilogo spese): visibile sul sito solo dietro password.
const BUDGET = {
  items: [
    { icon: "🛏️", label: "Alloggi",          amount: 3412.73, color: "#c1440e" },
    { icon: "🍔", label: "Ristoranti e bar",  amount: 1515.76, color: "#b8860b" },
    { icon: "✈️", label: "Voli",              amount: 1402.60, color: "#1d4e6b" },
    { icon: "🚕", label: "Trasporti",         amount: 902.59,  color: "#2f8fa3" },
    { icon: "🛒", label: "Spesa",             amount: 676.04,  color: "#1f7a5c" },
    { icon: "🎟️", label: "Visite",            amount: 380.13,  color: "#6b3fa0" },
    { icon: "🛍️", label: "Shopping",          amount: 346.95,  color: "#d16ba5" },
    { icon: "🐈", label: "Cat sitter",        amount: 124.00,  color: "#8a7a5c" },
    { icon: "🛂", label: "Visto",             amount: 97.19,   color: "#4a6fa5" }
  ]
};

const DOCUMENTS = [
  { label: "Biglietti aerei", file: "documenti/Biglietti_aerei_viaggio_Scozia.pdf" },
  { label: "Assicurazione di viaggio", file: "documenti/Assicurazione_viaggio_Scozia.pdf" },
  { label: "Voucher noleggio auto", file: "documenti/Voucher_noleggio_macchina.pdf" },
  { label: "Prenotazione parcheggio Ciampino", file: "documenti/Prenotazione_parcheggio_Ciampino.pdf" },
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
