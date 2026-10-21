const TF = {
  phoneDisplay: "+91 89435 90767",
  phoneDisplay2: "+91 89431 50767",
  phoneWhatsApp: "918943590767",
  email: "thekkadyfern@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/EiVVT2k78fDV8qhY6?g_st=aw",
  address: "J557+97H, Kottayam - Kumily Road, Chelimada, Kumily, Attappallam, Kerala 685509, India.",
  rates: [
    { key: "single", rooms: 13, occupancy: 2, regular: "₹2,000", december: "₹2,500" },
    { key: "double", rooms: 2, occupancy: 4, regular: "₹3,000", december: "₹3,500" }
  ],
  spaDraft: [
    ["Head & Shoulder Massage", "30 minutes", "₹1,000"],
    ["Back & Neck Massage", "45 minutes", "₹1,500"],
    ["Relaxing Massage", "60 minutes", "₹1,800"],
    ["Special Massage", "60 minutes", "₹1,900"],
    ["Herbal Ayurveda", "60 minutes", "₹2,000"],
    ["Aroma Massage", "60 minutes", "₹2,200"],
    ["Deep Tissue Massage", "60 minutes", "₹2,400"],
    ["Shirodhara", "60 minutes", "₹3,000"]
  ],
  images: {
    exterior: "assets/images/placeholders/exterior.svg",
    single: "assets/images/placeholders/single-room.svg",
    double: "assets/images/placeholders/double-room.svg",
    kitchen: "assets/images/placeholders/kitchen-restaurant.svg",
    balcony: "assets/images/placeholders/balcony.svg",
    spa: "assets/images/placeholders/spa.svg",
    activities: "assets/images/placeholders/activities.svg",
    bambooRafting: "assets/images/gallery/activities/bamboo-rafting-periyar.jpg",
    elephantSafari: "assets/images/gallery/activities/elephant-safari-thekkady.jpg",
    jeepSafari: "assets/images/gallery/activities/jeep-safari-kerala.jpg",
    plantation: "assets/images/gallery/activities/plantation-visit-kerala.jpg",
    boating: "assets/images/gallery/activities/thekkady-boat-service.jpg",
    vagamon: "assets/images/gallery/activities/vagamon-hills.jpg",
    ramakkalmedu: "assets/images/gallery/activities/ramakkalmedu.jpg"
  },
  programs: [
    { key: "gavi", title: "programGaviTitle", text: "programGaviText", image: "bambooRafting", source: "Kerala Forest / Gavi-Kakki Eco Tourism", url: "https://www.gavikakkionline.com/" },
    { key: "periyar", title: "programPeriyarTitle", text: "programPeriyarText", image: "bambooRafting", source: "Periyar Tiger Reserve", url: "https://www.periyartigerreserve.org/ProgramView" },
    { key: "boating", title: "programBoatingTitle", text: "programBoatingText", image: "boating", source: "KTDC / Periyar boating", url: "https://www.ktdcboating.com/" },
    { key: "plantation", title: "programPlantationTitle", text: "programPlantationText", image: "plantation", source: "Local enquiry", url: "" },
    { key: "jeep", title: "programJeepTitle", text: "programJeepText", image: "jeepSafari", source: "Local operator enquiry", url: "" },
    { key: "elephant", title: "programElephantTitle", text: "programElephantText", image: "elephantSafari", source: "Local operator enquiry", url: "" },
    { key: "vagamon", title: "programVagamonTitle", text: "programVagamonText", image: "vagamon", source: "Kerala Tourism / local enquiry", url: "https://www.keralatourism.org/destination/vagamon-idukki/324/" },
    { key: "ramakkalmedu", title: "programRamakkalmeduTitle", text: "programRamakkalmeduText", image: "ramakkalmedu", source: "Kerala Tourism / local enquiry", url: "https://www.keralatourism.org/destination/ramakkalmedu-hill-stations-kerala/53/" }
  ]
};

