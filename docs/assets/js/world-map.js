(function () {
  "use strict";
  var mapEl = document.getElementById("world-map");
  if (!mapEl || typeof L === "undefined") return;

  var COUNTRIES = [
    {
      id: "TH",
      nameEn: "Thailand",
      lat: 16.4,
      lon: 101.3,
      sites: ["Chiang Mai University", "Khon Kaen University"],
      lenses: ["diet", "terrain", "sports"],
      why: "Chiang Mai University and Khon Kaen University are the two named RSNA sites. One sits in the urban North, the other in Isan, so the pin stands for both city clinics and agricultural catchments — not a national count of DICOM files.\n\nKnee presentations in this mix tend to stack three loads: repeated occupational squat and kneel, contact or twist sport, and rising urban body weight. That is why Thailand is a useful teaching pin for diet, terrain, and sport at once.",
      diet: "Everyday meals are still built on rice, vegetables, fish, and herbs. The change that matters for joints is the urban overlay: sugar-sweetened drinks, fried street food, and packaged snacks.\n\nThai national health surveys have documented overweight climbing with city living. A 2025 meta-analysis links highly processed diets to higher knee OA risk, mainly through body weight and metabolic inflammation — not because rice itself damages cartilage.",
      terrain: "Wet-rice work in the North and Northeast keeps people kneeling, deep-squatting, and carrying loads on uneven paddies. That pattern loads the patellofemoral joint and the menisci for hours at a time.\n\nOccupational research (Wang et al., 2020) found farmers had about 1.64 times the knee OA odds of sitting jobs. Motorbikes on rough roads and standing retail in cities add extra load cycles after the farm day.",
      sports: "Football is widespread. Sepak takraw demands jump, high flexion, and sudden twist. Muay Thai adds clinch, checks, and kicks that torque the knee.\n\nThose sports map onto ACL, MCL, and meniscus tears. Once the meniscus or ACL is gone, medial OA often follows years later. The pin is context for trauma plus load, not a claim that every Thai study in the challenge is a fighter.",
      labels: "In the 12-class list, this context points to medial meniscus, PF OA from squat, ACL and MCL from contact sport, then later medial OA. Effusion and bone bruise sit with acute games. This is mechanism mapping, not a count of files from Chiang Mai or Khon Kaen.",
      koa: "GBD 2021 estimates about 4.1 million people with knee OA in Thailand (ASPR 3,721 per 100,000), with one of the larger 1990–2021 increases (+18%). That is a population rate, not a count of Kaggle files from Chiang Mai or Khon Kaen."
    },
    {
      id: "TW",
      nameEn: "Taiwan",
      lat: 24.15,
      lon: 120.67,
      sites: ["China Medical University Hospital, Taichung"],
      lenses: ["diet", "sports"],
      why: "China Medical University Hospital in Taichung is the named site. High published GBD rates here owe more to longevity and access to diagnosis than to a uniquely dangerous landscape.\n\nThe pin is a stand-in for East Asian urban aging: people live long enough, and get scanned often enough, for degenerative labels to accumulate in clinic MRI.",
      diet: "An aging society plus city eating patterns raise joint load. Night markets, sweet drinks, and reduced daily walking sit on top of a rice-based staple diet.\n\nOverweight and metabolic disease add medial-compartment load. Diet is a co-factor with age, not a one-line cause of every Taiwanese knee study.",
      terrain: "Taiwan is a mountainous island, but most people live and work on the western plains. Service, factory, and office work dominate those cities more than highland farming.\n\nHard urban ground and long standing shifts still cycle load through the knee. Terrain here is less paddies, more pavement.",
      sports: "Basketball, baseball, and recreational running on hard roads are the visible sport loads. Cutting and jumping feed meniscus injury; repeated flexion on concrete feeds PF OA.\n\nSchool and amateur leagues matter more than a single pro club. Acute tears and overuse can both appear on MRI.",
      labels: "Likely findings in this context: PF OA, medial OA, medial meniscus, effusion, and synovitis with age and load. Sport adds ACL or meniscus in younger patients. High ASPR does not mean every Taichung scan is OA.",
      koa: "Knee OA age-standardized prevalence rate 5,264 per 100,000 (GBD 2021) is high among countries with published figures. That number describes population burden, not how many Kaggle files came from Taichung."
    },
    {
      id: "US",
      nameEn: "United States",
      lat: 39.95,
      lon: -75.16,
      sites: ["Thomas Jefferson Hospital, Philadelphia"],
      lenses: ["diet", "sports"],
      why: "Thomas Jefferson Hospital in Philadelphia is the named US site. A large urban academic center pulls trauma, reconstruction follow-up, and degenerative disease into the same scanner queue.\n\nThe image mix that students should expect is ACL and MCL, meniscus, bone bruise, and load-related OA — not a map of all American knees.",
      diet: "Highly processed diets and obesity are the main modifiable load factors in US knee OA. Extra body mass is taken mostly by the medial compartment.\n\nDiet here is not regional cuisine trivia. It is the public-health overlay that keeps OA volume high even when sport trauma is absent.",
      terrain: "City life means hard flat surfaces, stairs, and long standing in service work. Philadelphia winters add ice and fall risk on top of pavement.\n\nTerrain is urban rather than alpine. The load story is repetition and body weight, plus occasional impact from a fall.",
      sports: "American football, basketball, and NCAA soccer sit behind many ligament labels. National ACL incidence is about 29 per 100,000.\n\nContact and cutting explain acute ACL, MCL, meniscus, and bone bruise. Recreational running and gym load add PF symptoms later.",
      labels: "Expect ACL, MCL, medial and lateral meniscus, contusion, effusion, and later medial OA. Fracture is less common than bruise in this mix. Again: one hospital, not 800,000 files.",
      koa: "The knee is the joint that degenerates most often in US clinic load. Case volume stays high because obesity is common and MRI access is high. That is demand, not a DICOM census."
    },
    {
      id: "CA",
      nameEn: "Canada",
      lat: 45.4,
      lon: -75.7,
      sites: ["McGill University Health Centre, Montreal", "Unity Health Toronto"],
      lenses: ["diet", "terrain", "sports"],
      why: "Two named sites — McGill in Montreal and Unity Health in Toronto — pull both winter trauma and urban degenerative disease.\n\nCanada is in the set because those hospitals submitted, not because every province is represented. Read the pin as two large English-and-French academic catchments.",
      diet: "The eating pattern is Western: energy-dense food and overweight as a co-factor for OA. That sits beside, not instead of, sport and ice injury.\n\nDiet explains part of the chronic OA queue. It does not explain a ski-weekend bone bruise.",
      terrain: "Long winters and ice raise falls. Bone bruise and occasional fracture follow impact on frozen ground, not only contact sport.\n\nCities are otherwise flat. The distinctive terrain load is seasonal ice, plus indoor hard courts for the rest of the year.",
      sports: "Ice hockey, skiing, lacrosse, and soccer are the headline sports. Hockey and ski add valgus, rotation, and high-energy impact.\n\nThose mechanics line up with ACL, MCL, meniscus, and contusion. Hockey also produces collisions that look like bruise more than classic cutting ACL.",
      labels: "Winter trauma: contusion, fracture, ACL, MCL, effusion. Urban aging: medial OA, PF OA, Baker cyst, synovitis. Two hospitals can show both queues in the same challenge set.",
      koa: "High-income country with good MRI access, so more of the 12 labels get imaged when they exist. Access inflates recorded findings relative to places that rarely scan the knee."
    },
    {
      id: "DE",
      nameEn: "Germany",
      lat: 49.79,
      lon: 9.95,
      sites: ["University Hospital of Würzburg"],
      lenses: ["terrain", "sports"],
      why: "University Hospital of Würzburg sits in central Europe where football density and alpine access overlap.\n\nThe teaching point is sport plus elevation, not a claim that Bavaria dominates the pixel stack.",
      diet: "Central European diets and overweight remain OA co-factors. Meal pattern is secondary here to ski and football trauma.\n\nStill, body weight loads the medial compartment in the degenerative queue that follows old injuries.",
      terrain: "The Alps are close enough for weekend skiing and hiking. Elevation change, packed snow, and hard piste are the terrain loads.\n\nIce and slope also raise fall energy compared with a flat city street.",
      sports: "Professional football and alpine skiing both feed knee MRI. ROMHS found knee injury highest in skiing (56% of injuries in that cohort).\n\nSki bindings and rotation produce ACL and MCL; football adds cutting and contact. Insurance-based ACL incidence is about 32 per 100,000.",
      labels: "ACL, MCL, meniscus, contusion, and occasional fracture from ski energy. Football adds the same ligament set at lower impact energy. Degenerative OA follows years later.",
      koa: "ACL incidence from insurance data is a trauma signal, not an OA prevalence map. Würzburg is one named hospital in that system."
    },
    {
      id: "IT",
      nameEn: "Italy",
      lat: 45.32,
      lon: 8.86,
      sites: ["Salus Vigevano Centro Sanitario Depa, Vigevano"],
      lenses: ["diet", "sports"],
      why: "The named site is in Vigevano, on the northern Po plain. The useful contrast is a diet that research treats as relatively protective, sitting next to football that tears ACLs.\n\nOne RSNA-listed center is not a national prevalence sample.",
      diet: "Mediterranean pattern — olive oil, plants, fish — was linked to lower knee OA risk in 2025 work. That is a population association, not a shield for a midfielder.\n\nLocal meals can still sit beside overweight in towns. Diet here is the background, sport is the acute story.",
      terrain: "Northern Italy is the Po plain, close to the Alps. Daily life for this site is more town and pitch than mountain farm.\n\nAlpine weekends exist, but the pin is not a ski-town hospital.",
      sports: "Calcio is the load that shows up in ligament labels. Semi-professional footballers have been reported around 7.7 ACL injuries per 100,000 player-days.\n\nCutting, landing, and contact explain ACL, meniscus, and MCL. Degeneration follows if the meniscus is lost.",
      labels: "Priority findings: ACL, lateral and medial meniscus, MCL, effusion. OA labels are the long tail after injury, not the opening headline.",
      koa: "Do not read this pin as Italy's OA rate. It is a named submitting site with a football-and-diet teaching contrast."
    },
    {
      id: "GR",
      nameEn: "Greece",
      lat: 35.34,
      lon: 25.13,
      sites: ["University Hospital of Heraklion, Crete"],
      lenses: ["diet", "terrain", "sports"],
      why: "University Hospital of Heraklion stands in for a Mediterranean island population. Diet quality does not erase knee disease if contact sport and hill walking remain.\n\nCrete is the catchment, not all of Greece.",
      diet: "The Cretan pattern — high fiber, vegetables, olive oil — is the textbook Mediterranean diet. It is associated with better metabolic profiles and, in some work, lower OA risk.\n\nIt does not unload a football tackle or a day of walking limestone hills.",
      terrain: "Crete is a rocky island with slopes and hill farming. Uneven paths and elevation load the PF joint and raise stumble risk.\n\nTerrain here is real, unlike a completely flat capital city, but it is still one hospital island.",
      sports: "Greek football and running on hard ground are the sport loads. Twist and impact sit on top of hill walking, not instead of it.\n\nAmateur leagues matter as much as any named club.",
      labels: "PF OA and medial OA from slope and load; ACL and meniscus from football; contusion from falls on rock or pitch. Effusion follows both queues.",
      koa: "Crete represents a Mediterranean population in the site list. It is not a GBD country-rate pin by itself."
    },
    {
      id: "TR",
      nameEn: "Türkiye",
      lat: 39.93,
      lon: 32.86,
      sites: ["Hacettepe University, Ankara", "Koç University Hospital, Istanbul", "Samsun Training and Research Hospital"],
      lenses: ["diet", "terrain", "sports"],
      why: "Three named hospitals cover the capital, Marmara, and the Black Sea. That is the densest hospital cluster in this map and the Europe–Asia bridge in the dataset.\n\nThe mix is work-related OA plus football trauma, not a single coastal stereotype.",
      diet: "Anatolian meals still carry vegetables, legumes, and grains. Cities take on a Western energy-dense pattern on top of that base.\n\nUrban overweight is the diet pathway into medial OA. Rural plates are not the same as Istanbul fast food.",
      terrain: "The Anatolian plateau and rural farm work still use deep squat and kneel. That occupational cycle is closer to the Thai paddy story than to a Dutch office.\n\nIstanbul and Ankara add urban pavement and stairs. Three sites can show both.",
      sports: "Football is the main sport. Knee twist and contact map onto ACL and MCL, with meniscus as the passenger injury.\n\nAmateur and professional play both send knees to MRI in large cities.",
      labels: "From work: PF OA, medial meniscus, medial OA. From football: ACL, MCL, lateral meniscus, effusion, contusion. Three hospitals make this pin broader than a one-clinic country.",
      koa: "Site geography is the story: Ankara, Istanbul, Samsun. Do not turn three acknowledgments into a national OA ranking."
    },
    {
      id: "MA",
      nameEn: "Morocco",
      lat: 31.63,
      lon: -8.0,
      sites: ["CHU Mohamed VI Cadi Ayyad University, Marrakech"],
      lenses: ["diet", "terrain", "sports"],
      why: "CHU Mohamed VI in Marrakech is the named site. Knees here tie more to mountain and farm work than to gym culture.\n\nNorth Africa is scarce in open MRI challenge sets, so the pin also marks geographic coverage, not volume.",
      diet: "Mediterranean–Maghreb cooking (olive oil, grains, vegetables) is shifting toward modern markets and packaged food in the city.\n\nThat transition is the diet co-factor. It is slower than a US processed-food pattern, but it is not static.",
      terrain: "The Atlas foothills mean uneven ground, slope walking, and agricultural carrying. Those are PF and meniscus loads from work, not from a treadmill.\n\nMarrakech itself is a city; the hospital still draws the surrounding hills.",
      sports: "Football is the region's main sport. Cutting and contact add ACL and meniscus on top of occupational squat.\n\nGym-based overload is the smaller story here.",
      labels: "PF OA, medial meniscus, and medial OA from work and slope. ACL, MCL, and effusion from football. Contusion from uneven ground.",
      koa: "Open MRI sets under-represent North Africa. A single Marrakech site should be read as presence, not as a prevalence estimate."
    },
    {
      id: "AR",
      nameEn: "Argentina",
      lat: -34.6,
      lon: -58.38,
      sites: ["Centro Rossi, Buenos Aires"],
      lenses: ["diet", "sports"],
      why: "Centro Rossi in Buenos Aires is the named site. The teaching accent is sport, not Andes terrain — Chile carries the mountain pin in this pair.\n\nLatin America in the challenge acknowledgments is Argentina plus Chile.",
      diet: "A high red-meat food culture and urban body weight are OA co-factors. Load through the medial compartment rises with BMI.\n\nDiet explains the degenerative queue. It does not replace football as the acute story.",
      terrain: "Buenos Aires sits on the Pampas: flat plains around the capital. Daily terrain is city pavement, not mountain trail.\n\nThat is why this pin is weaker on the Terrain lens than Chile or Mongolia.",
      sports: "Professional and amateur football are dense. Retired Olympic footballers have been reported with about 25% knee OA, a reminder that career play leaves a degenerative tail.\n\nACL, meniscus, and later medial OA are the expected chain.",
      labels: "ACL, medial and lateral meniscus, MCL, effusion, then medial OA. Contusion with contact. PF OA less central than in squat-farm countries.",
      koa: "Argentina is one of two Latin American named countries in the set. The pin is Buenos Aires, not the whole Pampas."
    },
    {
      id: "CL",
      nameEn: "Chile",
      lat: -33.45,
      lon: -70.67,
      sites: ["Clinica Alemana, Santiago"],
      lenses: ["terrain", "sports"],
      why: "Clinica Alemana in Santiago sits in an Andean valley. Chile is the only country in this set where high mountains cut against Southern Hemisphere snow sports.\n\nThat is the reason it survives a Terrain lens when Argentina does not.",
      diet: "Urban Latin eating in the capital, with overweight as a co-factor. Diet is present, but mountain and sport are the distinctive loads.\n\nBody weight still feeds medial OA in the city queue.",
      terrain: "The Andes wrap the city. Hiking, slope work, and elevation change load the PF joint and raise fall energy.\n\nValley pavement plus mountain weekend is the split catchment of a Santiago hospital.",
      sports: "Andean skiing, football, and rugby. Ski adds high-energy ACL and bruise; football and rugby add contact and cutting.\n\nSouthern Hemisphere snow sport is rare in this 18-country list, which is why the pin is sharp on Sport plus Terrain.",
      labels: "ACL, MCL, meniscus, contusion, occasional fracture from ski energy. PF OA from hiking. Football/rugby share the ligament set.",
      koa: "The Santiago site is a valley hospital with mountain access. It is not a census of Chilean knees."
    },
    {
      id: "AU",
      nameEn: "Australia",
      lat: -33.87,
      lon: 151.21,
      sites: ["Liverpool Hospital, NSW"],
      lenses: ["diet", "sports"],
      why: "Liverpool Hospital in New South Wales is the named site, in the Sydney basin. The emphasis is ligament injury from cutting sports, not Outback terrain.\n\nOne public hospital does not stand for the whole continent.",
      diet: "Western eating pattern with high overweight in the general population. Medial OA follows body weight independently of AFL.\n\nDiet and sport run in parallel in this pin.",
      terrain: "Urban coast, mostly flat. Beaches and parks matter for recreation, but the occupational ground is pavement.\n\nTerrain is not the reason Australia stays on a Terrain lens.",
      sports: "AFL, rugby, and netball produce cutting, pivoting, and contact. ACL rates are especially discussed in female athletes because of cutting mechanics and landing.\n\nMeniscus and MCL travel with those sports. Degenerative OA is the long tail after reconstruction.",
      labels: "ACL first, then meniscus, MCL, bone bruise, effusion. Medial OA and PF OA in older or post-surgical patients. Fracture less typical than bruise.",
      koa: "NSW site, not a national OA league table. High sport MRI volume can make ligament labels look common without describing the whole population."
    },
    {
      id: "MN",
      nameEn: "Mongolia",
      lat: 47.92,
      lon: 106.92,
      sites: ["Intermed Hospital, Ulaanbaatar"],
      lenses: ["diet", "terrain", "sports"],
      why: "Intermed Hospital in Ulaanbaatar is the named site. The teaching point is the opposite of a simple terrain story: rough landscape does not mean MRI will be full of OA.\n\nPublished GBD rates here are lower than Taiwan even though the steppe is harsher.",
      diet: "High meat and dairy intake. Lower reported OA may reflect younger age structure and less diagnostic access, not proof that this diet protects cartilage.\n\nDo not use Mongolia as a diet miracle pin.",
      terrain: "Steppe plateau, extreme cold, and horseback. Cold and uneven ground are real. They still do not automatically equal high imaged OA.\n\nUlaanbaatar itself is a concentrated urban hospital in a sparsely populated country.",
      sports: "Traditional wrestling and horseback riding. Wrestling loads the knee in flexion and rotation; riding adds repetition and fall risk.\n\nThose are not the same as cutting-field ACL patterns in Australia or the US.",
      labels: "Possible meniscus, PF load, contusion, and OA — but expected volume on MRI may be lower than the landscape suggests. Do not force all 12 labels onto this pin.",
      koa: "ASPR 2,600 per 100,000 (GBD 2021) is lower than Taiwan's 5,264. Age, diagnosis, and MRI access explain more of that gap than a single food or mountain."
    },
    {
      id: "BE",
      nameEn: "Belgium",
      lat: 50.95,
      lon: 3.13,
      sites: ["AZ Delta, Roeselare"],
      lenses: ["sports"],
      why: "AZ Delta in Roeselare is a named co-host site representing Western Europe in the acknowledgments.\n\nThe pin is institutional presence plus football and cycling culture, not dramatic terrain.",
      diet: "European diet with overweight as an OA co-factor. Same Western load story as neighboring countries, without a distinctive staple narrative.\n\nDiet is background here.",
      terrain: "Low plains. Joint load comes from sport and standing work, not mountains or paddies.\n\nThat is why Belgium is weak on a Terrain lens.",
      sports: "Belgian football and cycling. Football supplies the ACL and meniscus pattern. Cycling is usually kinder to the knee but still appears in overuse clinics.\n\nAmateur club density in Flanders is high.",
      labels: "ACL, meniscus, MCL, effusion from football. Medial OA and PF OA in the older queue. Contusion from contact, not from alpine energy.",
      koa: "Western Europe with high MRI access. Recorded findings reflect scanning habits as much as disease."
    },
    {
      id: "MT",
      nameEn: "Malta",
      lat: 35.9,
      lon: 14.51,
      sites: ["Mater Dei Hospital, Msida"],
      lenses: ["diet", "sports"],
      why: "Mater Dei Hospital in Msida is the named site. A small island still matters because the challenge set needs scanner and report-language diversity, not only large countries.\n\nThe pin is coverage, not volume.",
      diet: "Mediterranean island diet as the background pattern. Urban European food sits on top of it in town.\n\nNo unique staple claim beyond that mixed pattern.",
      terrain: "Limestone and short urban slopes. Walkable hills exist, but this is not Atlas or Andes terrain.\n\nDaily load is town walking more than farm squat.",
      sports: "Football is the island's main sport and the likely acute MRI source.\n\nCutting and contact on hard pitches map to ACL and meniscus in a small population that still plays hard.",
      labels: "ACL, meniscus, effusion from football. OA and PF load in older patients. One hospital can still show most of the 12 classes over time.",
      koa: "A small island means the set spans both tiny countries and large medical centers. Do not scale Malta's pin to file counts."
    },
    {
      id: "BG",
      nameEn: "Bulgaria",
      lat: 42.7,
      lon: 23.32,
      sites: ["Sofia University \"St. Kliment Ohridski\""],
      lenses: ["terrain", "sports"],
      why: "Sofia University is the named site. Mountains plus football give both slope walking and ligament injury.\n\nEastern Europe is otherwise thin in this 18-country list, so the pin also marks regional coverage.",
      diet: "Balkan home cooking shifting toward urban supermarket patterns. Overweight follows that shift in the city.\n\nDiet is a co-factor, not the headline.",
      terrain: "The Balkan mountains sit around Sofia. Hiking, slope walking, and winter conditions load the PF joint and raise falls.\n\nThe hospital is in the capital, with a mountain hinterland.",
      sports: "Football, wrestling, and gymnastics. Football supplies cutting ACL; wrestling and gymnastics add flexion, rotation, and landing load.\n\nThat combination is broader than a football-only country.",
      labels: "ACL and meniscus from football. PF OA from slopes and gymnastics flexion. Contusion from falls. Medial OA as the chronic tail.",
      koa: "Eastern Europe in the challenge set. One Sofia site is presence, not a regional OA survey."
    },
    {
      id: "HR",
      nameEn: "Croatia",
      lat: 45.82,
      lon: 16.0,
      sites: ["University Hospital Dubrava, Zagreb"],
      lenses: ["sports", "terrain"],
      why: "University Hospital Dubrava in Zagreb sits in a country where football is core culture.\n\nThe pin is a capital hospital, not the Dalmatian coast by itself.",
      diet: "The Adriatic coast is close to a Mediterranean pattern; Zagreb is more Central European. The hospital sees the inland city diet first.\n\nDiet is mixed, sport is clearer.",
      terrain: "Croatia sits between the Pannonian plain and the Dinaric Alps. Zagreb is on the plain side, with mountain access not far away.\n\nTerrain is real but secondary to football for this pin.",
      sports: "National football is dense relative to population. Cutting, landing, and contact send ACL and meniscus to MRI.\n\nThat is the main Sport-lens reason Croatia stays visible.",
      labels: "ACL, meniscus, MCL, effusion, later medial OA. Some PF and contusion if mountain weekends enter the queue.",
      koa: "Central–southern Europe. Dubrava is one named hospital in Zagreb, not a league-wide scan archive."
    },
    {
      id: "BA",
      nameEn: "Bosnia and Herzegovina",
      lat: 43.86,
      lon: 18.41,
      sites: ["University of Sarajevo"],
      lenses: ["terrain", "sports"],
      why: "University of Sarajevo is the named site. Mountain terrain is clear in this southeast-European challenge pin: the city sits in a valley with steep sides.\n\nCoverage of the western Balkans is the other reason the pin exists.",
      diet: "Balkan home cooking plus an urban shift in the capital. Diet is a background OA co-factor.\n\nNo separate staple claim beyond that transition.",
      terrain: "Mountains and valleys, with winter snow. Slope walking, ice, and valley inversion winters all add fall and PF load.\n\nThis is one of the stronger Terrain pins in the European cluster.",
      sports: "Football is the main team sport; skiing exists in some areas. Football supplies ligament tears; snow adds bruise and occasional ski ACL.\n\nAmateur play is the realistic MRI source.",
      labels: "ACL and meniscus from football. Contusion and PF OA from ice and slopes. Medial OA in the older queue.",
      koa: "Sarajevo is a valley site. Use it as geography and sport context, not as a national OA rate."
    }
  ];

  // Exact Kaggle Acknowledgements names. 19 data contributors, then 3 additional sites.
  var SITES = [
    { id: "azdelta", country: "BE", extra: false, lat: 50.947, lon: 3.122, city: "Roeselare", name: "AZ Delta, Roeselare, Belgium" },
    { id: "rossi", country: "AR", extra: false, lat: -34.588, lon: -58.397, city: "Buenos Aires", name: "Centro Rossi, Buenos Aires, Argentina" },
    { id: "chiangmai", country: "TH", extra: false, lat: 18.802, lon: 98.953, city: "Chiang Mai", name: "Chiang Mai University, Chiang Mai, Thailand" },
    { id: "cmuh", country: "TW", extra: false, lat: 24.157, lon: 120.681, city: "Taichung", name: "China Medical University Hospital, Taichung, Taiwan" },
    { id: "marrakech", country: "MA", extra: false, lat: 31.649, lon: -8.008, city: "Marrakech", name: "CHU Mohamed VI Cadi Ayyad University, Marrakech, Morocco" },
    { id: "aleman", country: "CL", extra: false, lat: -33.392, lon: -70.572, city: "Santiago", name: "Clinica Alemana Santiago de Chile, Santiago, Chile" },
    { id: "hacettepe", country: "TR", extra: false, lat: 39.933, lon: 32.863, city: "Ankara", name: "Hacettepe University School of Medicine, Ankara, Türkiye" },
    { id: "khonkaen", country: "TH", extra: false, lat: 16.466, lon: 102.826, city: "Khon Kaen", name: "Khon Kaen University, Khon Kaen, Thailand" },
    { id: "koc", country: "TR", extra: false, lat: 41.038, lon: 28.939, city: "Istanbul", name: "Koç University Hospital, Istanbul, Türkiye" },
    { id: "materdei", country: "MT", extra: false, lat: 35.901, lon: 14.495, city: "Msida", name: "Mater Dei Hospital, Msida, Malta" },
    { id: "mcgill", country: "CA", extra: false, lat: 45.473, lon: -73.601, city: "Montreal", name: "McGill University Health Centre, Montreal, Canada" },
    { id: "samsun", country: "TR", extra: false, lat: 41.292, lon: 36.330, city: "Samsun", name: "Samsun Training and Research Hospital, Samsun, Türkiye" },
    { id: "sofia", country: "BG", extra: false, lat: 42.693, lon: 23.335, city: "Sofia", name: "Sofia University \"St. Kliment Ohridski\", Sofia, Bulgaria" },
    { id: "jefferson", country: "US", extra: false, lat: 39.949, lon: -75.157, city: "Philadelphia", name: "Thomas Jefferson Hospital, Philadelphia, PA, USA" },
    { id: "unity", country: "CA", extra: false, lat: 43.654, lon: -79.377, city: "Toronto", name: "Unity Health Toronto, Toronto, Canada" },
    { id: "dubrava", country: "HR", extra: false, lat: 45.834, lon: 16.036, city: "Zagreb", name: "University Hospital Dubrava, Zagreb, Croatia" },
    { id: "heraklion", country: "GR", extra: false, lat: 35.327, lon: 25.132, city: "Heraklion", name: "University Hospital of Heraklion, Crete, Greece" },
    { id: "wurzburg", country: "DE", extra: false, lat: 49.801, lon: 9.954, city: "Würzburg", name: "University Hospital of Würzburg, Würzburg, Germany" },
    { id: "sarajevo", country: "BA", extra: false, lat: 43.857, lon: 18.413, city: "Sarajevo", name: "University of Sarajevo, Sarajevo, Bosnia and Herzegovina" },
    { id: "intermed", country: "MN", extra: true, lat: 47.915, lon: 106.935, city: "Ulaanbaatar", name: "Intermed Hospital, Ulaanbaatar, Mongolia" },
    { id: "liverpool", country: "AU", extra: true, lat: -33.920, lon: 150.925, city: "Liverpool", name: "Liverpool Hospital, Liverpool, NSW, Australia" },
    { id: "vigevano", country: "IT", extra: true, lat: 45.317, lon: 8.861, city: "Vigevano", name: "Salus Vigevano Centro Sanitario Depa, Vigevano, Italy" }
  ];

  var FINDINGS = [
    { id: "acl", name: "ACL", mech: "Sport / trauma", link: "Cutting, football, ski, rugby" },
    { id: "mcl", name: "MCL", mech: "Sport / trauma", link: "Valgus contact" },
    { id: "mm", name: "Medial meniscus", mech: "Sport / work", link: "Twist, squat, kneeling work" },
    { id: "lm", name: "Lateral meniscus", mech: "Sport / trauma", link: "Often with ACL in cutting sports" },
    { id: "moa", name: "Medial OA", mech: "Load / diet", link: "Medial compartment takes body-weight load" },
    { id: "loa", name: "Lateral OA", mech: "Load / diet", link: "Alignment and degeneration" },
    { id: "pfoa", name: "PF OA", mech: "Load / terrain", link: "Squat, climb, hiking" },
    { id: "eff", name: "Effusion", mech: "Shared", link: "Follows injury or OA" },
    { id: "syn", name: "Synovitis", mech: "Shared", link: "Load or injury inflammation" },
    { id: "bak", name: "Baker's", mech: "Load", link: "Often with OA or effusion" },
    { id: "con", name: "Contusion", mech: "Sport / terrain", link: "Fall, ice, contact" },
    { id: "fx", name: "Fracture", mech: "Sport / terrain", link: "High energy, ski, heavy work" }
  ];

  var LENSES = [
    ["all", "All", "Show every named Kaggle site"],
    ["diet", "Diet", "Countries where food or body weight is a teaching point"],
    ["terrain", "Terrain", "Countries where ground, climate, or work load the knee"],
    ["sports", "Sport", "Countries where games twist, cut, or hit the knee"]
  ];

  // GBD 2021 knee OA prevalent cases + ASPR from Chen et al. 2025, PLOS One Table S1
  // (same GBD 2021 estimates cited by Wang/Ouyang et al. 2025). Not RSNA file counts.
  var TIPS = {
    TH: { cases: 4101374, aspr: 3721, diet: "Urban processed food and rising body weight", terrain: "Rice-paddy squat, kneel, and carrying", sport: "Football, takraw, Muay Thai twist and contact" },
    TW: { cases: 2169014, aspr: 5264, diet: "Aging cities, urban food, overweight", terrain: "Pavement and standing work on the plains", sport: "Basketball, baseball, hard-road running" },
    US: { cases: 27188653, aspr: 4949, diet: "Processed food and obesity", terrain: "City pavement, standing work, winter ice", sport: "Football, basketball, soccer — ACL" },
    CA: { cases: 1817661, aspr: 2723, diet: "Western pattern, overweight", terrain: "Ice and long winters — falls", sport: "Hockey, ski, lacrosse, soccer" },
    DE: { cases: 7294669, aspr: 4186, diet: "Body weight as an OA co-factor", terrain: "Alps nearby — slope and snow", sport: "Football and alpine ski" },
    IT: { cases: 5275983, aspr: 4061, diet: "Mediterranean pattern (lower OA risk in studies)", terrain: "Po plain, Alps nearby", sport: "Football (calcio) — ACL" },
    GR: { cases: 880644, aspr: 4167, diet: "Cretan / olive-oil pattern", terrain: "Rocky hills and farm slopes", sport: "Football and hard-ground running" },
    TR: { cases: 3933251, aspr: 4066, diet: "Urban shift toward Western food", terrain: "Plateau farm squat plus city pavement", sport: "Football — ACL / MCL" },
    MA: { cases: 1335410, aspr: 3714, diet: "Maghreb meals shifting to packaged food", terrain: "Atlas foothills, farm, uneven ground", sport: "Football" },
    AR: { cases: 2506329, aspr: 4569, diet: "Red-meat culture, body weight", terrain: "Flat Pampas and city pavement", sport: "Dense professional football" },
    CL: { cases: 1197992, aspr: 4714, diet: "Urban overweight in the capital", terrain: "Andes hiking and slope work", sport: "Ski, football, rugby" },
    AU: { cases: 2016533, aspr: 4839, diet: "Western pattern, high overweight", terrain: "Flat urban coast", sport: "AFL, rugby, netball — cutting ACL" },
    MN: { cases: 64605, aspr: 2600, diet: "Meat and dairy; lower reported OA may be age or access", terrain: "Steppe, cold, horseback", sport: "Wrestling and riding" },
    BE: { cases: 873012, aspr: 4116, diet: "European diet, overweight", terrain: "Low plains", sport: "Football and cycling" },
    MT: { cases: 36704, aspr: 4140, diet: "Mediterranean island meals", terrain: "Short limestone slopes", sport: "Football" },
    BG: { cases: 432007, aspr: 3211, diet: "Balkan meals going urban", terrain: "Balkan mountains around Sofia", sport: "Football, wrestling, gymnastics" },
    HR: { cases: 265456, aspr: 3220, diet: "Inland city diet, Adriatic nearby", terrain: "Plain plus Dinaric Alps", sport: "National football culture" },
    BA: { cases: 188335, aspr: 3129, diet: "Balkan home cooking plus city shift", terrain: "Valley in mountains, winter snow", sport: "Football, some ski" }
  };

  var state = { lens: "all", tab: "country", selectedId: "TH", selectedSite: "chiangmai", finding: "acl" };
  var panel = document.getElementById("map-panel");
  var lensBar = document.getElementById("map-lenses");
  var hoverEl = document.getElementById("pin-hover");
  var markers = {};
  var map;
  var hideTimer = 0;

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatPeople(n) {
    if (n >= 1000000) {
      var m = n / 1000000;
      var s = m >= 10 ? String(Math.round(m)) : m.toFixed(1).replace(/\.0$/, "");
      return "about " + s + " million people";
    }
    return "about " + Math.round(n / 1000).toLocaleString("en-US") + ",000 people";
  }

  function countryOf(site) {
    return COUNTRIES.find(function (c) { return c.id === site.country; });
  }

  function sitesOf(countryId) {
    return SITES.filter(function (s) { return s.country === countryId; });
  }

  function tipHtml(site) {
    var c = countryOf(site);
    var t = c ? TIPS[c.id] : null;
    if (!c || !t) return esc(site.name);
    return (
      '<div class="pin-tip">' +
        "<strong>" + esc(site.name) + "</strong>" +
        (site.extra ? '<p class="pin-tip-extra">Additional contributing site</p>' : "") +
        '<p class="pin-tip-gbd">' + esc(c.nameEn) + " · GBD 2021 knee OA · " + formatPeople(t.cases) +
        "<br>" + t.aspr.toLocaleString("en-US") + " per 100,000 (age-standardised)</p>" +
        "<ul>" +
          "<li><span>Diet</span> " + esc(t.diet) + "</li>" +
          "<li><span>Terrain</span> " + esc(t.terrain) + "</li>" +
          "<li><span>Sport</span> " + esc(t.sport) + "</li>" +
        "</ul>" +
        '<p class="pin-tip-note">Hospital from Kaggle Acknowledgements. GBD is the country rate, not a file count. Click for the full note.</p>' +
      "</div>"
    );
  }

  function paras(text) {
    return String(text || "")
      .split(/\n\n/)
      .map(function (p) {
        return "<p>" + esc(p) + "</p>";
      })
      .join("");
  }

  function section(title, hint, text) {
    return (
      "<h3>" + esc(title) + "</h3>" +
      '<p class="atlas-lead">' + esc(hint) + "</p>" +
      paras(text)
    );
  }

  function selected() {
    return COUNTRIES.find(function (c) { return c.id === state.selectedId; }) || COUNTRIES[0];
  }

  function visible(c) {
    return state.lens === "all" || c.lenses.indexOf(state.lens) !== -1;
  }

  function pinIcon(site, on) {
    return L.divIcon({
      className: "pin-wrap",
      html: '<span class="pin' + (on ? " is-on" : "") + (site.extra ? " is-extra" : "") + '"><i></i><b>' + esc(site.city) + "</b></span>",
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
  }

  function hideHover() {
    if (!hoverEl) return;
    hoverEl.hidden = true;
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideHover, 180);
  }

  function placeHover(site, marker) {
    if (!hoverEl || !map) return;
    clearTimeout(hideTimer);
    hoverEl.innerHTML = tipHtml(site);
    hoverEl.hidden = false;
    var pt = map.latLngToContainerPoint(marker.getLatLng());
    var pad = 8;
    var w = hoverEl.offsetWidth;
    var h = hoverEl.offsetHeight;
    var mw = mapEl.clientWidth;
    var mh = mapEl.clientHeight;
    var x = pt.x + 18;
    var y = pt.y - Math.round(h / 2);
    if (x + w > mw - pad) x = pt.x - w - 18;
    if (x < pad) x = pad;
    if (y < pad) y = pad;
    if (y + h > mh - pad) y = Math.max(pad, mh - h - pad);
    hoverEl.style.left = x + "px";
    hoverEl.style.top = y + "px";
  }

  function setSelected(id, fly, siteId) {
    var next = COUNTRIES.find(function (c) { return c.id === id; });
    if (!next) return;
    state.selectedId = id;
    var inCountry = sitesOf(id);
    if (siteId && inCountry.some(function (s) { return s.id === siteId; })) {
      state.selectedSite = siteId;
    } else if (!inCountry.some(function (s) { return s.id === state.selectedSite; })) {
      state.selectedSite = inCountry[0] ? inCountry[0].id : state.selectedSite;
    }
    SITES.forEach(function (s) {
      var c = countryOf(s);
      var marker = markers[s.id];
      if (!marker) return;
      marker.setIcon(pinIcon(s, s.id === state.selectedSite));
      if (c && visible(c)) marker.addTo(map);
      else map.removeLayer(marker);
    });
    var site = SITES.find(function (s) { return s.id === state.selectedSite; });
    if (fly && map && site) map.flyTo([site.lat, site.lon], Math.max(map.getZoom(), 4), { duration: 0.7 });
    hideHover();
    render();
  }

  function countryTab(c) {
    var listed = sitesOf(c.id);
    var extras = listed.filter(function (s) { return s.extra; });
    var extraNote = extras.length
      ? '<p class="atlas-sites">Kaggle lists ' + extras.map(function (s) { return esc(s.name); }).join(" · ") +
        " as additional contributing site" + (extras.length > 1 ? "s" : "") +
        ", after the 19 primary data contributors.</p>"
      : "";
    return (
      '<p class="atlas-note">Pins are the 19 Kaggle data contributors plus 3 additional sites — not the 800,000+ files and not individual causation.</p>' +
      "<h2>" + esc(c.nameEn) + "</h2>" +
      '<p class="atlas-sites">Kaggle Acknowledgements · ' + listed.length + " named site" + (listed.length > 1 ? "s" : "") +
      "<br>" + listed.map(function (s) { return esc(s.name); }).join("<br>") + "</p>" +
      extraNote +
      section(
        "Why the knee shows up here",
        "Why this country is on the map: a named RSNA hospital, and the mix of load it can teach. Not a count of DICOM files.",
        c.why
      ) +
      section(
        "Diet",
        "Food pattern and body weight — how they load cartilage, especially the inner (medial) side of the knee.",
        c.diet
      ) +
      section(
        "Terrain / work",
        "Ground, climate, and jobs that make people squat, kneel, carry, hike, or fall.",
        c.terrain
      ) +
      section(
        "Sport",
        "Games that twist, cut, or hit the knee, and the ligament or meniscus injuries they feed.",
        c.sports
      ) +
      section(
        "Likely findings",
        "Which of the 12 Kaggle labels this mix would tend to produce. Mechanism mapping, not file counts from this country.",
        c.labels
      ) +
      section(
        "OA notes",
        "What published osteoarthritis numbers can and cannot say about this pin.",
        c.koa
      ) +
      findingChart(c.id)
    );
  }

  function flagImg(id) {
    return '<img class="atlas-flag" src="https://flagcdn.com/w40/' + id.toLowerCase() + '.png" width="20" height="15" alt="" loading="lazy">';
  }

  // Teaching match 0–5 from diet / terrain / sport / likely-findings notes.
  // Not RSNA file counts, not GBD sub-labels, not how often the class appears in the 800,000+ files.
  var TEACH = {
    acl: { TH: 3, TW: 2, US: 5, CA: 4, DE: 5, IT: 5, GR: 3, TR: 3, MA: 3, AR: 5, CL: 4, AU: 5, MN: 1, BE: 3, MT: 3, BG: 3, HR: 4, BA: 3 },
    mcl: { TH: 4, TW: 1, US: 5, CA: 5, DE: 5, IT: 3, GR: 2, TR: 4, MA: 3, AR: 3, CL: 4, AU: 4, MN: 1, BE: 3, MT: 2, BG: 2, HR: 3, BA: 2 },
    mm: { TH: 5, TW: 4, US: 4, CA: 3, DE: 3, IT: 4, GR: 3, TR: 5, MA: 4, AR: 4, CL: 3, AU: 4, MN: 2, BE: 3, MT: 3, BG: 3, HR: 3, BA: 3 },
    lm: { TH: 3, TW: 2, US: 4, CA: 3, DE: 3, IT: 5, GR: 3, TR: 4, MA: 3, AR: 4, CL: 3, AU: 5, MN: 1, BE: 3, MT: 2, BG: 2, HR: 3, BA: 2 },
    moa: { TH: 5, TW: 5, US: 5, CA: 4, DE: 2, IT: 2, GR: 4, TR: 5, MA: 4, AR: 5, CL: 4, AU: 5, MN: 1, BE: 3, MT: 2, BG: 3, HR: 3, BA: 3 },
    loa: { TH: 2, TW: 3, US: 4, CA: 3, DE: 2, IT: 1, GR: 2, TR: 2, MA: 2, AR: 4, CL: 2, AU: 3, MN: 1, BE: 2, MT: 2, BG: 2, HR: 2, BA: 2 },
    pfoa: { TH: 5, TW: 4, US: 3, CA: 3, DE: 2, IT: 2, GR: 5, TR: 4, MA: 5, AR: 1, CL: 5, AU: 2, MN: 2, BE: 3, MT: 3, BG: 4, HR: 2, BA: 4 },
    eff: { TH: 4, TW: 4, US: 4, CA: 5, DE: 3, IT: 4, GR: 3, TR: 4, MA: 3, AR: 4, CL: 3, AU: 4, MN: 1, BE: 4, MT: 4, BG: 3, HR: 4, BA: 3 },
    syn: { TH: 2, TW: 5, US: 2, CA: 5, DE: 2, IT: 2, GR: 2, TR: 2, MA: 2, AR: 2, CL: 2, AU: 2, MN: 1, BE: 2, MT: 2, BG: 2, HR: 2, BA: 2 },
    bak: { TH: 2, TW: 2, US: 2, CA: 5, DE: 2, IT: 2, GR: 2, TR: 2, MA: 2, AR: 2, CL: 2, AU: 2, MN: 1, BE: 2, MT: 2, BG: 2, HR: 2, BA: 2 },
    con: { TH: 4, TW: 2, US: 4, CA: 5, DE: 5, IT: 2, GR: 3, TR: 3, MA: 3, AR: 3, CL: 5, AU: 4, MN: 3, BE: 2, MT: 2, BG: 3, HR: 2, BA: 4 },
    fx: { TH: 1, TW: 1, US: 2, CA: 4, DE: 5, IT: 1, GR: 2, TR: 1, MA: 1, AR: 1, CL: 5, AU: 1, MN: 2, BE: 1, MT: 1, BG: 2, HR: 1, BA: 2 }
  };

  function findingScore(c, fid) {
    var row = TEACH[fid];
    return (row && row[c.id]) || 0;
  }

  function rankedCountries(fid) {
    return COUNTRIES.map(function (c) {
      return { id: c.id, name: c.nameEn, score: findingScore(c, fid) };
    }).sort(function (a, b) {
      return b.score - a.score || a.name.localeCompare(b.name);
    });
  }

  function findingBars(rows, selectedId) {
    var most = rows[0];
    var least = rows[rows.length - 1];
    var max = Math.max(1, most.score);
    return rows.map(function (r) {
      var w = Math.max(6, (r.score / max) * 100);
      var tag = "";
      if (most.score !== least.score) {
        if (r.score === most.score) tag = "<em>most</em>";
        else if (r.score === least.score) tag = "<em>least</em>";
      }
      return (
        '<button type="button" class="oa-row' + (r.id === selectedId ? " is-on" : "") + '" data-pick="' + r.id + '">' +
          flagImg(r.id) +
          '<span class="oa-name">' + esc(r.name) + tag + "</span>" +
          '<span class="oa-track"><span class="oa-fill" style="width:' + w + '%"></span></span>' +
          '<span class="oa-n">' + r.score + "</span>" +
        "</button>"
      );
    }).join("");
  }

  function findingCallout(finding, rows, selectedId) {
    var most = rows[0];
    var least = rows[rows.length - 1];
    var nMost = rows.filter(function (r) { return r.score === most.score; }).length;
    var nLeast = rows.filter(function (r) { return r.score === least.score; }).length;
    var selectedRow = rows.find(function (r) { return r.id === selectedId; }) || rows[0];
    var rank = rows.findIndex(function (r) { return r.id === selectedId; }) + 1;
    var mostTxt = most.score === least.score
      ? "all 18 tied"
      : (nMost > 1 ? nMost + " tied" : esc(most.name));
    var leastTxt = most.score === least.score
      ? "all 18 tied"
      : (nLeast > 1 ? nLeast + " tied" : esc(least.name));
    return (
      '<p class="oa-callout">' + flagImg(selectedId) + "<strong>" + esc(finding.name) + "</strong>&nbsp;·&nbsp;" +
      esc(selectedRow.name) + " ranks " + rank + " of 18 &nbsp;·&nbsp; most " + mostTxt +
      " &nbsp;·&nbsp; least " + leastTxt + ".</p>"
    );
  }

  function oneFindingChart(finding, selectedId) {
    var rows = rankedCountries(finding.id);
    return (
      '<section class="finding-block" id="finding-pane" data-finding-block="' + finding.id + '">' +
        "<h3>" + esc(finding.name) + "</h3>" +
        '<p class="atlas-lead">' + esc(finding.mech) + " — " + esc(finding.link) + "</p>" +
        findingCallout(finding, rows, selectedId) +
        '<div class="oa-chart" role="list">' + findingBars(rows, selectedId) + "</div>" +
        '<p class="atlas-sites">Click a flag row to open that country.</p>' +
      "</section>"
    );
  }

  function findingTabsHtml() {
    return FINDINGS.map(function (f) {
      var on = f.id === state.finding;
      return (
        '<button type="button" class="atlas-tab' + (on ? " is-on" : "") + '" role="tab" data-finding="' + f.id + '"' +
        ' aria-selected="' + (on ? "true" : "false") + '"' +
        ' title="' + esc(f.mech) + " — " + esc(f.link) + '">' +
        esc(f.name) + "</button>"
      );
    }).join("");
  }

  function findingChart(selectedId) {
    var finding = FINDINGS.find(function (f) { return f.id === state.finding; }) || FINDINGS[0];
    return (
      "<h3>12 findings by country</h3>" +
      '<p class="atlas-lead">Pick a tab for one Kaggle label at a time. Bars are a teaching match from diet / terrain / sport notes for the 18 countries that host the 22 named Kaggle sites — not file counts, not GBD sub-labels, not how often the label appears in the 800,000+ files.</p>' +
      '<div class="finding-tabs" role="tablist" aria-label="Twelve Kaggle findings">' + findingTabsHtml() + "</div>" +
      oneFindingChart(finding, selectedId)
    );
  }

  function findingsTab() {
    var rows = FINDINGS.map(function (f) {
      return "<tr><td>" + esc(f.name) + "</td><td>" + esc(f.mech) + "</td><td>" + esc(f.link) + "</td></tr>";
    }).join("");
    return (
      "<h2>Twelve Kaggle findings</h2>" +
      '<p class="atlas-lead">The competition scores 12 knee labels. Under OA notes, tabs switch one most/least chart at a time. Those bars are teaching matches from the country notes for the 22 named Kaggle sites, not a ranking of how often each label appears in the files.</p>' +
      "<p><strong>Finding</strong> is the Kaggle class. <strong>Mechanism</strong> is the load type. <strong>Link</strong> is the everyday action that produces that load.</p>" +
      "<table><thead><tr><th>Finding</th><th>Mechanism</th><th>Link</th></tr></thead><tbody>" + rows + "</tbody></table>"
    );
  }

  function sourcesTab() {
    return (
      "<h2>Sources</h2>" +
      "<p>Background used for the country notes. None of these links is a count of DICOM files from that country.</p>" +
      '<p class="atlas-sites"><a href="https://www.kaggle.com/competitions/rsna-knee-abnormality-detection/overview" target="_blank" rel="noopener">Kaggle Acknowledgements</a> — 19 data-contributing institutions and 3 additional sites (the pin list)</p>' +
      '<p class="atlas-sites"><a href="https://www.rsna.org/artificial-intelligence/ai-image-challenge/knee-mri-ai-challenge" target="_blank" rel="noopener">RSNA 2026 challenge</a> — more than 5,000 exams from 19 sites worldwide</p>' +
      '<p class="atlas-sites"><a href="https://www.kaggle.com/competitions/rsna-knee-abnormality-detection/data" target="_blank" rel="noopener">Kaggle data page</a> — 12 findings, 819,640 files</p>' +
      '<p class="atlas-sites">GBD 2021 KOA rates: Wang et al. 2025 — <a href="https://doi.org/10.1186/s13018-025-06140-0" target="_blank" rel="noopener">doi:10.1186/s13018-025-06140-0</a></p>' +
      '<p class="atlas-sites">GBD 2021 country case counts on hover: Chen et al. 2025, PLOS One Table S1 — <a href="https://doi.org/10.1371/journal.pone.0320115" target="_blank" rel="noopener">doi:10.1371/journal.pone.0320115</a></p>' +
      '<p class="atlas-sites"><a href="https://www.who.int/news-room/fact-sheets/detail/osteoarthritis" target="_blank" rel="noopener">WHO osteoarthritis</a></p>' +
      '<p class="atlas-sites">Occupation: Wang et al. 2020, Occup Environ Med (farmer OR 1.64)</p>' +
      '<p class="atlas-note">This map is presentation context. It is not a cleandata output and does not use hashed DICOM country tags.</p>'
    );
  }

  function render() {
    if (state.tab === "findings") panel.innerHTML = findingsTab();
    else if (state.tab === "sources") panel.innerHTML = sourcesTab();
    else panel.innerHTML = countryTab(selected());
    lensBar.querySelectorAll(".atlas-chip").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-lens") === state.lens);
    });
    document.querySelectorAll(".atlas-tab").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-tab") === state.tab);
    });
  }

  lensBar.innerHTML = LENSES.map(function (pair) {
    return '<button type="button" class="atlas-chip' + (pair[0] === "all" ? " is-on" : "") + '" data-lens="' + pair[0] + '" title="' + esc(pair[2]) + '">' + pair[1] + "</button>";
  }).join("");

  lensBar.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lens]");
    if (!btn) return;
    state.lens = btn.getAttribute("data-lens");
    if (!visible(selected())) {
      var first = COUNTRIES.find(visible);
      if (first) {
        state.selectedId = first.id;
        state.selectedSite = sitesOf(first.id)[0] ? sitesOf(first.id)[0].id : state.selectedSite;
      }
    }
    setSelected(state.selectedId, false);
  });

  document.querySelector(".atlas-tabs").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-tab]");
    if (!btn) return;
    state.tab = btn.getAttribute("data-tab");
    render();
  });

  panel.addEventListener("click", function (e) {
    var findBtn = e.target.closest("[data-finding]");
    if (findBtn) {
      state.finding = findBtn.getAttribute("data-finding");
      var finding = FINDINGS.find(function (f) { return f.id === state.finding; }) || FINDINGS[0];
      panel.querySelectorAll(".finding-tabs [data-finding]").forEach(function (el) {
        var on = el.getAttribute("data-finding") === state.finding;
        el.classList.toggle("is-on", on);
        el.setAttribute("aria-selected", on ? "true" : "false");
      });
      var pane = panel.querySelector("#finding-pane");
      if (pane) pane.outerHTML = oneFindingChart(finding, state.selectedId);
      return;
    }
    var btn = e.target.closest("[data-pick]");
    if (!btn) return;
    state.tab = "country";
    setSelected(btn.getAttribute("data-pick"), true);
  });

  map = L.map("world-map", {
    worldCopyJump: false,
    markerZoomAnimation: false,
    minZoom: 2,
    maxZoom: 8,
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([20, 20], 2);

  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Tiles &copy; Esri",
    maxZoom: 8
  }).addTo(map);

  SITES.forEach(function (s) {
    var m = L.marker([s.lat, s.lon], {
      icon: pinIcon(s, s.id === state.selectedSite),
      keyboard: true,
      riseOnHover: true,
      title: s.name
    }).addTo(map);
    m.on("mouseover", function () { placeHover(s, m); });
    m.on("mouseout", scheduleHide);
    m.on("click", function () {
      state.tab = "country";
      setSelected(s.country, true, s.id);
    });
    markers[s.id] = m;
  });

  if (hoverEl) {
    hoverEl.addEventListener("mouseenter", function () { clearTimeout(hideTimer); });
    hoverEl.addEventListener("mouseleave", scheduleHide);
  }

  var group = L.featureGroup(Object.values(markers));
  function frameMap() {
    map.invalidateSize();
    map.fitBounds(group.getBounds().pad(0.18), { maxZoom: 3, animate: false });
  }

  render();
  map.whenReady(function () {
    [0, 150, 400, 900].forEach(function (t) { setTimeout(frameMap, t); });
  });
  window.addEventListener("resize", frameMap);
  map.on("zoomstart movestart", hideHover);
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) frameMap();
    }, { threshold: 0.2 });
    obs.observe(mapEl);
  }
})();
