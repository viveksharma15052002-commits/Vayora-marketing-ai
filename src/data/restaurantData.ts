import { MenuItem, TastingCourse, GalleryItem, Review } from '../types';

export const RESTAURANT_INFO = {
  name: "AURELIA",
  tagline: "Haute Gastronomie & Grand Cellar",
  michelinStars: "★★★",
  subtitle: "Three Stars Michelin • The World's 50 Best #4",
  address: "742 Aurelian Avenue, Upper East Enclave, New York, NY 10021",
  phone: "+1 (212) 845-9200",
  email: "concierge@aurelia-dining.com",
  valet: "Complimentary Private Chauffeur & Valet on 74th St.",
  dressCode: "Formal Elegance (Jackets required for gentlemen. Athletic wear & casual footwear strictly prohibited.)",
  hours: {
    dinner: "Tuesday – Sunday: 5:30 PM – 11:30 PM",
    lounge: "Tuesday – Sunday: 5:00 PM – 1:30 AM",
    closed: "Monday: Closed for culinary development & cellar curation",
  },
  stats: [
    { label: "Michelin Stars", value: "3 Stars", sub: "2024, 2025, 2026" },
    { label: "Curated Vintages", value: "1,850+", sub: "Grand Cru & Rare Cellar" },
    { label: "Seasonal Courses", value: "8 Acts", sub: "Avant-Garde Odyssey" },
    { label: "Global Ranking", value: "No. 4", sub: "World's 50 Best 2026" },
  ]
};