const I18N = {
  en: {
    brand: "THEKKADY FERN",
    tagline: "Your Private Escape in Thekkady.",
    navHome: "Home",
    navStay: "Stay",
    navSpa: "Spa",
    navFacilities: "Facilities",
    navExplore: "Explore",
    navContact: "Contact",
    navToggle: "Open navigation",
    bookNow: "Booking Enquiry",
    whatsapp: "WhatsApp",
    directions: "Directions",
    callNow: "Call",
    emailUs: "Email",
    heroEyebrow: "Premium homestay in Kumily, Thekkady",
    heroTitle: "THEKKADY FERN",
    heroCopy: "A calm boutique stay shaped for forest air, warm hospitality and easy access to Thekkady's nature experiences.",
    viewRooms: "View Rooms",
    homeGalleryTitle: "A Stay Ready for Real Property Photography",
    homeGalleryText: "The site uses local image slots. Replace these placeholders with genuine property photos in the gallery folders.",
    roomHighlightsTitle: "Rooms for Couples, Families and Small Groups",
    roomHighlightsText: "Choose from single rooms for up to two guests or double-occupancy rooms for up to four guests. Final rate and availability must be confirmed by the property.",
    spaHomeTitle: "In-house Ayurvedic Spa and Massage",
    spaHomeText: "A dedicated spa experience is prepared as a key part of the stay. The draft treatment menu is kept editable until the owner approves the final in-house tariffs.",
    facilitiesHomeTitle: "Useful Comforts for an Easy Stay",
    facilitiesHomeText: "Kitchen facility, parking, television, Wi-Fi, dining area, campfire enquiries, safari arrangement enquiries, plantation visits, Gavi and Periyar eco-tourism enquiries and in-house spa access are prepared across the site.",
    locationPreviewTitle: "Stay in Kumily, Close to Thekkady's Nature",
    locationPreviewText: "The property address and Google Maps link are included for clear directions. Local tourism content avoids unverified travel times or distance claims.",
    ctaTitle: "Ready to check availability?",
    ctaText: "Send an enquiry through WhatsApp. Your booking is confirmed only after the property replies with final availability and rate details.",
    stayTitle: "Rooms and Accommodation",
    stayIntro: "Simple, warm accommodation with editable reference rates and clear occupancy information supplied by the owner.",
    singleRoomTitle: "Single Rooms",
    doubleRoomTitle: "Double-occupancy Rooms",
    roomCount: "Rooms available",
    maxOccupancy: "Maximum stated occupancy",
    regularRate: "Regular reference rate",
    decemberRate: "December reference rate",
    rateDisclaimer: "Reference rates are owner-supplied but the pricing basis is not yet confirmed. Final rate and availability must be confirmed by THEKKADY FERN.",
    verifiedAmenities: "Verified Mentioned Amenities",
    balconyNote: "Balconies are represented where available. Replace placeholder images with confirmed balcony photos.",
    spaTitle: "In-house Spa and Massage",
    spaIntro: "A calm spa page designed for the property, with draft treatments held for owner approval before publishing as confirmed tariffs.",
    draftMenuTitle: "Draft Treatment Menu",
    draftMenuNote: "These treatment names, durations and prices are reference material from another business. They are not published as confirmed THEKKADY FERN tariffs until approved by the owner.",
    priceHidden: "Draft reference only",
    enquireSpa: "Spa Enquiry",
    facilitiesTitle: "Facilities, Dining and Activities",
    facilitiesIntro: "Verified property information and enquiry-ready activity options presented without adding unconfirmed timings, inclusions or guarantees.",
    kitchen: "Kitchen facility",
    parking: "Parking",
    television: "Television",
    wifi: "Wi-Fi",
    dining: "Restaurant / dining area",
    campfire: "Campfire enquiry",
    safari: "Safari arrangement enquiry",
    plantationVisit: "Plantation visit",
    jeepSafari: "Jeep safari and off-road enquiry",
    elephantSafari: "Elephant safari enquiry",
    boating: "Thekkady boat service enquiry",
    trekking: "Trekking and guided walk enquiry",
    govtPrograms: "Government and eco-tourism programs",
    programsTitle: "Programs and Nearby Experiences",
    programsIntro: "THEKKADY FERN can help guests enquire about official and local visitor programs. Tickets, permits, operating days, reporting time, safety rules and final prices must be confirmed with the official portal or operator.",
    programSource: "Reference",
    programEnquiry: "Program Enquiry",
    programGaviTitle: "Gavi Tourism and Eco-tourism Package Enquiry",
    programGaviText: "Gavi-Kakki is listed through Kerala Forest ecotourism channels. Use this section for enquiry support only; final package, permit and availability details must come from the official booking source.",
    programPeriyarTitle: "Periyar National Park / Tiger Reserve Programs",
    programPeriyarText: "Official Periyar programs include options such as nature walks, green walks, bamboo rafting, border hiking, jungle scout, tiger trail, tribal dance, boating and Gavi safari listings, subject to official availability.",
    programBoatingTitle: "Thekkady Boat Service",
    programBoatingText: "Periyar Lake boating is a major Thekkady experience. Guests should confirm reporting time, ticket source, ID requirements and safety rules through the official booking channel.",
    programPlantationTitle: "Plantation Visit",
    programPlantationText: "Thekkady and Kumily are known for spice and plantation experiences. Visits should be confirmed with the property or local operator before travel.",
    programJeepTitle: "Jeep Safari and Off-road Experience",
    programJeepText: "Jeep safari and off-road programs can be requested as local operator enquiries. Routes, vehicle type, safety, timings and rates must be confirmed before booking.",
    programElephantTitle: "Elephant Safari / Elephant Activity Enquiry",
    programElephantText: "Elephant activity availability and suitability should be checked with licensed local operators. The site does not guarantee animal activity availability.",
    programVagamonTitle: "One-day Vagamon Adventure Program",
    programVagamonText: "A one-day Vagamon enquiry can include hills, meadows, pine forest and adventure activity interests. Final itinerary, activity availability and timing must be confirmed locally.",
    programRamakkalmeduTitle: "Ramakkalmedu Program",
    programRamakkalmeduText: "Ramakkalmedu can be requested as a nearby hill and viewpoint program. Travel plan, access, weather and operator details should be confirmed before departure.",
    ayurSpa: "In-house Ayurvedic spa and massage",
    exploreTitle: "Explore Thekkady and Location",
    exploreIntro: "Use the property as a base for Kumily and Thekkady's nature, spice and visitor experiences. Confirm plans directly with the property or official providers.",
    natureTitle: "Nature and Local Experiences",
    natureText: "Thekkady is known for green landscapes, forest experiences, spice country and local visitor activities. Specific distances, timings and bookings should be verified before travel.",
    mapTitle: "Property Location",
    mapText: "Use the verified Google Maps link for directions to the property address.",
    contactTitle: "Rates, Contact and Booking Enquiry",
    contactIntro: "Send a direct enquiry to the property through WhatsApp, phone or email. No payment details are collected on this website.",
    formTitle: "Booking Enquiry Form",
    fullName: "Guest full name",
    phone: "Phone number",
    phoneAlt: "Alternate phone",
    checkin: "Check-in date",
    checkout: "Check-out date",
    adults: "Number of adults",
    children: "Number of children",
    preferredRoom: "Preferred room type",
    roomSelectPlaceholder: "Select a room type",
    roomSingle: "Single room",
    roomDouble: "Double-occupancy room",
    roomFlexible: "Flexible",
    roomsNeeded: "Number of rooms",
    spaOptional: "Spa enquiry",
    spaNo: "No spa enquiry",
    spaYes: "Interested in spa / massage",
    message: "Additional message",
    privacyNote: "Privacy note: this enquiry will be shared with THEKKADY FERN through WhatsApp. Do not enter payment card details.",
    submitEnquiry: "Prepare WhatsApp Enquiry",
    formErrorRequired: "Please complete all required fields.",
    formErrorDate: "Check-out date must be after check-in date.",
    formErrorPhone: "Please enter a valid phone number.",
    formReady: "WhatsApp has been opened with your enquiry. Please review and send it there. If it did not open, contact the property by phone or email.",
    contactDetails: "Contact Details",
    addressLabel: "Address",
    ownerApprovalTitle: "Still Needing Owner Approval",
    footerNote: "Premium homestay website draft. Replace placeholder media and confirm all rates and program details before public launch."
  },
  ml: {
    brand: "തെക്കടി ഫേൺ",
    tagline: "തെക്കടിയിലെ നിങ്ങളുടെ സ്വകാര്യ വിശ്രമസ്ഥലം.",
    navHome: "ഹോം",
    navStay: "താമസം",
    navSpa: "സ്പാ",
    navFacilities: "സൗകര്യങ്ങൾ",
    navExplore: "എക്സ്പ്ലോർ",
    navContact: "ബന്ധപ്പെടുക",
    navToggle: "നാവിഗേഷൻ തുറക്കുക",
    bookNow: "ബുക്കിംഗ് അന്വേഷണം",
    whatsapp: "വാട്ട്‌സ്ആപ്പ്",
    directions: "ദിശകൾ",
    callNow: "വിളിക്കുക",
    emailUs: "ഇമെയിൽ",
    heroEyebrow: "കുമളി, തെക്കടിയിലെ പ്രീമിയം ഹോംസ്റ്റേ",
    heroTitle: "തെക്കടി ഫേൺ",
    heroCopy: "കാടിന്റെ ശാന്തതയും സൗഹൃദാതിഥ്യവും തെക്കടിയുടെ പ്രകൃതി അനുഭവങ്ങളിലേക്ക് എളുപ്പത്തിലുള്ള എത്തിപ്പെടലും ചേർന്ന ബൂട്ടിക്ക് താമസം.",
    viewRooms: "റൂമുകൾ കാണുക",
    homeGalleryTitle: "യഥാർത്ഥ ഫോട്ടോകൾക്കായി തയ്യാറാക്കിയ ഗാലറി",
    homeGalleryText: "ഗാലറി ഫോൾഡറുകളിൽ യഥാർത്ഥ പ്രോപ്പർട്ടി ചിത്രങ്ങൾ ചേർത്താൽ ഈ പ്ലേസ്‌ഹോൾഡറുകൾ എളുപ്പത്തിൽ മാറ്റാം.",
    roomHighlightsTitle: "ദമ്പതികൾക്കും കുടുംബങ്ങൾക്കും ചെറിയ ഗ്രൂപ്പുകൾക്കും റൂമുകൾ",
    roomHighlightsText: "രണ്ട് അതിഥികൾ വരെയുള്ള സിംഗിൾ റൂമുകളും നാല് അതിഥികൾ വരെയുള്ള ഡബിൾ ഒക്ക്യുപൻസി റൂമുകളും ലഭ്യമാണ്. അന്തിമ നിരക്കും ലഭ്യതയും പ്രോപ്പർട്ടി സ്ഥിരീകരിക്കണം.",
    spaHomeTitle: "ഇൻ-ഹൗസ് ആയുർവേദ സ്പാ ആൻഡ് മസാജ്",
    spaHomeText: "താമസത്തിന്റെ പ്രധാന ആകർഷണമായി സ്പാ അനുഭവം തയ്യാറാക്കിയിട്ടുണ്ട്. ഉടമ അന്തിമ നിരക്ക് അംഗീകരിക്കുന്നതുവരെ ഡ്രാഫ്റ്റ് മെനു എഡിറ്റുചെയ്യാവുന്നതാണ്.",
    facilitiesHomeTitle: "സൗകര്യപ്രദമായ താമസത്തിനുള്ള ആവശ്യങ്ങൾ",
    facilitiesHomeText: "കിച്ചൻ സൗകര്യം, പാർക്കിംഗ്, ടെലിവിഷൻ, വൈ-ഫൈ, ഡൈനിംഗ് ഏരിയ, ക്യാമ്പ്‌ഫയർ അന്വേഷണം, സഫാരി അന്വേഷണം, പ്ലാന്റേഷൻ സന്ദർശനം, ഗവി / പെരിയാർ ഇക്കോ ടൂറിസം അന്വേഷണം, ഇൻ-ഹൗസ് സ്പാ എന്നിവ സൈറ്റിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നു.",
    locationPreviewTitle: "തെക്കടിയുടെ പ്രകൃതിക്ക് സമീപം കുമളിയിൽ താമസം",
    locationPreviewText: "കൃത്യമായ ദിശകൾക്കായി വിലാസവും Google Maps ലിങ്കും ചേർത്തിട്ടുണ്ട്. സ്ഥിരീകരിക്കാത്ത ദൂരം അല്ലെങ്കിൽ യാത്രാസമയം ചേർത്തിട്ടില്ല.",
    ctaTitle: "ലഭ്യത അറിയാൻ തയ്യാറാണോ?",
    ctaText: "വാട്ട്‌സ്ആപ്പിലൂടെ അന്വേഷണം അയക്കുക. പ്രോപ്പർട്ടി അന്തിമ ലഭ്യതയും നിരക്കും അറിയിച്ചതിന് ശേഷമേ ബുക്കിംഗ് സ്ഥിരീകരിക്കൂ.",
    stayTitle: "റൂമുകളും താമസവും",
    stayIntro: "ഉടമ നൽകിയ റഫറൻസ് നിരക്കുകളും വ്യക്തമായ ഒക്ക്യുപൻസി വിവരങ്ങളും സഹിതമുള്ള ലളിതവും സുഖകരവുമായ താമസം.",
    singleRoomTitle: "സിംഗിൾ റൂമുകൾ",
    doubleRoomTitle: "ഡബിൾ ഒക്ക്യുപൻസി റൂമുകൾ",
    roomCount: "ലഭ്യമായ റൂമുകൾ",
    maxOccupancy: "പരമാവധി അതിഥികൾ",
    regularRate: "സാധാരണ റഫറൻസ് നിരക്ക്",
    decemberRate: "ഡിസംബർ റഫറൻസ് നിരക്ക്",
    rateDisclaimer: "നിരക്കുകൾ ഉടമ നൽകിയ റഫറൻസ് വിവരങ്ങളാണ്. അന്തിമ നിരക്കും ലഭ്യതയും തെക്കടി ഫേൺ സ്ഥിരീകരിക്കണം.",
    verifiedAmenities: "സ്ഥിരീകരിച്ച സൗകര്യങ്ങൾ",
    balconyNote: "ലഭ്യമായിടത്ത് ബാല്കണികൾ കാണിച്ചിരിക്കുന്നു. സ്ഥിരീകരിച്ച ഫോട്ടോകൾ ലഭിച്ചാൽ മാറ്റിസ്ഥാപിക്കുക.",
    spaTitle: "ഇൻ-ഹൗസ് സ്പാ ആൻഡ് മസാജ്",
    spaIntro: "പ്രോപ്പർട്ടിക്കായി തയ്യാറാക്കിയ ശാന്തമായ സ്പാ പേജ്. അന്തിമ താരിഫ് ഉടമ അംഗീകരിക്കുന്നതുവരെ ഡ്രാഫ്റ്റ് ചികിത്സകൾ വേർതിരിച്ചിരിക്കുന്നു.",
    draftMenuTitle: "ഡ്രാഫ്റ്റ് ചികിത്സാ മെനു",
    draftMenuNote: "ഇവ മറ്റൊരു സ്ഥാപനത്തിൽ നിന്നുള്ള റഫറൻസ് ചികിത്സാ പേരുകളും ദൈർഘ്യവും നിരക്കുകളുമാണ്. ഉടമ അംഗീകരിക്കുന്നതുവരെ ഇവ തെക്കടി ഫേൺ സ്ഥിരീകരിച്ച നിരക്കുകൾ അല്ല.",
    priceHidden: "ഡ്രാഫ്റ്റ് റഫറൻസ് മാത്രം",
    enquireSpa: "സ്പാ അന്വേഷണം",
    facilitiesTitle: "സൗകര്യങ്ങൾ, ഡൈനിംഗ് ആൻഡ് ആക്റ്റിവിറ്റികൾ",
    facilitiesIntro: "സ്ഥിരീകരിച്ച വിവരങ്ങളും enquiry-ready ആക്റ്റിവിറ്റി ഓപ്ഷനുകളും മാത്രം, സ്ഥിരീകരിക്കാത്ത സമയം, ഉൾപ്പെടുത്തലുകൾ, ഗ്യാരണ്ടികൾ എന്നിവ ചേർക്കാതെ.",
    kitchen: "കിച്ചൻ സൗകര്യം",
    parking: "പാർക്കിംഗ്",
    television: "ടെലിവിഷൻ",
    wifi: "വൈ-ഫൈ",
    dining: "റെസ്റ്റോറന്റ് / ഡൈനിംഗ് ഏരിയ",
    campfire: "ക്യാമ്പ്‌ഫയർ അന്വേഷണം",
    safari: "സഫാരി ക്രമീകരണ അന്വേഷണം",
    plantationVisit: "പ്ലാന്റേഷൻ സന്ദർശനം",
    jeepSafari: "ജീപ്പ് സഫാരി / ഓഫ്‌റോഡ് അന്വേഷണം",
    elephantSafari: "എലിഫന്റ് സഫാരി അന്വേഷണം",
    boating: "തെക്കടി ബോട്ട് സർവീസ് അന്വേഷണം",
    trekking: "ട്രെക്കിംഗ് / ഗൈഡഡ് വോക്ക് അന്വേഷണം",
    govtPrograms: "സർക്കാർ, ഇക്കോ ടൂറിസം പ്രോഗ്രാമുകൾ",
    programsTitle: "പ്രോഗ്രാമുകളും സമീപ അനുഭവങ്ങളും",
    programsIntro: "അധികൃതവും ലോക്കലുമായ സന്ദർശക പ്രോഗ്രാമുകളെ കുറിച്ച് enquiry ചെയ്യാൻ തെക്കടി ഫേൺ സഹായിക്കും. ടിക്കറ്റ്, പെർമിറ്റ്, പ്രവർത്തന ദിവസം, റിപ്പോർട്ടിംഗ് സമയം, സുരക്ഷാ നിയമങ്ങൾ, അന്തിമ നിരക്ക് എന്നിവ ഔദ്യോഗിക പോർട്ടലിലോ ഓപ്പറേറ്ററിലോ സ്ഥിരീകരിക്കണം.",
    programSource: "റഫറൻസ്",
    programEnquiry: "പ്രോഗ്രാം അന്വേഷണം",
    programGaviTitle: "ഗവി ടൂറിസം / ഇക്കോ ടൂറിസം പാക്കേജ് അന്വേഷണം",
    programGaviText: "ഗവി-കക്കി കേരള ഫോറസ്റ്റ് ഇക്കോ ടൂറിസം ചാനലുകളിൽ ഉൾപ്പെടുന്നു. ഇത് enquiry support മാത്രം; അന്തിമ പാക്കേജ്, പെർമിറ്റ്, ലഭ്യത എന്നിവ ഔദ്യോഗിക ഉറവിടത്തിൽ നിന്ന് സ്ഥിരീകരിക്കണം.",
    programPeriyarTitle: "പെരിയാർ നാഷണൽ പാർക്ക് / ടൈഗർ റിസർവ് പ്രോഗ്രാമുകൾ",
    programPeriyarText: "പെരിയാറിലെ ഔദ്യോഗിക പ്രോഗ്രാമുകളിൽ നേച്ചർ വാക്ക്, ഗ്രീൻ വാക്ക്, ബാംബൂ റാഫ്റ്റിംഗ്, ബോർഡർ ഹൈക്കിംഗ്, ജംഗിൾ സ്കൗട്ട്, ടൈഗർ ട്രെയിൽ, ട്രൈബൽ ഡാൻസ്, ബോട്ടിംഗ്, ഗവി സഫാരി ലിസ്റ്റിംഗുകൾ എന്നിവ ഉൾപ്പെടാം; എല്ലാം ഔദ്യോഗിക ലഭ്യതയ്ക്ക് വിധേയമാണ്.",
    programBoatingTitle: "തെക്കടി ബോട്ട് സർവീസ്",
    programBoatingText: "പെരിയാർ തടാകത്തിലെ ബോട്ടിംഗ് പ്രധാന തെക്കടി അനുഭവമാണ്. റിപ്പോർട്ടിംഗ് സമയം, ടിക്കറ്റ് ഉറവിടം, ഐഡി ആവശ്യകത, സുരക്ഷാ നിയമങ്ങൾ എന്നിവ ഔദ്യോഗിക ചാനലിൽ സ്ഥിരീകരിക്കുക.",
    programPlantationTitle: "പ്ലാന്റേഷൻ സന്ദർശനം",
    programPlantationText: "തെക്കടിയും കുമളിയും സ്പൈസ് / പ്ലാന്റേഷൻ അനുഭവങ്ങൾക്ക് പ്രശസ്തമാണ്. യാത്രയ്ക്ക് മുമ്പ് പ്രോപ്പർട്ടിയിലോ ലോക്കൽ ഓപ്പറേറ്ററിലോ സ്ഥിരീകരിക്കുക.",
    programJeepTitle: "ജീപ്പ് സഫാരി / ഓഫ്‌റോഡ് അനുഭവം",
    programJeepText: "ജീപ്പ് സഫാരി, ഓഫ്‌റോഡ് പ്രോഗ്രാമുകൾ ലോക്കൽ ഓപ്പറേറ്റർ enquiry ആയി അഭ്യർത്ഥിക്കാം. റൂട്ട്, വാഹനം, സുരക്ഷ, സമയം, നിരക്ക് എന്നിവ മുൻകൂട്ടി സ്ഥിരീകരിക്കണം.",
    programElephantTitle: "എലിഫന്റ് സഫാരി / എലിഫന്റ് ആക്റ്റിവിറ്റി അന്വേഷണം",
    programElephantText: "എലിഫന്റ് ആക്റ്റിവിറ്റികളുടെ ലഭ്യതയും suitability-യും ലൈസൻസുള്ള ലോക്കൽ ഓപ്പറേറ്ററുമായി പരിശോധിക്കുക. ലഭ്യത സൈറ്റ് ഗ്യാരണ്ടി ചെയ്യുന്നില്ല.",
    programVagamonTitle: "വൺ-ഡേ വാഗമൺ അഡ്വെഞ്ചർ പ്രോഗ്രാം",
    programVagamonText: "വാഗമൺ enquiry-ൽ കുന്നുകൾ, മേടുകൾ, പൈൻ ഫോറസ്റ്റ്, adventure activity interests എന്നിവ ഉൾപ്പെടുത്താം. അന്തിമ itinerary, activity availability, timing എന്നിവ ലോക്കലായി സ്ഥിരീകരിക്കുക.",
    programRamakkalmeduTitle: "രാമക്കൽമേട് പ്രോഗ്രാം",
    programRamakkalmeduText: "രാമക്കൽമേട് ഒരു സമീപ hill / viewpoint program ആയി അഭ്യർത്ഥിക്കാം. യാത്രാ പദ്ധതി, പ്രവേശനം, കാലാവസ്ഥ, ഓപ്പറേറ്റർ വിവരങ്ങൾ എന്നിവ പുറപ്പെടുന്നതിന് മുമ്പ് സ്ഥിരീകരിക്കുക.",
    ayurSpa: "ഇൻ-ഹൗസ് ആയുർവേദ സ്പാ ആൻഡ് മസാജ്",
    exploreTitle: "തെക്കടിയും ലൊക്കേഷനും",
    exploreIntro: "കുമളിയുടെയും തെക്കടിയുടെയും പ്രകൃതി, സ്പൈസ്, സന്ദർശന അനുഭവങ്ങൾക്ക് ഈ പ്രോപ്പർട്ടി ഒരു ബേസ് ആയി ഉപയോഗിക്കാം. പദ്ധതികൾ പ്രോപ്പർട്ടിയിലോ ഔദ്യോഗിക സേവനദാതാക്കളിലോ സ്ഥിരീകരിക്കുക.",
    natureTitle: "പ്രകൃതിയും ലോക്കൽ അനുഭവങ്ങളും",
    natureText: "പച്ചപ്പും കാടിനോടു ചേർന്ന അനുഭവങ്ങളും സ്പൈസ് പ്രദേശങ്ങളും സന്ദർശക പ്രവർത്തനങ്ങളും കൊണ്ട് തെക്കടി പ്രശസ്തമാണ്. യാത്രയ്ക്ക് മുമ്പ് ദൂരം, സമയം, ബുക്കിംഗ് എന്നിവ സ്ഥിരീകരിക്കുക.",
    mapTitle: "പ്രോപ്പർട്ടി ലൊക്കേഷൻ",
    mapText: "സ്ഥിരീകരിച്ച വിലാസത്തിലേക്ക് പോകാൻ Google Maps ലിങ്ക് ഉപയോഗിക്കുക.",
    contactTitle: "നിരക്കുകൾ, കോൺടാക്ട് ആൻഡ് ബുക്കിംഗ് അന്വേഷണം",
    contactIntro: "വാട്ട്‌സ്ആപ്പ്, ഫോൺ, ഇമെയിൽ വഴി നേരിട്ട് അന്വേഷണം അയയ്ക്കുക. ഈ വെബ്സൈറ്റിൽ പേയ്‌മെന്റ് വിവരങ്ങൾ ശേഖരിക്കുന്നില്ല.",
    formTitle: "ബുക്കിംഗ് അന്വേഷണം ഫോം",
    fullName: "അതിഥിയുടെ പൂർണ്ണ പേര്",
    phone: "ഫോൺ നമ്പർ",
    phoneAlt: "മറ്റൊരു ഫോൺ",
    checkin: "ചെക്ക്-ഇൻ തീയതി",
    checkout: "ചെക്ക്-ഔട്ട് തീയതി",
    adults: "മുതിർന്നവരുടെ എണ്ണം",
    children: "കുട്ടികളുടെ എണ്ണം",
    preferredRoom: "ഇഷ്ടപ്പെട്ട റൂം തരം",
    roomSelectPlaceholder: "റൂം തരം തിരഞ്ഞെടുക്കുക",
    roomSingle: "സിംഗിൾ റൂം",
    roomDouble: "ഡബിൾ ഒക്ക്യുപൻസി റൂം",
    roomFlexible: "ഫ്ലെക്സിബിൾ",
    roomsNeeded: "ആവശ്യമായ റൂമുകൾ",
    spaOptional: "സ്പാ അന്വേഷണം",
    spaNo: "സ്പാ അന്വേഷണം ഇല്ല",
    spaYes: "സ്പാ / മസാജിൽ താൽപര്യം",
    message: "അധിക സന്ദേശം",
    privacyNote: "സ്വകാര്യത കുറിപ്പ്: ഈ അന്വേഷണം വാട്ട്‌സ്ആപ്പ് വഴി തെക്കടി ഫേൺ എന്ന പ്രോപ്പർട്ടിയുമായി പങ്കിടും. പേയ്‌മെന്റ് കാർഡ് വിവരങ്ങൾ നൽകേണ്ടതില്ല.",
    submitEnquiry: "വാട്ട്‌സ്ആപ്പ് അന്വേഷണം തയ്യാറാക്കുക",
    formErrorRequired: "ആവശ്യമായ എല്ലാ വിവരങ്ങളും പൂരിപ്പിക്കുക.",
    formErrorDate: "ചെക്ക്-ഔട്ട് തീയതി ചെക്ക്-ഇൻ തീയതിക്ക് ശേഷമായിരിക്കണം.",
    formErrorPhone: "സാധുവായ ഫോൺ നമ്പർ നൽകുക.",
    formReady: "നിങ്ങളുടെ അന്വേഷണം വാട്ട്‌സ്ആപ്പിൽ തുറന്നിട്ടുണ്ട്. അവിടെ പരിശോധിച്ച് അയക്കുക. തുറന്നില്ലെങ്കിൽ ഫോൺ അല്ലെങ്കിൽ ഇമെയിൽ വഴി ബന്ധപ്പെടുക.",
    contactDetails: "കോൺടാക്ട് വിവരങ്ങൾ",
    addressLabel: "വിലാസം",
    ownerApprovalTitle: "ഉടമയുടെ അംഗീകാരം വേണം",
    footerNote: "പ്രീമിയം ഹോംസ്റ്റേ വെബ്സൈറ്റ് ഡ്രാഫ്റ്റ്. പൊതുവായി പ്രസിദ്ധീകരിക്കുന്നതിന് മുമ്പ് ചിത്രങ്ങളും നിരക്കുകളും പ്രോഗ്രാം വിവരങ്ങളും സ്ഥിരീകരിക്കുക."
  },
  ta: {
    brand: "தேக்கடி ஃபெர்ன்",
    tagline: "தேக்கடியில் உங்கள் தனியார் ஓய்வு இடம்.",
    navHome: "முகப்பு", navStay: "தங்கும் அறைகள்", navSpa: "ஸ்பா", navFacilities: "வசதிகள்", navExplore: "சுற்றுலா", navContact: "தொடர்பு", navToggle: "வழிசெலுத்தலை திற",
    bookNow: "முன்பதிவு விசாரணை", whatsapp: "வாட்ஸ்அப்", directions: "வழித்தடம்", callNow: "அழைக்கவும்", emailUs: "மின்னஞ்சல்",
    heroEyebrow: "குமளி, தேக்கடியில் பிரீமியம் ஹோம்ஸ்டே", heroTitle: "தேக்கடி ஃபெர்ன்", heroCopy: "காட்டின் அமைதி, அன்பான விருந்தோம்பல் மற்றும் தேக்கடி இயற்கை அனுபவங்களுக்கு எளிதான அணுகல் கொண்ட பூட்டிக் தங்குமிடம்.",
    viewRooms: "அறைகள் பார்க்க", homeGalleryTitle: "உண்மையான புகைப்படங்களுக்கு தயார் செய்யப்பட்ட கேலரி", homeGalleryText: "உண்மையான சொத்து புகைப்படங்களை கேலரி கோப்புறைகளில் சேர்த்து இந்த இடைக்கால படங்களை மாற்றலாம்.",
    roomHighlightsTitle: "தம்பதிகள், குடும்பங்கள் மற்றும் சிறு குழுக்களுக்கு அறைகள்", roomHighlightsText: "இரண்டு விருந்தினர்கள் வரை சிங்கிள் அறைகள், நான்கு விருந்தினர்கள் வரை டபுள்-ஆக்குபன்சி அறைகள். இறுதி விலை மற்றும் கிடைப்பை சொத்து உறுதி செய்ய வேண்டும்.",
    spaHomeTitle: "இன்-ஹவுஸ் ஆயுர்வேத ஸ்பா மற்றும் மசாஜ்", spaHomeText: "தங்குமிடத்தின் முக்கிய அம்சமாக ஸ்பா அனுபவம் தயாரிக்கப்பட்டுள்ளது. இறுதி பட்டியல் உரிமையாளர் ஒப்புதல் வரை திருத்தக்கூடியது.",
    facilitiesHomeTitle: "சுலபமான தங்கலுக்கான வசதிகள்", facilitiesHomeText: "கிச்சன், பார்க்கிங், டிவி, வை-ஃபை, டைனிங், கேம்ப்ஃபயர், சஃபாரி, பிளாண்டேஷன் விசிட், கவி / பெரியார் இக்கோ டூரிசம் விசாரணை மற்றும் ஸ்பா சேர்க்கப்பட்டுள்ளது.",
    locationPreviewTitle: "தேக்கடி இயற்கைக்கு அருகில் குமளியில் தங்குங்கள்", locationPreviewText: "தெளிவான வழித்தடத்திற்காக முகவரி மற்றும் Google Maps இணைப்பு சேர்க்கப்பட்டுள்ளது. உறுதி செய்யாத தூரம் அல்லது பயண நேரம் சேர்க்கப்படவில்லை.",
    ctaTitle: "கிடைப்பை அறிய வேண்டுமா?", ctaText: "வாட்ஸ்அப் மூலம் விசாரணை அனுப்பவும். சொத்து இறுதி கிடைப்பு மற்றும் விலை விவரங்களை உறுதி செய்த பிறகே முன்பதிவு உறுதி.",
    stayTitle: "அறைகள் மற்றும் தங்குமிடம்", stayIntro: "உரிமையாளர் வழங்கிய குறிப்பு விலை மற்றும் தெளிவான ஆக்குபன்சி விவரங்களுடன் வசதியான தங்குமிடம்.",
    singleRoomTitle: "சிங்கிள் அறைகள்", doubleRoomTitle: "டபுள்-ஆக்குபன்சி அறைகள்", roomCount: "கிடைக்கும் அறைகள்", maxOccupancy: "அதிகபட்ச விருந்தினர்கள்", regularRate: "சாதாரண குறிப்பு விலை", decemberRate: "டிசம்பர் குறிப்பு விலை", rateDisclaimer: "விலைகள் உரிமையாளர் வழங்கிய குறிப்பு தகவல்கள். இறுதி விலை மற்றும் கிடைப்பை தேக்கடி ஃபெர்ன் உறுதி செய்ய வேண்டும்.",
    verifiedAmenities: "உறுதி செய்யப்பட்ட வசதிகள்", balconyNote: "கிடைக்கும் இடங்களில் பால்கனி காட்டப்பட்டுள்ளது. உறுதி செய்யப்பட்ட புகைப்படங்களால் மாற்றவும்.",
    spaTitle: "இன்-ஹவுஸ் ஸ்பா மற்றும் மசாஜ்", spaIntro: "சொத்திற்காக வடிவமைக்கப்பட்ட அமைதியான ஸ்பா பக்கம்; இறுதி கட்டணங்கள் உரிமையாளர் ஒப்புதல் வரை வரைவு நிலையில் உள்ளது.", draftMenuTitle: "வரைவு சிகிச்சை பட்டியல்", draftMenuNote: "இந்த சிகிச்சை பெயர்கள், நேரம் மற்றும் விலைகள் வேறு ஒரு வணிகத்திலிருந்து வந்த குறிப்பு தகவல்கள். உரிமையாளர் ஒப்புதல் வரை இவை தேக்கடி ஃபெர்ன் உறுதி செய்யப்பட்ட கட்டணங்கள் அல்ல.", priceHidden: "வரைவு குறிப்பு மட்டும்", enquireSpa: "ஸ்பா விசாரணை",
    facilitiesTitle: "வசதிகள், உணவு மற்றும் செயல்பாடுகள்", facilitiesIntro: "உறுதி செய்யப்பட்ட தகவல்கள் மற்றும் விசாரணைக்கான செயல்பாடுகள் மட்டும்; உறுதி செய்யாத நேரம், உள்ளடக்கம் அல்லது உத்தரவாதங்கள் சேர்க்கப்படவில்லை.",
    kitchen: "கிச்சன் வசதி", parking: "பார்க்கிங்", television: "டிவி", wifi: "வை-ஃபை", dining: "ரெஸ்டாரண்ட் / டைனிங் பகுதி", campfire: "கேம்ப்ஃபயர் விசாரணை", safari: "சஃபாரி ஏற்பாடு விசாரணை", plantationVisit: "பிளாண்டேஷன் விசிட்", jeepSafari: "ஜீப் சஃபாரி / ஆஃப்-ரோடு விசாரணை", elephantSafari: "யானை சஃபாரி விசாரணை", boating: "தேக்கடி படகு சேவை விசாரணை", trekking: "டிரெக்கிங் / வழிகாட்டி நடை விசாரணை", govtPrograms: "அரசு மற்றும் இக்கோ டூரிசம் திட்டங்கள்",
    programsTitle: "சுற்றுலா திட்டங்கள் மற்றும் அருகிலுள்ள அனுபவங்கள்", programsIntro: "அதிகாரப்பூர்வ மற்றும் உள்ளூர் சுற்றுலா திட்டங்களுக்கு தேக்கடி ஃபெர்ன் விசாரணை உதவி செய்யலாம். டிக்கெட், அனுமதி, நாள், நேரம், பாதுகாப்பு விதிகள் மற்றும் இறுதி விலை அதிகாரப்பூர்வ மூலத்துடன் உறுதி செய்ய வேண்டும்.", programSource: "குறிப்பு", programEnquiry: "திட்ட விசாரணை",
    programGaviTitle: "கவி டூரிசம் / இக்கோ டூரிசம் பாக்கேஜ் விசாரணை", programGaviText: "கவி-கக்கி கேரளா ஃபாரஸ்ட் இக்கோ டூரிசம் வழிகளில் பட்டியலிடப்பட்டுள்ளது. இறுதி பாக்கேஜ், அனுமதி மற்றும் கிடைப்பு அதிகாரப்பூர்வ மூலத்திலிருந்து உறுதி செய்ய வேண்டும்.",
    programPeriyarTitle: "பெரியார் நேஷனல் பார்க் / டைகர் ரிசர்வ் திட்டங்கள்", programPeriyarText: "நேச்சர் வாக், கிரீன் வாக், பாம்பு ராஃப்டிங், பார்டர் ஹைக்கிங், ஜங்கிள் ஸ்கவுட், டைகர் டிரெயில், பழங்குடி நடனம், படகு சேவை மற்றும் கவி சஃபாரி போன்றவை அதிகாரப்பூர்வ கிடைப்புக்கு உட்பட்டவை.",
    programBoatingTitle: "தேக்கடி படகு சேவை", programBoatingText: "பெரியார் ஏரி படகு பயணம் முக்கியமான தேக்கடி அனுபவம். நேரம், டிக்கெட், அடையாள ஆவணம் மற்றும் பாதுகாப்பு விதிகளை அதிகாரப்பூர்வ சேனலில் உறுதி செய்யவும்.",
    programPlantationTitle: "பிளாண்டேஷன் விசிட்", programPlantationText: "தேக்கடி மற்றும் குமளி மசாலா / பிளாண்டேஷன் அனுபவங்களுக்கு அறியப்பட்டவை. பயணத்திற்கு முன் சொத்து அல்லது உள்ளூர் ஆபரேட்டரிடம் உறுதி செய்யவும்.",
    programJeepTitle: "ஜீப் சஃபாரி மற்றும் ஆஃப்-ரோடு அனுபவம்", programJeepText: "ஜீப் சஃபாரி மற்றும் ஆஃப்-ரோடு திட்டங்கள் உள்ளூர் ஆபரேட்டர் விசாரணையாக கோரலாம். பாதை, வாகனம், பாதுகாப்பு, நேரம், விலை அனைத்தும் முன்பே உறுதி செய்ய வேண்டும்.",
    programElephantTitle: "யானை சஃபாரி / யானை செயல்பாடு விசாரணை", programElephantText: "யானை செயல்பாடுகளின் கிடைப்பு மற்றும் பொருத்தம் உரிமம் பெற்ற உள்ளூர் ஆபரேட்டரிடம் சரிபார்க்க வேண்டும். கிடைப்பை இந்த தளம் உத்தரவாதம் அளிக்காது.",
    programVagamonTitle: "ஒருநாள் வாகமண் அட்வென்ச்சர் திட்டம்", programVagamonText: "வாகமண் விசாரணையில் மலைகள், மேடுகள், பைன் காடு மற்றும் அட்வென்ச்சர் விருப்பங்கள் சேரலாம். இறுதி திட்டம் மற்றும் நேரம் உள்ளூரில் உறுதி செய்ய வேண்டும்.",
    programRamakkalmeduTitle: "ராமக்கல்மேடு திட்டம்", programRamakkalmeduText: "ராமக்கல்மேடு அருகிலுள்ள மலை / வியூப்பாயிண்ட் திட்டமாக கோரலாம். பயண திட்டம், அணுகல், வானிலை மற்றும் ஆபரேட்டர் விவரங்கள் முன்பே உறுதி செய்ய வேண்டும்.",
    ayurSpa: "இன்-ஹவுஸ் ஆயுர்வேத ஸ்பா மற்றும் மசாஜ்", exploreTitle: "தேக்கடி மற்றும் இடம்", exploreIntro: "குமளி மற்றும் தேக்கடி இயற்கை, மசாலா, சுற்றுலா அனுபவங்களுக்கு இந்த சொத்தை தளமாக பயன்படுத்தலாம். திட்டங்களை சொத்து அல்லது அதிகாரப்பூர்வ வழங்குநருடன் உறுதி செய்யவும்.", natureTitle: "இயற்கை மற்றும் உள்ளூர் அனுபவங்கள்", natureText: "தேக்கடி பசுமை, காடு சார்ந்த அனுபவங்கள், மசாலா நிலம் மற்றும் உள்ளூர் செயல்பாடுகளுக்குப் பிரபலமானது. பயணத்திற்கு முன் தூரம், நேரம், புக்கிங் உறுதி செய்யவும்.", mapTitle: "சொத்து இடம்", mapText: "உறுதி செய்யப்பட்ட முகவரிக்கு Google Maps இணைப்பைப் பயன்படுத்தவும்.",
    contactTitle: "விலை, தொடர்பு மற்றும் முன்பதிவு விசாரணை", contactIntro: "வாட்ஸ்அப், தொலைபேசி அல்லது மின்னஞ்சல் மூலம் நேரடி விசாரணை அனுப்பவும். இந்த வலைத்தளம் கட்டண விவரங்களை சேகரிக்காது.", formTitle: "முன்பதிவு விசாரணை படிவம்", fullName: "விருந்தினர் முழு பெயர்", phone: "தொலைபேசி எண்", phoneAlt: "மாற்று தொலைபேசி", checkin: "செக்-இன் தேதி", checkout: "செக்-அவுட் தேதி", adults: "பெரியவர்கள் எண்ணிக்கை", children: "குழந்தைகள் எண்ணிக்கை", preferredRoom: "விருப்பமான அறை வகை", roomSelectPlaceholder: "அறை வகை தேர்வு", roomSingle: "சிங்கிள் அறை", roomDouble: "டபுள்-ஆக்குபன்சி அறை", roomFlexible: "எதுவும் பரவாயில்லை", roomsNeeded: "தேவையான அறைகள்", spaOptional: "ஸ்பா விசாரணை", spaNo: "ஸ்பா விசாரணை இல்லை", spaYes: "ஸ்பா / மசாஜ் ஆர்வம்", message: "கூடுதல் செய்தி", privacyNote: "தனியுரிமை குறிப்பு: இந்த விசாரணை வாட்ஸ்அப் மூலம் தேக்கடி ஃபெர்ன் உடன் பகிரப்படும். கட்டண அட்டை விவரங்களை இட வேண்டாம்.", submitEnquiry: "வாட்ஸ்அப் விசாரணை தயார்", formErrorRequired: "தேவையான தகவல்களை நிரப்பவும்.", formErrorDate: "செக்-அவுட் தேதி செக்-இன் தேதிக்கு பிறகாக இருக்க வேண்டும்.", formErrorPhone: "சரியான தொலைபேசி எண்ணை இடவும்.", formReady: "உங்கள் விசாரணை வாட்ஸ்அப்பில் திறக்கப்பட்டது. பார்த்து அங்கே அனுப்பவும். திறக்கவில்லை என்றால் தொலைபேசி அல்லது மின்னஞ்சல் மூலம் தொடர்பு கொள்ளவும்.", contactDetails: "தொடர்பு விவரங்கள்", addressLabel: "முகவரி", ownerApprovalTitle: "உரிமையாளர் ஒப்புதல் தேவை", footerNote: "பிரீமியம் ஹோம்ஸ்டே வலைத்தள வரைவு. வெளியீட்டிற்கு முன் புகைப்படங்கள், விலைகள் மற்றும் திட்ட விவரங்களை உறுதி செய்யவும்."
  },
  hi: {
    brand: "थेक्कडी फर्न",
    tagline: "थेक्कडी में आपका निजी विश्राम स्थल.",
    navHome: "होम", navStay: "रूम", navSpa: "स्पा", navFacilities: "सुविधाएं", navExplore: "एक्सप्लोर", navContact: "संपर्क", navToggle: "नेविगेशन खोलें",
    bookNow: "बुकिंग पूछताछ", whatsapp: "व्हाट्सऐप", directions: "दिशा", callNow: "कॉल", emailUs: "ईमेल",
    heroEyebrow: "कुमिली, थेक्कडी में प्रीमियम होमस्टे", heroTitle: "थेक्कडी फर्न", heroCopy: "जंगल की शांति, गर्मजोशी भरी मेहमाननवाजी और थेक्कडी के प्रकृति अनुभवों तक आसान पहुंच वाला बुटीक स्टे.",
    viewRooms: "रूम देखें", homeGalleryTitle: "असली फोटो के लिए तैयार गैलरी", homeGalleryText: "असली प्रॉपर्टी फोटो गैलरी फोल्डर में डालकर इन प्लेसहोल्डर को बदला जा सकता है.",
    roomHighlightsTitle: "कपल, परिवार और छोटे ग्रुप के लिए रूम", roomHighlightsText: "दो मेहमान तक सिंगल रूम और चार मेहमान तक डबल-ऑक्यूपेंसी रूम. अंतिम रेट और उपलब्धता प्रॉपर्टी से कन्फर्म होगी.",
    spaHomeTitle: "इन-हाउस आयुर्वेदिक स्पा और मसाज", spaHomeText: "स्पा अनुभव को स्टे का मुख्य आकर्षण बनाया गया है. अंतिम मेनू और रेट मालिक की मंजूरी तक ड्राफ्ट रहेंगे.",
    facilitiesHomeTitle: "आरामदायक स्टे के लिए सुविधाएं", facilitiesHomeText: "किचन, पार्किंग, टीवी, वाई-फाई, डाइनिंग, कैंपफायर, सफारी, प्लांटेशन विजिट, गावी / पेरियार इको-टूरिज्म पूछताछ और स्पा शामिल हैं.",
    locationPreviewTitle: "थेक्कडी की प्रकृति के पास कुमिली में रहें", locationPreviewText: "सही दिशा के लिए पता और Google Maps लिंक दिया गया है. अपुष्ट दूरी या यात्रा समय नहीं जोड़ा गया है.",
    ctaTitle: "उपलब्धता पूछनी है?", ctaText: "व्हाट्सऐप से पूछताछ भेजें. प्रॉपर्टी से अंतिम उपलब्धता और रेट कन्फर्म होने के बाद ही बुकिंग कन्फर्म मानी जाएगी.",
    stayTitle: "रूम और आवास", stayIntro: "मालिक द्वारा दिए गए संदर्भ रेट और स्पष्ट ऑक्यूपेंसी जानकारी के साथ आरामदायक आवास.", singleRoomTitle: "सिंगल रूम", doubleRoomTitle: "डबल-ऑक्यूपेंसी रूम", roomCount: "उपलब्ध रूम", maxOccupancy: "अधिकतम मेहमान", regularRate: "सामान्य संदर्भ रेट", decemberRate: "दिसंबर संदर्भ रेट", rateDisclaimer: "रेट मालिक द्वारा दिए गए संदर्भ हैं. अंतिम रेट और उपलब्धता THEKKADY FERN से कन्फर्म होनी चाहिए.",
    verifiedAmenities: "कन्फर्म सुविधाएं", balconyNote: "जहां उपलब्ध है वहां बालकनी दिखाई गई है. कन्फर्म फोटो से बदलें.",
    spaTitle: "इन-हाउस स्पा और मसाज", spaIntro: "प्रॉपर्टी के लिए तैयार शांत स्पा पेज; अंतिम टैरिफ मालिक की मंजूरी तक ड्राफ्ट हैं.", draftMenuTitle: "ड्राफ्ट ट्रीटमेंट मेनू", draftMenuNote: "ये ट्रीटमेंट नाम, अवधि और कीमतें दूसरी बिजनेस से संदर्भ सामग्री हैं. मालिक की मंजूरी तक ये THEKKADY FERN के कन्फर्म टैरिफ नहीं हैं.", priceHidden: "सिर्फ ड्राफ्ट संदर्भ", enquireSpa: "स्पा पूछताछ",
    facilitiesTitle: "सुविधाएं, डाइनिंग और गतिविधियां", facilitiesIntro: "कन्फर्म प्रॉपर्टी जानकारी और पूछताछ के लिए गतिविधि विकल्प, बिना अपुष्ट समय, समावेशन या गारंटी जोड़े.",
    kitchen: "किचन सुविधा", parking: "पार्किंग", television: "टेलीविजन", wifi: "वाई-फाई", dining: "रेस्टोरेंट / डाइनिंग एरिया", campfire: "कैंपफायर पूछताछ", safari: "सफारी व्यवस्था पूछताछ", plantationVisit: "प्लांटेशन विजिट", jeepSafari: "जीप सफारी / ऑफ-रोड पूछताछ", elephantSafari: "एलीफेंट सफारी पूछताछ", boating: "थेक्कडी बोट सर्विस पूछताछ", trekking: "ट्रेकिंग / गाइडेड वॉक पूछताछ", govtPrograms: "सरकारी और इको-टूरिज्म कार्यक्रम",
    programsTitle: "कार्यक्रम और नजदीकी अनुभव", programsIntro: "THEKKADY FERN आधिकारिक और स्थानीय विजिटर कार्यक्रमों के लिए पूछताछ में मदद कर सकता है. टिकट, परमिट, दिन, समय, सुरक्षा नियम और अंतिम कीमत आधिकारिक पोर्टल या ऑपरेटर से कन्फर्म करें.", programSource: "संदर्भ", programEnquiry: "कार्यक्रम पूछताछ",
    programGaviTitle: "गावी टूरिज्म / इको-टूरिज्म पैकेज पूछताछ", programGaviText: "गावी-कक्की केरल फॉरेस्ट इको-टूरिज्म चैनलों में सूचीबद्ध है. अंतिम पैकेज, परमिट और उपलब्धता आधिकारिक स्रोत से ही कन्फर्म करें.",
    programPeriyarTitle: "पेरियार नेशनल पार्क / टाइगर रिजर्व कार्यक्रम", programPeriyarText: "आधिकारिक पेरियार कार्यक्रमों में नेचर वॉक, ग्रीन वॉक, बांस राफ्टिंग, बॉर्डर हाइकिंग, जंगल स्काउट, टाइगर ट्रेल, ट्राइबल डांस, बोटिंग और गावी सफारी लिस्टिंग शामिल हो सकती हैं; सब आधिकारिक उपलब्धता पर निर्भर हैं.",
    programBoatingTitle: "थेक्कडी बोट सर्विस", programBoatingText: "पेरियार लेक बोटिंग थेक्कडी का प्रमुख अनुभव है. रिपोर्टिंग समय, टिकट स्रोत, आईडी और सुरक्षा नियम आधिकारिक चैनल से कन्फर्म करें.",
    programPlantationTitle: "प्लांटेशन विजिट", programPlantationText: "थेक्कडी और कुमिली मसाला / प्लांटेशन अनुभवों के लिए जाने जाते हैं. यात्रा से पहले प्रॉपर्टी या स्थानीय ऑपरेटर से कन्फर्म करें.",
    programJeepTitle: "जीप सफारी और ऑफ-रोड अनुभव", programJeepText: "जीप सफारी और ऑफ-रोड कार्यक्रम स्थानीय ऑपरेटर पूछताछ के रूप में अनुरोध किए जा सकते हैं. रूट, वाहन, सुरक्षा, समय और रेट पहले कन्फर्म करें.",
    programElephantTitle: "एलीफेंट सफारी / एलीफेंट गतिविधि पूछताछ", programElephantText: "एलीफेंट गतिविधियों की उपलब्धता और उपयुक्तता लाइसेंस प्राप्त स्थानीय ऑपरेटर से जांचें. यह साइट उपलब्धता की गारंटी नहीं देती.",
    programVagamonTitle: "वन-डे वागामोन एडवेंचर कार्यक्रम", programVagamonText: "वागामोन पूछताछ में हिल्स, मीडोज, पाइन फॉरेस्ट और एडवेंचर गतिविधि रुचियां शामिल हो सकती हैं. अंतिम योजना और समय स्थानीय रूप से कन्फर्म करें.",
    programRamakkalmeduTitle: "रामक्कलमेडु कार्यक्रम", programRamakkalmeduText: "रामक्कलमेडु को नजदीकी हिल / व्यूपॉइंट कार्यक्रम के रूप में पूछा जा सकता है. यात्रा योजना, पहुंच, मौसम और ऑपरेटर जानकारी पहले कन्फर्म करें.",
    ayurSpa: "इन-हाउस आयुर्वेदिक स्पा और मसाज", exploreTitle: "थेक्कडी और लोकेशन", exploreIntro: "कुमिली और थेक्कडी की प्रकृति, मसाला और विजिटर अनुभवों के लिए इस प्रॉपर्टी को बेस बना सकते हैं. योजनाएं प्रॉपर्टी या आधिकारिक प्रदाता से कन्फर्म करें.", natureTitle: "प्रकृति और स्थानीय अनुभव", natureText: "थेक्कडी हरियाली, जंगल अनुभव, मसाला क्षेत्र और स्थानीय गतिविधियों के लिए जाना जाता है. यात्रा से पहले दूरी, समय और बुकिंग कन्फर्म करें.", mapTitle: "प्रॉपर्टी लोकेशन", mapText: "कन्फर्म पते तक पहुंचने के लिए Google Maps लिंक का उपयोग करें.",
    contactTitle: "रेट, संपर्क और बुकिंग पूछताछ", contactIntro: "व्हाट्सऐप, फोन या ईमेल से सीधे पूछताछ भेजें. यह वेबसाइट भुगतान विवरण नहीं लेती.", formTitle: "बुकिंग पूछताछ फॉर्म", fullName: "मेहमान का पूरा नाम", phone: "फोन नंबर", phoneAlt: "दूसरा फोन", checkin: "चेक-इन तारीख", checkout: "चेक-आउट तारीख", adults: "वयस्कों की संख्या", children: "बच्चों की संख्या", preferredRoom: "पसंदीदा रूम प्रकार", roomSelectPlaceholder: "रूम प्रकार चुनें", roomSingle: "सिंगल रूम", roomDouble: "डबल-ऑक्यूपेंसी रूम", roomFlexible: "फ्लेक्सिबल", roomsNeeded: "रूम की संख्या", spaOptional: "स्पा पूछताछ", spaNo: "स्पा पूछताछ नहीं", spaYes: "स्पा / मसाज में रुचि", message: "अतिरिक्त संदेश", privacyNote: "गोपनीयता नोट: यह पूछताछ व्हाट्सऐप द्वारा THEKKADY FERN से साझा होगी. भुगतान कार्ड विवरण न डालें.", submitEnquiry: "व्हाट्सऐप पूछताछ तैयार करें", formErrorRequired: "कृपया सभी जरूरी जानकारी भरें.", formErrorDate: "चेक-आउट तारीख चेक-इन के बाद होनी चाहिए.", formErrorPhone: "कृपया मान्य फोन नंबर दर्ज करें.", formReady: "आपकी पूछताछ व्हाट्सऐप में खुल गई है. कृपया वहां जांचकर भेजें. अगर नहीं खुली तो फोन या ईमेल से संपर्क करें.", contactDetails: "संपर्क विवरण", addressLabel: "पता", ownerApprovalTitle: "मालिक की मंजूरी बाकी", footerNote: "प्रीमियम होमस्टे वेबसाइट ड्राफ्ट. पब्लिक लॉन्च से पहले फोटो, रेट और कार्यक्रम विवरण कन्फर्म करें."
  }
};

