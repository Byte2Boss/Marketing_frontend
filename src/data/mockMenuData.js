export const RESTAURANT_THEMES = [
  { id: 'cafe', name: 'Artisan Cafe & Bakery', tag: 'Specialty Coffee & Brunch', icon: 'Coffee' },
  { id: 'steakhouse', name: 'Prime 88 Steakhouse', tag: 'Fine Dining & Reserve Wine', icon: 'Flame' },
  { id: 'brewery', name: 'Hops & Barrel Brewery', tag: 'Craft Beer & Gastropub', icon: 'Beer' },
  { id: 'asian', name: 'Umami Street Kitchen', tag: 'Ramen & Asian Street Food', icon: 'Soup' },
];

export const MOCK_MENUS = {
  cafe: {
    banner: '☕ Artisan Coffee, Fresh Sourdough & Brunch Bowls',
    categories: ['Specialty Coffee', 'Signature Brunch', 'Fresh Pastries'],
    items: [
      {
        id: 'c1',
        name: 'Oat Milk Flat White',
        category: 'Specialty Coffee',
        price: 5.50,
        description: 'Single-origin Ethiopian espresso with micro-foamed organic oat milk and caramel notes.',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Pairs wonderfully with our warm, freshly baked Butter Croissant (+ $4.00)',
          suggestedItem: { name: 'Fresh Butter Croissant', price: 4.00 }
        }
      },
      {
        id: 'c2',
        name: 'Truffle Avocado Sourdough',
        category: 'Signature Brunch',
        price: 14.50,
        description: 'Smashed Hass avocado, poached organic egg, shaved black truffle, and pink peppercorns on artisan sourdough.',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Add a Cold Brew Iced Tonic (+ $5.00) for a refreshing morning kick.',
          suggestedItem: { name: 'Cold Brew Citrus Tonic', price: 5.00 }
        }
      },
      {
        id: 'c3',
        name: 'Almond Cardamom Swirl',
        category: 'Fresh Pastries',
        price: 4.80,
        description: 'Flaky laminated pastry rolled with Sicilian almond paste and freshly ground cardamom.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Upgrade to a Double Espresso Macchiato (+ $3.80) for the ultimate pairing.',
          suggestedItem: { name: 'Double Macchiato', price: 3.80 }
        }
      }
    ]
  },
  steakhouse: {
    banner: '🥩 Dry-Aged Steaks, Seafood & Cellar Reserves',
    categories: ['Prime Steaks', 'Cellar Reserves', 'Decadent Sides'],
    items: [
      {
        id: 's1',
        name: '45-Day Dry-Aged Ribeye (16oz)',
        category: 'Prime Steaks',
        price: 68.00,
        description: 'USDA Prime bone-in ribeye, seared over white oak embers with rosemary sea salt butter.',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 Sommelier AI Pairing',
          text: 'Would you like to pair with a glass of 2019 Napa Valley Cabernet Sauvignon (+ $18.00) and Black Truffle Butter (+ $4.50)?',
          suggestedItem: { name: '2019 Napa Cabernet & Truffle Butter', price: 22.50 }
        }
      },
      {
        id: 's2',
        name: 'Pan-Seared Chilean Sea Bass',
        category: 'Prime Steaks',
        price: 52.00,
        description: 'Wild-caught sea bass over saffron risotto, braised baby fennel, and citrus beurre blanc.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 Sommelier AI Pairing',
          text: 'Best paired with a chilled glass of French Chablis Premier Cru (+ $16.00).',
          suggestedItem: { name: 'Chablis Premier Cru Glass', price: 16.00 }
        }
      },
      {
        id: 's3',
        name: 'Lobster Mac & Gruyère',
        category: 'Decadent Sides',
        price: 24.00,
        description: 'Fresh Maine lobster claw meat folded into cavatappi pasta with aged Gruyère and smoked gouda.',
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Complete your table with Crispy Parmesan Truffle Fries (+ $12.00).',
          suggestedItem: { name: 'Truffle Parmesan Fries', price: 12.00 }
        }
      }
    ]
  },
  brewery: {
    banner: '🍺 House-Brewed IPAs, Smash Burgers & Small Bites',
    categories: ['Craft Brews', 'Gastropub Mains', 'Shareables'],
    items: [
      {
        id: 'b1',
        name: 'Double Dry-Hopped Hazy IPA (Pint)',
        category: 'Craft Brews',
        price: 8.50,
        description: 'Juicy tropical IPA dry-hopped with Citra, Mosaic, and Galaxy hops. 6.8% ABV.',
        image: 'https://images.unsplash.com/photo-1608270190977-f273295c2560?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Pairs perfectly with our Bacon Smoked Cheddar Smash Burger (+ $16.50)!',
          suggestedItem: { name: 'Bacon Cheddar Smash Burger', price: 16.50 }
        }
      },
      {
        id: 'b2',
        name: 'The Wagyu Smash Burger',
        category: 'Gastropub Mains',
        price: 17.00,
        description: 'Double 100% Wagyu beef patties, sharp American cheddar, caramelized onions, and house secret sauce on a brioche bun.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Upgrade to Loaded Garlic Butter Fries & Pint Bundle (+ $9.00).',
          suggestedItem: { name: 'Garlic Fries & Mini Pint Bundle', price: 9.00 }
        }
      },
      {
        id: 'b3',
        name: 'Smoked Jalapeño Poppers',
        category: 'Shareables',
        price: 11.50,
        description: 'Fresh bacon-wrapped jalapeños stuffed with cream cheese and sharp cheddar, served with ranch dipping sauce.',
        image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Add a Flight of 4 Taproom Brews (+ $12.00) for tasting.',
          suggestedItem: { name: '4-Beer Tasting Flight', price: 12.00 }
        }
      }
    ]
  },
  asian: {
    banner: '🍜 Hand-Pulled Ramen, Steamed Bao & Street Bites',
    categories: ['Signature Ramen', 'Steamed Bao Buns', 'Street Bites'],
    items: [
      {
        id: 'a1',
        name: 'Spicy Black Garlic Tonkotsu Ramen',
        category: 'Signature Ramen',
        price: 16.80,
        description: '24-hour pork bone broth, charred chashu pork belly, ajitsuke tamago egg, black garlic oil, and handmade noodles.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Add Pan-Fried Kurobuta Pork Gyoza (4 pcs) (+ $6.50) & Extra Chashu (+ $3.50).',
          suggestedItem: { name: 'Pork Gyoza & Extra Chashu', price: 10.00 }
        }
      },
      {
        id: 'a2',
        name: 'Crispy Pork Belly Bao (2 pcs)',
        category: 'Steamed Bao Buns',
        price: 12.00,
        description: 'Fluffy steamed lotus buns, hoisin glazed crispy pork belly, pickled cucumbers, crushed roasted peanuts, and scallions.',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=60',
        upsell: {
          title: '🤖 AI Pairing Recommendation',
          text: 'Pair with an Iced Lychee Green Tea (+ $4.50).',
          suggestedItem: { name: 'Iced Lychee Jasmine Tea', price: 4.50 }
        }
      }
    ]
  }
};
