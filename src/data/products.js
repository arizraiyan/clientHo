/**
 * FOOD BASKET BD — PRODUCT DATA
 * 
 * NOTE FOR BUSINESS OWNER:
 * This file contains the exact two products offered by Food Basket BD.
 * All prices, weights, variants, and descriptions below are sample values and 
 * can be easily updated directly in this array.
 */

export const PRODUCTS = [
  {
    id: "fb-001",
    code: "FB 001",
    name: "Nut Chocolate Bar",
    bengaliName: "নাট চকোলেট বার",
    tagline: "Rich Cocoa & Whole Roasted Nuts",
    shortDescription: "মজাদার চকোলেটের সঙ্গে প্রিমিয়াম বাদামের দারুণ মিশ্রণ। প্রতিটি বারে উপভোগ করুন বাদামের ক্রাঞ্চি স্বাদ এবং রিচ চকোলেটের অসাধারণ কম্বিনেশন।",
    fullDescription: "আমাদের সিগনেচার নাট চকোলেট বার তৈরি হয় প্রিমিয়াম কোকো ও নিখুঁতভাবে রোস্টেড বাদামের দারুণ সমন্বয়ে। প্রতিটি কামড়ে পাবেন ক্রাঞ্চি আলমন্ড ও কাজু বাদামের নিখুঁত ব্লেন্ড, যা আপনার প্রতিদিনের চকলেট খাওয়ার অভিজ্ঞতাকে করে তুলবে অন্যরকম স্পেশাল। কোনো ক্ষতিকর প্রিজারভেটিভ ছাড়া ১০০% হোমমেড ভালোবাসায় তৈরি।",
    image: "/images/nut-chocolate-bar.jpg",
    badge: "Most Loved",
    isAvailable: true,
    ingredients: [
      "প্রিমিয়াম ডার্ক ও মিল্ক কোকো",
      "রোস্টেড ক্যালিফোর্নিয়া কাঠবাদাম (Almonds)",
      "বাছাইকৃত কাজুবাদাম (Cashews)",
      "হ্যাজেলনাট ও প্রাকৃতিক ব্রাউন সুগার",
      "বিশুদ্ধ মাখন (No Vegetable Fat)"
    ],
    highlights: [
      "১০০% হোমমেড ও সতেজ উপাদান",
      "ক্রাঞ্চি বাদামের ভরপুর স্বাদ",
      "প্রাকৃতিক উপায়ে প্রক্রিয়াজাত",
      "সংরক্ষণযোগ্যতা: রুম টেম্পারেচারে ৩ মাস"
    ],
    // Sample editable weight tiers and pricing in BDT (৳)
    weightOptions: [
      { weight: "100g", price: 160, isDefault: false },
      { weight: "250g", price: 380, isDefault: true, tag: "Standard Pack" },
      { weight: "500g", price: 720, isDefault: false, tag: "Family Pack" },
      { weight: "1kg", price: 1380, isDefault: false, tag: "Best Value" },
    ],
    // Sample editable product variants
    variants: [
      {
        code: "FB 001-A",
        name: "Almond Chocolate",
        bengaliName: "আলমন্ড চকোলেট",
        description: "রোস্টেড কাঠবাদামের ক্রাঞ্চি বাইট সহ রিচ চকোলেট।"
      },
      {
        code: "FB 001-B",
        name: "Cashew Chocolate",
        bengaliName: "কাজুবাদাম চকোলেট",
        description: "ঘিয়ে রোস্ট করা কাজুবাদামের ক্রিমি ও স্মুথ কম্বিনেশন।"
      },
      {
        code: "FB 001-C",
        name: "Mixed Nut Chocolate",
        bengaliName: "মিক্সড নাট চকোলেট",
        description: "আলমন্ড, কাজু ও হ্যাজেলনাটের ট্রিপল নাট ব্লেন্ড।"
      }
    ]
  },
  {
    id: "fb-002",
    code: "FB 002",
    name: "Mini Honey Nut",
    bengaliName: "মিনি হানি নাট",
    tagline: "Golden Pure Honey & Nut Clusters",
    shortDescription: "ছোট ছোট আকর্ষণীয় চকোলেট বাইটের সঙ্গে বাদামের সুন্দর সমন্বয়। প্রতিটি পিসে উপভোগ করুন মিষ্টি স্বাদ এবং বাদামের মজাদার টেক্সচার।",
    fullDescription: "মিনি হানি নাট হলো প্রাকৃতিক খাঁটি মধুর মিষ্টি ছোঁয়া এবং মুচমুচে রোস্টেড বাদামের দারুণ এক মেলবন্ধন। ডার্ক চকোলেট ও প্রিমিয়াম বাদাম ক্লাস্টারের সাথে খাঁটি মধুর হালকা গ্লেজ একে দিয়েছে রাজকীয় স্বাদ। ছোট ছোট বাইট-সাইজ পিস হওয়ায় এটি যেকোনো আড্ডায় বা উপহার হিসেবে দারুণ উপভোগ্য।",
    image: "/images/mini-honey-nut.jpg",
    badge: "Sweet Delight",
    isAvailable: true,
    ingredients: [
      "প্রাকৃতিক খাঁটি মধু (Pure Raw Honey)",
      "রোস্টেড কাজুবাদাম ও কাঠবাদাম",
      "পেস্তাবাদাম ও ওয়ালনাট ক্লাস্টার",
      "আর্টিসানাল ডার্ক কোকো লেয়ার",
      "হিমালয়ান পিংক সল্ট"
    ],
    highlights: [
      "প্রাকৃতিক মধুর স্বাস্থ্যকর মিষ্টি ভাব",
      "সহজে পরিবেশনযোগ্য আকর্ষণীয় বাইট সাইজ",
      "বাচ্চা ও বড়দের প্রিয় পুষ্টিকর স্ন্যাক্স",
      "সংরক্ষণযোগ্যতা: রুম টেম্পারেচারে ৩ মাস"
    ],
    // Sample editable weight tiers and pricing in BDT (৳)
    weightOptions: [
      { weight: "100g", price: 190, isDefault: false },
      { weight: "250g", price: 450, isDefault: true, tag: "Popular Choice" },
      { weight: "500g", price: 850, isDefault: false, tag: "Sweet Gift Pack" },
      { weight: "1kg", price: 1600, isDefault: false, tag: "Celebration Pack" },
    ],
    // Sample editable product variants
    variants: [
      {
        code: "FB 002-A",
        name: "Almond Mini",
        bengaliName: "আলমন্ড মিনি",
        description: "খাঁটি মধুতে জাড়ানো রোস্টেড কাঠবাদামের কিউট চকোলেট বাইট।"
      },
      {
        code: "FB 002-B",
        name: "Mixed Nut Mini",
        bengaliName: "মিক্সড নাট মিনি",
        description: "কাঠবাদাম, কাজু ও পেস্তার যৌথ ক্লাস্টারে মধুর অনন্য ছোঁয়া।"
      }
    ]
  }
];