function t(key) {
  const lang = ["en", "ml", "ta", "hi"].includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  return I18N[lang][key] || I18N.en[key] || key;
}

function getLang() {
  return localStorage.getItem("tf_lang") || "en";
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("tf_lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  renderDynamic();
}

function waUrl(message) {
  return `https://wa.me/${TF.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}

function applyContactLinks() {
  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    const phone = link.dataset.phoneLink === "alt" ? TF.phoneDisplay2 : TF.phoneDisplay;
    link.href = `tel:${phone.replace(/\s/g, "")}`;
  });
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${TF.email}`;
  });
  document.querySelectorAll("[data-map-link]").forEach((link) => {
    link.href = TF.mapsUrl;
  });
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const topic = link.dataset.whatsapp || "general";
    const message = topic === "spa"
      ? `Hello THEKKADY FERN, I would like to enquire about the in-house spa and massage options.`
      : topic === "program"
        ? `Hello THEKKADY FERN, I would like to enquire about Thekkady programs, eco-tourism options and local activity arrangements.`
        : `Hello THEKKADY FERN, I would like to enquire about room availability and rates.`;
    link.href = waUrl(message);
  });
}

function renderGallery() {
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;
  const items = [
    ["exterior", "Exterior photo placeholder"],
    ["single", "Single room photo placeholder"],
    ["double", "Double-occupancy room photo placeholder"],
    ["kitchen", "Kitchen and dining photo placeholder"],
    ["balcony", "Balcony photo placeholder"],
    ["spa", "Spa photo placeholder"],
    ["bambooRafting", "Bamboo rafting at Periyar"],
    ["plantation", "Kerala spice plantation visit"],
    ["jeepSafari", "Jeep safari activity image"]
  ];
  gallery.innerHTML = items.map(([key, alt]) => `
    <article class="image-card card reveal">
      <img src="${TF.images[key]}" alt="${alt}" loading="lazy" width="1200" height="800">
    </article>
  `).join("");
}

