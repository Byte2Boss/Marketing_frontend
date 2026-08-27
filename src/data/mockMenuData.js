export const RESTAURANT_THEMES = [
  {
    id: 'cafe',
    name: 'Artisan Cafe & Roastery',
    concept: 'Specialty Coffee, Sourdough & Brunch',
    accentColor: '#10b981',
    vibe: 'Cozy Morning Glow',
  },
  {
    id: 'steakhouse',
    name: 'Prime 88 Steakhouse',
    concept: 'Dry-Aged Cuts, Fine Wine & Truffles',
    accentColor: '#ef4444',
    vibe: 'Fine Dining Luxury',
  },
  {
    id: 'brewery',
    name: 'Hops & Barrel Craft House',
    concept: 'Microbrewery, Smash Burgers & Wings',
    accentColor: '#f59e0b',
    vibe: 'Casual Social Taproom',
  },
  {
    id: 'asian',
    name: 'Umami Street Kitchen',
    concept: 'Artisan Ramen, Bao Buns & Dim Sum',
    accentColor: '#a855f7',
    vibe: 'Modern Asian Fusion',
  },
];

export const MOCK_MENUS = {
  cafe: {
    title: 'Morning Bloom Cafe',
    tagline: 'Table #04 • Digital Dine-In',
    categories: ['All', 'Espresso & Brews', 'Brunch & Bakery', 'Artisan Toasts'],
    items: [
      {
        name: 'Single Origin Flat White',
        price: 240,
        desc: 'Velvety micro-foam with Ethiopian heirloom beans.',
        category: 'Espresso & Brews',
        upsell: {
          message: '⭐ Sommelier AI: Fresh butter croissants just came out of the oven!',
          suggestedItem: { name: 'Almond Flaked Croissant', price: 180 },
          text: 'Pairs wonderfully with our warm, freshly baked Butter Croissant (+ ₹180)',
        },
      },
      {
        name: 'Avocado Sourdough Tartine',
        price: 380,
        desc: 'Hass avocado, pickled shallots, dukkah crumble.',
        category: 'Artisan Toasts',
        upsell: {
          message: '⭐ Boost your brunch with a fresh Cold Brew Tonic!',
          suggestedItem: { name: 'Cold Brew Citrus Tonic', price: 220 },
          text: 'Add a Cold Brew Iced Tonic (+ ₹220) for a refreshing morning kick.',
        },
      },
      {
        name: 'Truffle Brioche Scramble',
        price: 420,
        desc: 'Organic pasture eggs, black truffle paste on brioche.',
        category: 'Brunch & Bakery',
        upsell: {
          message: '⭐ Complete with an artisanal espresso pairing.',
          suggestedItem: { name: 'Double Espresso Macchiato', price: 190 },
          text: 'Upgrade to a Double Espresso Macchiato (+ ₹190) for the ultimate pairing.',
        },
      },
      {
        name: 'Cardamom Pistachio Babka',
        price: 260,
        desc: 'Slow-proved twisted sourdough loaf with pistachio cream.',
        category: 'Brunch & Bakery',
      },
    ],
  },
  steakhouse: {
    title: 'Prime 88 Steakhouse',
    tagline: 'Table #04 • Luxury Dining',
    categories: ['All', 'Prime Cuts', 'Starters & Sides', 'Reserve Cellar'],
    items: [
      {
        name: '45-Day Dry-Aged Ribeye (14oz)',
        price: 1850,
        desc: 'USDA Prime, bone marrow herb butter, smoked salt.',
        category: 'Prime Cuts',
        upsell: {
          message: '🍷 Master Sommelier: This cut pairs exceptionally with our 2019 Reserve Cabernet.',
          suggestedItem: { name: 'Reserve Cabernet Sauvignon (Glass)', price: 650 },
          text: 'Would you like to pair with a glass of Reserve Cabernet (+ ₹650) and Truffle Butter (+ ₹150)?',
        },
      },
      {
        name: 'Pan-Seared Chilean Sea Bass',
        price: 1450,
        desc: 'Saffron beurre blanc, glazed baby fennel.',
        category: 'Prime Cuts',
        upsell: {
          message: '🍷 Pairing Recommendation: Chilled French Chablis balances the rich fish.',
          suggestedItem: { name: 'French Chablis Premier Cru', price: 550 },
          text: 'Best paired with a chilled glass of French Chablis Premier Cru (+ ₹550).',
        },
      },
      {
        name: 'Black Truffle Risotto',
        price: 850,
        desc: 'Acquerello carnaroli, 24-month Parmigiano-Reggiano.',
        category: 'Starters & Sides',
        upsell: {
          message: '⭐ Chef Selection: Add Crispy Parmesan Truffle Fries for the table!',
          suggestedItem: { name: 'Crispy Parmesan Truffle Fries', price: 320 },
          text: 'Complete your table with Crispy Parmesan Truffle Fries (+ ₹320).',
        },
      },
      {
        name: 'Valrhona Chocolate Lava Cake',
        price: 450,
        desc: 'Warm molten 70% dark chocolate, Madagascar vanilla bean gelato.',
        category: 'Starters & Sides',
      },
    ],
  },
  brewery: {
    title: 'Hops & Barrel Craft House',
    tagline: 'Table #04 • Taproom Floor',
    categories: ['All', 'Draft Beers', 'Craft Burgers', 'Shareable Bites'],
    items: [
      {
        name: 'Hazy Mosaic Double IPA (Pint)',
        price: 420,
        desc: 'Tropical aromas, citrus-forward, smooth hazy finish.',
        category: 'Draft Beers',
        upsell: {
          message: '🍔 Kitchen Recommendation: Perfectly balances our Wagyu Smash Burger!',
          suggestedItem: { name: 'Double Bacon Cheddar Smash Burger', price: 480 },
          text: 'Pairs perfectly with our Bacon Smoked Cheddar Smash Burger (+ ₹480)!',
        },
      },
      {
        name: 'Double Wagyu Smash Burger',
        price: 520,
        desc: 'Two Wagyu patties, secret house sauce, toasted potato roll.',
        category: 'Craft Burgers',
        upsell: {
          message: '🍟 Upgrade your burger with Loaded Garlic Butter Fries & Pint Bundle!',
          suggestedItem: { name: 'Loaded Garlic Parmesan Fries', price: 260 },
          text: 'Upgrade to Loaded Garlic Butter Fries (+ ₹260).',
        },
      },
      {
        name: 'Smoked Crispy Buffalo Wings',
        price: 390,
        desc: 'Hickory-smoked, tossed in habanero honey glaze.',
        category: 'Shareable Bites',
        upsell: {
          message: '🍺 Add a 4-Beer Taproom Tasting Flight for your table!',
          suggestedItem: { name: '4-Tap Tasting Flight', price: 450 },
          text: 'Add a Flight of 4 Taproom Brews (+ ₹450) for tasting.',
        },
      },
      {
        name: 'Bavarian Pretzel Bites',
        price: 280,
        desc: 'Warm sea-salt pretzel bites with warm beer cheese dip.',
        category: 'Shareable Bites',
      },
    ],
  },
  asian: {
    title: 'Umami Street Kitchen',
    tagline: 'Table #04 • Asian Fusion',
    categories: ['All', 'Ramen & Noodles', 'Bao & Dim Sum', 'Teas & Drinks'],
    items: [
      {
        name: '24-Hour Tonkotsu Ramen',
        price: 580,
        desc: 'Rich pork bone broth, chashu belly, ajitsuke tamago egg, black garlic oil.',
        category: 'Ramen & Noodles',
        upsell: {
          message: '🥢 Popular Pairing: Guests usually add Pan-Fried Kurobuta Pork Gyoza!',
          suggestedItem: { name: 'Pan-Fried Pork Gyoza (4 pcs)', price: 240 },
          text: 'Add Pan-Fried Kurobuta Pork Gyoza (4 pcs) (+ ₹240).',
        },
      },
      {
        name: 'Sticky Pork Belly Bao (2 pcs)',
        price: 380,
        desc: 'Braised pork belly, hoisin glaze, crushed peanuts, pickled cucumber.',
        category: 'Bao & Dim Sum',
        upsell: {
          message: '🧋 Pair with our signature Iced Lychee Jasmine Green Tea.',
          suggestedItem: { name: 'Iced Lychee Jasmine Tea', price: 180 },
          text: 'Pair with an Iced Lychee Green Tea (+ ₹180).',
        },
      },
      {
        name: 'Crispy Duck Spring Rolls',
        price: 340,
        desc: 'Confit duck, shredded scallions, sweet plum dipping sauce.',
        category: 'Bao & Dim Sum',
      },
      {
        name: 'Matcha Green Tea Tiramisu',
        price: 320,
        desc: 'Uji matcha infused sponge, light mascarpone cream.',
        category: 'Teas & Drinks',
      },
    ],
  },
};
