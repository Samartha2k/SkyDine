export const RESTAURANT_INFO = {
  name: "Sky Dine Restaurant",
  location: "Vadodara (Sevasi/Bhayli)",
  address: "6th Floor, Florence Excellence, Vasna-Bhayli Main Road, Beside Decathlon / Near Bright Day School, Bhayli, Vadodara, Gujarat 391410.",
  phone: ["+91 72288 85060", "+91 99099 22299"],
  whatsappNumber: "917228885060", // Used for form submission
  hours: "Monday - Sunday: 11:00 AM – 11:00 PM",
  description: "A premier rooftop dining experience in Vadodara offering a multi-cuisine menu with a focus on North Indian, Chinese, Continental, and Pan-Asian delicacies. Known for its open-air ambiance, panoramic city views, and glass dome seating.",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.076362947137!2d73.1368!3d22.3135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8e4c1b5b5b5%3A0x123456789abcdef!2sSky%20Dine%20Restaurant%2C%20Florence%20Excellence!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
};

export const SOCIAL_LINKS = [
  { name: "Swiggy", url: "https://www.swiggy.com/restaurants/sky-dine-bhayli-vadodara-1066808" },
  { name: "Dineout", url: "https://www.dineout.co.in/vadodara/sky-dine-bhayli-vadodara-1066808" },
  { name: "Magicpin", url: "https://magicpin.in/Vadodara/Bhayli/Restaurant/Sky-Dine/store/3a3728/" },
  { name: "Justdial", url: "https://www.justdial.com/Vadodara/Sky-Dine-Beside-Decathlon-Sewasi/0265PX265-X265-210214124324-P9U9_BZDET" },
  { name: "EazyDiner", url: "https://www.eazydiner.com/vadodara/skydine-bhayli-vadodara-704426/menu" }
];

export const OFFERS = [
  {
    title: "Lunch Flat Discount",
    details: "Flat 15% OFF on Lunch Bill.",
    conditions: "Valid only for Dine-in. Mon-Fri 11:30 AM - 3:00 PM. Not valid on festivals."
  },
  {
    title: "App Exclusive",
    details: "10% Off upto ₹500.",
    conditions: "Applicable when booking/paying via Swiggy Dineout or EazyDiner."
  },
  {
    title: "Pre-Book Offer",
    details: "Guaranteed seating during peak hours.",
    conditions: "Table reservation fee @₹10-20/guest."
  },
  {
    title: "Party Bulk Order",
    details: "Special rates for banquet bookings (Birthday/Anniversary).",
    conditions: "Minimum guest count applies (20+ pax)."
  }
];

export interface Review {
  name: string;
  rating: number;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "The Savoury Stetho",
    rating: 5,
    text: "Ambiance is very good. Sitting arrangements are such that they tries to provide privacy. Food quality and quantity is good. Taste is delicious."
  },
  {
    name: "Rishabh D.",
    rating: 5,
    text: "Great ambience, good place for dinner with friends and family. Food is above expectation. They decorate as well per request with extra charges. We found the rooftop particularly good for the day of a cricket match. Ambiance: 5/5 Food: 5/5 Service: 4/5."
  },
  {
    name: "Shubham P.",
    rating: 5,
    text: "Arranged a get together function and my guests were pleased with the hospitality and ambience out there with tasty and hygienic food. Must recommended place for such occasions as well as occasional open sky buffet dinners."
  },
  {
    name: "Non-Veg Foodie",
    rating: 4,
    text: "The use of sauces and prepration of food was pretty good and the presentation was luxurious. Personally i dont like veg food that much, but if i am spending my money of veg, this place is pretty good worth of money wise."
  },
  {
    name: "Recent Guest",
    rating: 5,
    text: "Exceptional experience from start to finish. The food was not only delicious but also beautifully presented. The restaurant's ambiance was incredible, providing a panoramic view of the surrounding area. It truly felt like a special occasion."
  },
  {
    name: "Party Guest (Birthday Celebration)",
    rating: 5,
    text: "I visited this venue as my cousin brother booked it for their daughter's 3rd birthday celebration. The venue was designed and decorated very nicely. They have an open garden dine-in place as well as a unique 'bunker of mirror' place in the center to dine in. The garden lights and the lights on the trees looked amazing at night. Though it was winter, the glass dome seating is a great option. The staff at the party were so co-operative and quickly followed every task and order. The food was good, especially the Soup and Samosa Chat. You can easily get together around 80-100 people in this open garden venue."
  },
  {
    name: "Sumit Ranjan",
    rating: 5,
    text: "I recently dined at Sky Dine and was pleasantly surprised by their offerings for vegans. The Veg Manchurian was delicious and full of flavor. It's great to see more and more restaurants incorporating plant-based options. The ambiance was lovely and the service was top-notch. As someone who always looks for vegan options, I highly recommend giving Sky Dine a try. Their commitment to catering to different dietary preferences is commendable. I'll definitely be back for more delicious vegan meals."
  },
  {
    name: "Utsav Shah",
    rating: 5,
    text: "Loved the quality of service, ambience, and taste at this place. It is a spot where you can enjoy a variety of delicious dishes from around the world. The menu includes a wide selection of appetizers, entrees, desserts, and drinks. The atmosphere is relaxed and inviting, with a modern and stylish decor. The staff is friendly and attentive. Whether you're looking for a quick bite or a leisurely meal, Sky Dine is the perfect place to go."
  },
  {
    name: "Eva",
    rating: 5,
    text: "This place is lovely to be with your loved one. The atmosphere, food, and the staff are great. It offers a romantic setting that is perfect for couples looking for a quiet dinner away from the city noise. The lighting and the rooftop breeze make the experience very special."
  },
  {
    name: "Manoj",
    rating: 5,
    text: "Tasty food and authentic cuisine. One of the best places for a family dinner in the Sevasi area. The staff is very polite and the rooftop view makes the evening worth it. We particularly enjoyed the freshness of the ingredients and the timely service despite the restaurant being busy."
  }
];

export interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    title: "Soups & Salads",
    items: [
      { name: "Veg Manchow Soup", price: "₹ 220", description: "Spicy soup with crispy noodles." },
      { name: "Tomato Soup", price: "₹ 190", description: "Classic creamy tomato soup with croutons." },
      { name: "Sweet Corn Veg Soup", price: "₹ 210", description: "Mild soup with sweet corn kernels." },
      { name: "Hot & Sour Soup", price: "₹ 220", description: "Spicy and tangy Asian soup." },
      { name: "Lemon Coriander Soup", price: "₹ 220", description: "Vitamin C rich, clear soup." },
      { name: "Green Salad", price: "₹ 120", description: "Fresh sliced garden vegetables." },
    ]
  },
  {
    title: "Starters (Vegetarian)",
    items: [
      { name: "Exotic Crispy Vegetables", price: "₹ 380", description: "Assorted veggies fried crisp in schezwan style (350g)." },
      { name: "Paneer Chilli", price: "₹ 380", description: "Cottage cheese cubes tossed in spicy chilli sauce (350g)." },
      { name: "Veg Manchurian (Dry)", price: "₹ 310", description: "Vegetable dumplings in Chinese sauce (200g)." },
      { name: "Cheese Corn Balls", price: "₹ 320", description: "Melt-in-mouth cheesy balls with corn." },
      { name: "Hara Bhara Kebab", price: "₹ 300", description: "Spinach and green pea patties." },
      { name: "Veg Seekh Kebab", price: "₹ 310", description: "Minced vegetables skewered and grilled." },
      { name: "Paneer Tikka", price: "₹ 350", description: "Marinated paneer grilled in tandoor." },
      { name: "Crispy Corn", price: "₹ 250", description: "Fried corn kernels with spices." },
      { name: "French Fries", price: "₹ 250", description: "Classic salted fries." },
      { name: "Masala Papad", price: "₹ 95", description: "Roasted papad topped with spicy onion-tomato mix." },
    ]
  },
  {
    title: "Continental & Pan-Asian Specials",
    items: [
      { name: "Sushi Platter", price: "₹ 450*", description: "Fresh vegetarian sushi (Chef's Special)." },
      { name: "Mexican Bowl", price: "₹ 380*", description: "Rice, beans, salsa, and nachos bowl." },
      { name: "Pasta Alfredo", price: "₹ 360*", description: "Penne pasta in rich white cream sauce." },
      { name: "Sizzler (Veg)", price: "₹ 420*", description: "Assorted veggies and patty on hot plate." },
      { name: "Lasagna", price: "₹ 390*", description: "Layered pasta with cheese and tomato sauce." },
    ]
  },
  {
    title: "Main Course (North Indian)",
    items: [
      { name: "KDK's Special Paneer", price: "₹ 590", description: "Chef's special rich gravy preparation (600g)." },
      { name: "Paneer Tikka Masala", price: "₹ 410", description: "Grilled paneer in spicy tomato gravy (350g)." },
      { name: "Paneer Bhurji", price: "₹ 360", description: "Scrambled cottage cheese with spices (300g)." },
      { name: "Paneer Lababdar", price: "₹ 400", description: "Soft paneer in rich creamy onion-tomato gravy." },
      { name: "Matar Paneer", price: "₹ 380", description: "Peas and paneer in classic curry." },
      { name: "Veg Kofta", price: "₹ 350", description: "Vegetable dumplings in curry sauce." },
      { name: "Dal Fry", price: "₹ 240", description: "Yellow lentils tempered with spices." },
      { name: "Dal Tadka", price: "₹ 260", description: "Yellow lentils with garlic & cumin tempering." },
      { name: "Veg Jaipuri", price: "₹ 340", description: "Mixed vegetables with papad in spicy gravy." },
      { name: "Veg Kolhapuri", price: "₹ 340", description: "Spicy mixed vegetable curry." },
      { name: "Dum Aloo", price: "₹ 320", description: "Stuffed potatoes in rich gravy." },
    ]
  },
  {
    title: "Rice & Biryani",
    items: [
      { name: "Veg Soya Chaap Biryani", price: "₹ 520", description: "Fragrant biryani with soya chaap chunks." },
      { name: "Veg Hyderabadi Biryani", price: "₹ 380", description: "Spicy biryani in Hyderabadi style." },
      { name: "Jeera Rice", price: "₹ 180", description: "Cumin flavored basmati rice." },
      { name: "Steam Rice", price: "₹ 150", description: "Plain steamed basmati rice." },
      { name: "Veg Pulao", price: "₹ 220", description: "Mild rice with vegetables." },
    ]
  },
  {
    title: "Breads (Tandoor)",
    items: [
      { name: "Cheese Naan", price: "₹ 215", description: "Naan stuffed with cheese." },
      { name: "Garlic Naan", price: "₹ 140", description: "Naan topped with chopped garlic." },
      { name: "Butter Naan", price: "₹ 90", description: "Classic naan with butter." },
      { name: "Plain Naan", price: "₹ 80", description: "Tandoori flatbread." },
      { name: "Tandoori Roti", price: "₹ 55", description: "Whole wheat bread from clay oven." },
      { name: "Butter Roti", price: "₹ 65", description: "Whole wheat bread with butter." },
      { name: "Missi Roti", price: "₹ 75", description: "Spiced gram flour bread." },
    ]
  },
  {
    title: "Shakes & Beverages",
    items: [
      { name: "Bubblegum Boom Shake", price: "₹ 250", description: "Strawberry with bubblegum syrup & ice cream." },
      { name: "Chocolate Oreo Shake", price: "₹ 250", description: "Oreo cookies with chocolate syrup & milk." },
      { name: "Mint Oreo Crumble Shake", price: "₹ 250", description: "Oreo cookies with mint syrup." },
      { name: "Blueberry Choco Shake", price: "₹ 250", description: "Blueberries with chocolate syrup." },
      { name: "Sweet Lassi", price: "₹ 120", description: "Traditional yogurt drink." },
      { name: "Fresh Lime Soda", price: "₹ 180", description: "Refreshing lemon soda." },
      { name: "Buttermilk", price: "₹ 60", description: "Spiced chaotic." },
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Angoori Gulab Jamun", price: "₹ 200", description: "6 pieces of small gulab jamuns." },
      { name: "Sizzling Brownie", price: "₹ 289", description: "Brownie with ice cream on hot sizzler plate." },
      { name: "Mango Ice Cream", price: "₹ 130", description: "2 Scoops (160g)." },
      { name: "Walnut Halwa", price: "₹ 269", description: "Rich halwa made with walnuts." },
      { name: "Dry Fruit Moong Dal Halwa", price: "₹ 229", description: "Classic lentil dessert with nuts." },
      { name: "Churros", price: "₹ 240*", description: "Fried dough pastry with chocolate sauce." },
    ]
  }
];