function renderRooms() {
  const target = document.querySelector("[data-room-cards]");
  if (!target) return;
  target.innerHTML = TF.rates.map((room) => {
    const isSingle = room.key === "single";
    const title = isSingle ? t("singleRoomTitle") : t("doubleRoomTitle");
    const img = isSingle ? TF.images.single : TF.images.double;
    return `
      <article class="card reveal">
        <div class="room-media"><img src="${img}" alt="${title}" loading="lazy" width="1200" height="800"></div>
        <div class="card-body">
          <h3>${title}</h3>
          <div class="price-line">
            <small>${t("roomCount")}</small><span>${room.rooms}</span>
            <small>${t("maxOccupancy")}</small><span>${room.occupancy} guests</span>
            <small>${t("regularRate")}</small><span>${room.regular}</span>
            <small>${t("decemberRate")}</small><span>${room.december}</span>
          </div>
          <p class="muted" style="margin-top:1rem">${t("rateDisclaimer")}</p>
          <div class="actions"><a class="button ghost" href="contact.html#booking" data-i18n="bookNow">${t("bookNow")}</a></div>
        </div>
      </article>
    `;
  }).join("");
}

function renderFacilities() {
  const target = document.querySelector("[data-facilities]");
  if (!target) return;
  const facilities = [
    ["kitchen", "kitchen", TF.images.kitchen],
    ["parking", "parking", TF.images.exterior],
    ["television", "television", TF.images.single],
    ["wifi", "wifi", TF.images.balcony],
    ["dining", "dining", TF.images.kitchen],
    ["campfire", "campfire", TF.images.activities],
    ["safari", "safari", TF.images.jeepSafari],
    ["plantationVisit", "plantationVisit", TF.images.plantation],
    ["boating", "boating", TF.images.boating],
    ["trekking", "trekking", TF.images.bambooRafting],
    ["jeepSafari", "jeepSafari", TF.images.jeepSafari],
    ["elephantSafari", "elephantSafari", TF.images.elephantSafari],
    ["ayurSpa", "ayurSpa", TF.images.spa]
  ];
  target.innerHTML = facilities.map(([key, label, image]) => `
    <article class="card image-card reveal">
      <img src="${image}" alt="${t(label)}" loading="lazy" width="1200" height="800">
      <div class="card-body">
        <h3>${t(label)}</h3>
        <p>${t("facilitiesIntro")}</p>
      </div>
    </article>
  `).join("");
}