/**
 * Helper to find a product by code or ID
 */
export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id || p.code === id);
}

/**
 * Why Choose Us features data
 */
export const WHY_CHOOSE_US_DATA = [
  {
    id: "feature-1",
    title: "Premium Ingredients",
    bengaliTitle: "প্রিমিয়াম উপাদান",
    description: "বাছাই করা উপাদান ও বাদামের সমন্বয়ে তৈরি আমাদের বিশেষ প্রোডাক্ট। সেরা কোকো ও তাজা বাদামের গ্যারান্টি।",
    iconName: "Leaf"
  },
  {
    id: "feature-2",
    title: "Delicious Taste",
    bengaliTitle: "অসাধারণ স্বাদ",
    description: "চকোলেট ও বাদামের দারুণ স্বাদের অনন্য মেলবন্ধন, যা আপনার প্রতি কামড়ে তৈরি করবে অতুলনীয় তৃপ্তি।",
    iconName: "Heart"
  },
  {
    id: "feature-3",
    title: "Quality & Care",
    bengaliTitle: "মান ও ভালোবাসা",
    description: "প্রতিটি প্রোডাক্ট তৈরিতে যত্ন এবং মান বজায় রাখার প্রতি সর্বোচ্চ গুরুত্ব দেওয়া হয় সম্পূর্ণ ঘরোয়া পরিবেশে।",
    iconName: "ShieldCheck"
  },
  {
    id: "feature-4",
    title: "Easy Ordering",
    bengaliTitle: "সহজ অর্ডারিং",
    description: "কোনো জটিলতা ছাড়াই সরাসরি WhatsApp-এর মাধ্যমে মুহূর্তেই আপনার পছন্দমতো অর্ডার কনফার্ম করার সুবিধা।",
    iconName: "ShoppingBag"
  }
];