export const TASTING_COURSES: TastingCourse[] = [
  {
    courseNumber: 1,
    act: "Act I • Awakening",
    dishName: "Imperial Osetra Caviar & Smoked Dashi Sphere",
    frenchTitle: "Caviar Impérial Osciètre et Sphère de Dashi Fumé",
    description: "Cold-smoked sea urchin emulsified with roasted kelp dashi, topped with royal Petrossian Osetra caviar and 24k gold dusting.",
    ingredients: ["Petrossian Osetra Caviar", "Hokkaido Uni", "Aged Kelp Dashi", "Meyer Lemon Gel", "Gold Leaf"],
    winePairing: "Dom Pérignon P2 Vintage, 2004",
    wineRegion: "Épernay, Champagne, France",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
  },
  {
    courseNumber: 2,
    act: "Act II • The Ocean Depths",
    dishName: "Brittany Blue Lobster Poached in Hazelnut Butter",
    frenchTitle: "Homard Bleu de Bretagne Poché au Beurre Noisette",
    description: "Slowly butter-poached lobster tail over charred baby leek velouté, white truffle shavings, and sea fennel crisps.",
    ingredients: ["Brittany Blue Lobster", "AOP Isigny Butter", "Alba White Truffle", "Confit Leek", "Sea Fennel"],
    winePairing: "Domaine Leflaive Bâtard-Montrachet Grand Cru, 2018",
    wineRegion: "Côte de Beaune, Burgundy",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=85"
  },
  {
    courseNumber: 3,
    act: "Act III • Earth & Forest",
    dishName: "Glazed Morels with Foie Gras Custard",
    frenchTitle: "Morilles Farcies au Foie Gras et Émulsion de Sous-Bois",
    description: "Spring wild morels filled with Périgord duck liver royale, finished in a 40-year Madeira reduction and forest lichen crisp.",
    ingredients: ["French Morels", "Périgord Foie Gras", "Madeira Verdelho 1982", "Charred Lichen", "Black Truffle"],
    winePairing: "Château Rayas Châteauneuf-du-Pape Blanc, 2015",
    wineRegion: "Rhône Valley, France",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=85"
  },
  {
    courseNumber: 4,
    act: "Act IV • The Crimson Peak",
    dishName: "A5 Miyazaki Wagyu Smoked over Binchotan",
    frenchTitle: "Bœuf Wagyu A5 de Miyazaki Braisé au Binchotan",
    description: "Japanese master-grade sirloin seared over white charcoal, fermented black garlic jus, matsutake broth, and bone marrow crisp.",
    ingredients: ["A5 Miyazaki Wagyu", "Binchotan Charcoal", "Matsutake Mushrooms", "Black Garlic Jus", "Smoked Flake Salt"],
    winePairing: "Château Margaux Premier Grand Cru Classé, 2010",
    wineRegion: "Margaux, Bordeaux, France",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
  },
  {
    courseNumber: 5,
    act: "Act V • Alpine Harvest",
    dishName: "Hokkaido Scallop with White Truffle Dashi & Yuzu Kosho",
    frenchTitle: "Saint-Jacques d'Hokkaido au Dashi de Truffe Blanche",
    description: "Wild Hokkaido scallop gently seared on salt stone, infused with warm white truffle emulsion, citrusy green yuzu kosho, and samphire.",
    ingredients: ["Wild Hokkaido Scallop", "Alba Truffle Infusion", "Fresh Green Yuzu Kosho", "Wild Samphire", "Finger Lime"],
    winePairing: "Coche-Dury Meursault Premier Cru, 2017",
    wineRegion: "Meursault, Burgundy, France",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85"
  },
  {
    courseNumber: 6,
    act: "Act VI • Crisp Palate Cleanser",
    dishName: "Yuzu Snow, Shiso Granite & Champagne Mist",
    frenchTitle: "Neige de Yuzu, Granité de Shiso et Voile de Champagne",
    description: "Cryo-shattered Japanese citrus snow infused with crisp green shiso herb and effervescent Krug vintage reduction.",
    ingredients: ["Kochi Yuzu", "Fresh Green Shiso", "Krug Grande Cuvée", "Mountain Juniper"],
    winePairing: "Billecart-Salmon Brut Rosé",
    wineRegion: "Mareuil-sur-Aÿ, Champagne",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85"
  },
  {
    courseNumber: 7,
    act: "Act VII • Hearth & Pasture",
    dishName: "Dry-Aged Pyrenean Lamb with Smoked Rosemary Jus",
    frenchTitle: "Selle d'Agneau des Pyrénées Rôtie au Romarin Fumé",
    description: "45-day dry-aged milk-fed lamb saddle roasted over olive wood coals, accompanied by glazed cipollini onions and jus truffé.",
    ingredients: ["Pyrenean Milk-Fed Lamb", "Olive Wood Embers", "Glazed Cipollini", "Périgord Truffle Jus", "Micro Chervil"],
    winePairing: "Tenuta San Guido Sassicaia Bolgheri Sassicaia, 2016",
    wineRegion: "Tuscany, Italy",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
  },
  {
    courseNumber: 8,
    act: "Act VIII • Grand Pâtisserie",
    dishName: "24K Gold Smoked Valrhona Guanaja Sphere & Flambé Soufflé",
    frenchTitle: "Sphère Fumée au Chocolat Guanaja 70% et Soufflé Grand Marnier",
    description: "A hand-tempered dark chocolate dome concealing smoked Madagascar vanilla mousse, paired with a golden mirabelle soufflé flamed tableside.",
    ingredients: ["Valrhona Guanaja 70%", "24K Edible Gold Leaf", "Piedmont Hazelnuts", "Madagascar Bourbon Vanilla", "Grand Marnier Cuvée du Centenaire"],
    winePairing: "Château d'Yquem Premier Cru Supérieur, 2009",
    wineRegion: "Sauternes, Bordeaux, France",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: "m-1",
    name: "Wild Brittany Turbot Carpaccio",
    frenchTitle: "Carpaccio de Turbot Sauvage aux Agrumes",
    description: "Thinly shaved wild turbot cured in blood orange blossom oil, finger lime pearls, and smoked Maldon salt.",
    price: 95,
    category: "starters",
    dietary: ["GF", "DF"],
    isSignature: true,
    origin: "Brittany Coast, France",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    pairing: "Chablis Grand Cru 'Les Clos', Dauvissat 2019"
  },
  {
    id: "m-2",
    name: "Duck Foie Gras Terrine with Black Fig",
    frenchTitle: "Terrine de Foie Gras de Canard aux Figues Rôties",
    description: "Silky spiced terrine served with caramelized Mission black figs, brioche feuilletée, and 25-year aged balsamic caviar.",
    price: 88,
    category: "starters",
    dietary: ["NF"],
    isSignature: false,
    origin: "Landes, France",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    pairing: "Château Guiraud Sauternes, 2011"
  },
  {
    id: "m-2b",
    name: "Seared Hokkaido Scallop Tartare",
    frenchTitle: "Tartare de Saint-Jacques et Dashi Yuzu",
    description: "Hand-diced wild Hokkaido scallop tossed in white truffle oil, oscietra caviar, and shiso blossom tuile.",
    price: 92,
    category: "starters",
    dietary: ["GF"],
    isSignature: true,
    origin: "Hokkaido, Japan",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    pairing: "Domaine Leflaive Puligny-Montrachet, 2020"
  },
  {
    id: "m-3",
    name: "Petrossian Special Reserve Caviar Service",
    frenchTitle: "Service de Caviar Royal Pétrossian 50g",
    description: "50 grams of Beluga Imperial Reserve served on hand-cut ice, with traditional warm buckwheat blinis, cultured churned butter, and quail egg yolks.",
    price: 340,
    category: "caviar",
    dietary: ["GF"],
    isSignature: true,
    origin: "Caspian Sea Selection",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    pairing: "Louis Roederer Cristal Brut, 2014"
  },
  // Mains
  {
    id: "m-4",
    name: "Miyazaki A5 Wagyu Tenderloin with Périgord Jus",
    frenchTitle: "Filet de Bœuf Wagyu A5 au Jus Truffé",
    description: "Charcoal-kissed A5 tenderloin, pomme purée with Robuchon-level butter, braised shallot confit, and black winter truffle.",
    price: 210,
    category: "mains",
    dietary: ["GF"],
    isSignature: true,
    origin: "Miyazaki Prefecture, Japan",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    pairing: "Opus One Proprietary Red, Napa Valley 2018"
  },
  {
    id: "m-5",
    name: "Glacier 51 Toothfish in Saffron Crustacean Velouté",
    frenchTitle: "Légine Australe Pochée à l'Émulsion de Safran et Crustacés",
    description: "Pan-roasted Antarctic toothfish in golden saffron bisque, baby Romanesco, and crispy seaweed tuile.",
    price: 165,
    category: "mains",
    dietary: ["GF"],
    isSignature: false,
    origin: "Heard Island, Southern Ocean",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    pairing: "Puligny-Montrachet 1er Cru, Olivier Leflaive 2020"
  },
  {
    id: "m-5b",
    name: "Brittany Blue Lobster Roasted in Brown Butter",
    frenchTitle: "Homard Bleu Entier Rôti au Beurre Noisette",
    description: "Whole butter-roasted Blue lobster tail and claw, saffron leek silk, Alba white truffle, and sea urchin foam.",
    price: 185,
    category: "mains",
    dietary: ["GF"],
    isSignature: true,
    origin: "Brittany, France",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    pairing: "Batard-Montrachet Grand Cru, 2018"
  },
  {
    id: "m-6",
    name: "Roasted Scottish Squab with Cocoa & Juniper",
    frenchTitle: "Pigeon d'Écosse Rôti au Cacao et Baies de Genièvre",
    description: "Breast roasted on the bone, confit leg pastilla, bitter Valrhona cocoa reduction, and heirloom parsnip silk.",
    price: 145,
    category: "mains",
    dietary: ["NF"],
    isSignature: false,
    origin: "Highlands, Scotland",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    pairing: "Gevrey-Chambertin, Domaine Armand Rousseau 2017"
  },
  // Desserts
  {
    id: "m-7",
    name: "The Golden Obsidian Sphere",
    frenchTitle: "Sphère d'Obsidienne Noire et Feuille d'Or",
    description: "Smoked 72% Venezuelan dark chocolate shell, passion fruit gelée core, roasted hazelnut feuilletine, poured with warm gold-infused cognac caramel.",
    price: 45,
    category: "desserts",
    dietary: ["VG"],
    isSignature: true,
    origin: "Artisanal Pastry Atelier",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
    pairing: "Hennessy Paradis Rare Cognac"
  },
  {
    id: "m-8",
    name: "Tahitian Vanilla & White Truffle Mille-Feuille",
    frenchTitle: "Mille-Feuille Croustillant Vanille de Tahiti et Truffe Blanche",
    description: "Inverted caramel puff pastry layers, whipped Tahitian vanilla diplomate cream, fresh white Alba truffle infusion.",
    price: 42,
    category: "desserts",
    dietary: ["VG"],
    isSignature: false,
    origin: "French Classical Technique",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    pairing: "Château d'Yquem, 2015"
  },
  // Cocktails & Cellar
  {
    id: "m-9",
    name: "Aurelia Smoked Gold Manhattan",
    frenchTitle: "Manhattan Fumé aux Écorces de Chêne et Or 24K",
    description: "WhistlePig The Boss Hog Rye, Carpano Antica Formula, barrel-aged bitters, smoked with cherrywood smoke in a gold-rimmed crystal coupe.",
    price: 52,
    category: "cocktails",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-10",
    name: "The Midnight Truffle Old Fashioned",
    frenchTitle: "Old Fashioned aux Truffes Noires et Bourbon Réserve",
    description: "Weller 12-Year Bourbon fat-washed with Périgord black truffle oil, demerara raw syrup, gold leaf ice sphere.",
    price: 48,
    category: "cocktails",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-11",
    name: "Domaine de la Romanée-Conti Grand Cru, 2015",
    frenchTitle: "Cuvée Exclusive du Domaine Romanée-Conti",
    description: "Flawless provenance directly from the estate cellar. Violets, forest floor, exotic Asian spices, limitless longevity.",
    price: 18500,
    category: "cellar",
    origin: "Vosne-Romanée, Burgundy",
    vintageYear: "2015",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m-12",
    name: "Château Cheval Blanc Premier Grand Cru Classé A, 2005",
    frenchTitle: "Château Cheval Blanc Saint-Émilion",
    description: "Silky tannins, roasted plum, graphite, velvety tobacco leaf. 100 Parker Points.",
    price: 4200,
    category: "cellar",
    origin: "Saint-Émilion, Bordeaux",
    vintageYear: "2005",
    image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "The Golden Cloche Reveal",
    subtitle: "Avant-Garde Table Theater",
    category: "culinary",
    aspect: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
    description: "Every course at Aurelia is an ephemeral artistic performance, unveiled under warm burnished cloches with aromatic botanical smoke.",
    chefQuote: "Cooking is the transformation of fleeting moments into enduring memories.",
    depth: 1
  },
  {
    id: "g-2",
    title: "The Obsidian Grand Salon",
    subtitle: "Dark Atmospheric Elegance",
    category: "ambiance",
    aspect: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
    description: "Intimate low lighting, custom charcoal velvet banquettes, brushed brass sconces, and hand-chiseled slate walls create a seductive dining sanctuary.",
    depth: 2
  },
  {
    id: "g-3",
    title: "Miyazaki A5 Wagyu Plating",
    subtitle: "Precision & Temperature Mastery",
    category: "kitchen",
    aspect: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    description: "Searing over ultra-dense Japanese Binchotan oak coals creates an intensely caramelized crust with melt-in-mouth marbling.",
    depth: 3
  },
  {
    id: "g-4",
    title: "The Subterranean Vault",
    subtitle: "1,850+ Rare Masterpieces",
    category: "cellar",
    aspect: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
    description: "Temperature and humidity-controlled subterranean catacomb housing vertical collections of DRC, Lafite Rothschild, and ancient Madeira.",
    depth: 1
  },
  {
    id: "g-5",
    title: "The Alchemy Bar & Lounge",
    subtitle: "Bespoke Rare Spirits",
    category: "mixology",
    aspect: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=85",
    description: "Where botanical extractions, barrel aging, and ice carved from pure alpine glacier water meet rare Japanese whiskies.",
    depth: 2
  },
  {
    id: "g-6",
    title: "Petrossian Caviar Symphony",
    subtitle: "Raw Oceanic Purity",
    category: "culinary",
    aspect: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85",
    description: "Cold-pressed sea essence paired with royal sturgeon roe and fresh Meyer lemon pearls.",
    depth: 3
  },
  {
    id: "g-6b",
    title: "Charcoal-Kissed Langoustine",
    subtitle: "Saffron Sea Foam & Truffle",
    category: "culinary",
    aspect: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85",
    description: "Wild Brittany langoustine lightly caramelized over embers, crowned with golden saffron tuile and oceanic seafoam.",
    chefQuote: "Simplicity in fire unlocks nature's most intense sweetness.",
    depth: 2
  },
  {
    id: "g-6c",
    title: "Hokkaido Scallop & Dashi Bloom",
    subtitle: "Japanese Coastal Purity",
    category: "culinary",
    aspect: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85",
    description: "Delicately seared wild scallop in aged bonito kelp broth with white truffle petals.",
    depth: 1
  },
  {
    id: "g-7",
    title: "The Chef's Counter Experience",
    subtitle: "Front-Row Gastronomic Theatre",
    category: "kitchen",
    aspect: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85",
    description: "Eight exclusive seats facing Executive Chef Julian Vance's open hearth kitchen, with personalized course pacing.",
    depth: 2
  },
  {
    id: "g-8",
    title: "Hand-Crafted 24K Gold Confection",
    subtitle: "Architectural Pâtisserie",
    category: "culinary",
    aspect: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85",
    description: "Hand-tempered Valrhona Guanaja sphere adorned with genuine 24-karat edible gold leaves.",
    depth: 1
  },
  {
    id: "g-9",
    title: "Private Sommelier Tasting Salon",
    subtitle: "Intimate Wine Tastings",
    category: "cellar",
    aspect: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=1400&q=85",
    description: "A private enclave for up to 12 guests surrounded by back-lit amber crystal wine displays.",
    depth: 3
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r-1",
    critic: "Inspectors' Verdict",
    publication: "MICHELIN Guide 2026",
    badge: "Three Michelin Stars ★★★",
    rating: 5,
    quote: "Aurelia transcends fine dining into pure poetic alchemy. Chef Julian Vance's mastery of temperature and smoke with rare Japanese & French purveyors establishes a transcendent standard for modern gastronomy.",
    date: "January 2026"
  },
  {
    id: "r-2",
    critic: "Pete Wells & Editorial Board",
    publication: "The New York Times",
    badge: "Critic's Choice • 4 Stars",
    rating: 5,
    quote: "The atmosphere is obsidian velvet and molten gold; the dishes are breathtaking architectural marvels. The A5 Miyazaki Wagyu and Brittany Blue Lobster are dishes you remember for a lifetime.",
    date: "November 2025"
  },
  {
    id: "r-3",
    critic: "Academy of 1,000 Culinary Experts",
    publication: "The World's 50 Best Restaurants",
    badge: "Ranked #4 Worldwide",
    rating: 5,
    quote: "An otherworldly sensory journey. From the sommelier's unmatched cellar allocations to the dramatic table-side culinary revelations, Aurelia is a modern temple of taste.",
    date: "June 2025"
  }
];