function renderPrograms() {
  document.querySelectorAll("[data-programs]").forEach((target) => {
    const limit = Number(target.dataset.programsLimit || TF.programs.length);
    const items = TF.programs.slice(0, limit);
    target.innerHTML = items.map((program) => {
      const source = program.url
        ? `<a href="${program.url}" target="_blank" rel="noopener">${program.source}</a>`
        : program.source;
      return `
        <article class="card image-card program-card reveal">
          <img src="${TF.images[program.image]}" alt="${t(program.title)}" loading="lazy" width="1200" height="800">
          <div class="card-body">
            <h3>${t(program.title)}</h3>
            <p>${t(program.text)}</p>
            <p class="program-meta"><span>${t("programSource")}:</span> ${source}</p>
            <div class="actions">
              <a class="button ghost" href="#" data-whatsapp="program">${t("programEnquiry")}</a>
            </div>
          </div>
        </article>
      `;
    }).join("");
    applyContactLinks();
  });
}

function renderSpa() {
  const target = document.querySelector("[data-spa-menu]");
  if (!target) return;
  target.innerHTML = TF.spaDraft.map(([name, duration, price]) => `
    <article class="menu-item reveal">
      <div>
        <strong>${name}</strong><br>
        <small>${duration}</small>
      </div>
      <div>
        <strong>${t("priceHidden")}</strong><br>
        <small>${price}</small>
      </div>
    </article>
  `).join("");
}