/**
 * How to order steps data
 */
export const HOW_TO_ORDER_STEPS = [
  {
    step: "০১",
    title: "পছন্দের প্রোডাক্ট বেছে নিন",
    englishTitle: "Choose Your Product",
    description: "আমাদের নাট চকোলেট বার কিংবা মিনি হানি নাট থেকে আপনার পছন্দের ভ্যারিয়েন্ট ও ওজন নির্বাচন করুন।"
  },
  {
    step: "০২",
    title: "অর্ডার ফর্মে তথ্য পূরণ করুন",
    englishTitle: "Fill Order Form",
    description: "আপনার নাম, সচল মোবাইল নম্বর ও সঠিক ডেলিভারি ঠিকানা দিয়ে অর্ডার ফর্মটি পূরণ করুন।"
  },
  {
    step: "০৩",
    title: "WhatsApp-এ অর্ডার নিশ্চিত করুন",
    englishTitle: "Confirm on WhatsApp",
    description: "এক ক্লিকেই WhatsApp-এ বিস্তারিত অর্ডার মেসেজটি পাঠিয়ে আমাদের প্রতিনিধি থেকে ডেলিভারি নিশ্চিত করুন।"
  }
];

/**
 * Customer Testimonials (Clearly marked DEMO REVIEWS)
 */
export const TESTIMONIALS = [
  {
    id: "test-1",
    customerName: "তানভীর আহমেদ",
    location: "ধানমন্ডি, ঢাকা",
    productBought: "Nut Chocolate Bar (500g)",
    rating: 5,
    date: "অক্টোবর ২০২৬",
    review: "Food Basket BD-এর নাট চকোলেট বার সত্যি অসাধারণ! বাদামের ক্রাঞ্চিনেস আর চকোলেটের রিচ টেস্ট মুখে দিলেই অন্যরকম ফিল দেয়। প্যাকিংও খুব পরিপাটি ছিল।",
    isDemo: true
  },
  {
    id: "test-2",
    customerName: "নুসরাত জাহান",
    location: "উত্তরা, ঢাকা",
    productBought: "Mini Honey Nut (250g)",
    rating: 5,
    date: "নভেম্বর ২০২৬",
    review: "মিনি হানি নাট বাচ্চাদের ভীষণ পছন্দ হয়েছে। মধুর ন্যাচারাল সুইটনেস আর বাদামের টেস্টটা পারফেক্ট। WhatsApp-এ অর্ডার দেওয়ার পরপরই রেসপন্স পেয়েছিলাম।",
    isDemo: true
  },
  {
    id: "test-3",
    customerName: "মাহমুদুর রহমান",
    location: "গুলশান, ঢাকা",
    productBought: "Mixed Nut Chocolate",
    rating: 5,
    date: "নভেম্বর ২০২৬",
    review: "হোমমেড চকলেটের কোয়ালিটি নিয়ে একটু ভাবছিলাম, কিন্তু হাতে পাওয়ার পর পুরোপুরি মুগ্ধ। বাজারের সাধারণ চকলেটের চেয়ে অনেক বেশি প্রিমিয়াম ও ফ্রেশ!",
    isDemo: true
  }
];