function renderRateSummary() {
  const target = document.querySelector("[data-rate-summary]");
  if (!target) return;
  target.innerHTML = TF.rates.map((room) => {
    const title = room.key === "single" ? t("singleRoomTitle") : t("doubleRoomTitle");
    return `
      <div class="rate-box reveal">
        <strong>${title}</strong>
        <p>${t("roomCount")}: ${room.rooms}. ${t("maxOccupancy")}: ${room.occupancy} guests.</p>
        <p>${t("regularRate")}: ${room.regular}. ${t("decemberRate")}: ${room.december}.</p>
      </div>
    `;
  }).join("");
}

function renderDynamic() {
  renderGallery();
  renderRooms();
  renderFacilities();
  renderSpa();
  renderRateSummary();
  renderPrograms();
  revealVisible();
}

function setupBookingForm() {
  const form = document.querySelector("#booking-form");
  if (!form) return;
  const status = document.querySelector("#form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const required = ["name", "phone", "checkin", "checkout", "adults", "roomType", "rooms"];
    const missing = required.some((key) => !String(data.get(key) || "").trim());
    const phone = String(data.get("phone") || "").trim();
    const checkin = new Date(data.get("checkin"));
    const checkout = new Date(data.get("checkout"));
    if (missing) {
      status.textContent = t("formErrorRequired");
      status.className = "error";
      return;
    }
    if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) {
      status.textContent = t("formErrorPhone");
      status.className = "error";
      return;
    }
    if (!(checkout > checkin)) {
      status.textContent = t("formErrorDate");
      status.className = "error";
      return;
    }
    const message = [
      "Hello THEKKADY FERN, I would like to make a booking enquiry.",
      `Name: ${data.get("name")}`,
      `Phone: ${phone}`,
      `Check-in: ${data.get("checkin")}`,
      `Check-out: ${data.get("checkout")}`,
      `Adults: ${data.get("adults")}`,
      `Children: ${data.get("children") || "0"}`,
      `Preferred room: ${data.get("roomType")}`,
      `Number of rooms: ${data.get("rooms")}`,
      `Spa enquiry: ${data.get("spa") || "No"}`,
      `Message: ${data.get("message") || "No additional message"}`,
      "Please confirm final availability and rate details."
    ].join("\n");
    window.open(waUrl(message), "_blank", "noopener");
    status.textContent = t("formReady");
    status.className = "success";
  });
}

function setupNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function revealVisible() {
  const nodes = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  nodes.forEach((node) => observer.observe(node));
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  applyContactLinks();
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  setLanguage(getLang());
  setupBookingForm();
});
