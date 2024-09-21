const CategoriesData = [
  {
    id: 1,
    name: "Laptop",
    description: "MacBook Air Intel Core i5 processor",
    fullDescription: "MacBook Air Intel Core i5 processor , 5th Gen - ( 8 GB / 128 GB SSD / Mac High Sierra OS , 13.3 inch, Silver )",
    priceInRupees: 9000, // Original price in INR
    discountPercent: 10, // 10% discount
    finalPrice: 9000 - (9000 * 0.10), // Final price after discount
    image: "https://p.rmjo.in/moodShot/r60nycmh-1024x512.webp",
    inStock: true,
  },
  {
    id: 2,
    name: "Fridge",
    description: "Single Door Fridge (210 Litre)",
    fullDescription: "Single Door Fridge (210 Litre) | Capacity/Size : 201-210 L | Whirlpool/Haier/Samsung",
    priceInRupees: 6000, 
    discountPercent: 15, 
    finalPrice: 6000 - (6000 * 0.15), 
    image: "https://p.rmjo.in/moodShot/x3hc5mp7-1024x512.webp",
    inStock: false, // Out of stock
  },
  {
    id: 3,
    name: "Water Purifier",
    description: "Livpure Envy Alkaline Water Purifier",
    fullDescription: "Livpure Envy Alkaline Water Purifier | Capacity/Size : 8L | Purification Capacity: Upto 15 L/Hr | Duty Cycle (Max): Upto 75 L/Day",
    priceInRupees: 4500, 
    discountPercent: 20, 
    finalPrice: 4500 - (4500 * 0.20), 
    image: "https://p.rmjo.in/productSquare/r257mxpc-500x500.webp",
    inStock: true,
  },
  {
    id: 4,
    name: "Freezer",
    description: "Deep Freezer (100L)",
    fullDescription: "Deep Freezer (100L) | Capacity/Size : 100 L | Brand : Haier | Manual defrosting | Effective for perishable foods",
    priceInRupees: 11000, 
    discountPercent: 5, 
    finalPrice: 11000 - (11000 * 0.05), 
    image: "https://p.rmjo.in/moodShot/0di4miwp-1024x512.webp",
    inStock: true,
  },
  {
    id: 5,
    name: "Microwave",
    description: "Convection Microwave 20L",
    fullDescription: "Convection Microwave 20L | Capacity/Size : 20L | Brand: Haier/Croma or Equivalent | Used for Baking, Grilling, Heating & Cooking",
    priceInRupees: 5000, 
    discountPercent: 25, 
    finalPrice: 5000 - (5000 * 0.25), 
    image: "https://p.rmjo.in/moodShot/3065ehc7-1024x512.webp",
    inStock: false,
  },
  {
    id: 6,
    name: "Induction",
    description: "Induction Cooktop",
    fullDescription: "Induction Cooktop | Capacity/Size : 1900W | 6-8 preset cooking menus | Energy saving, quick & efficient heating",
    priceInRupees: 5000, 
    discountPercent: 12, 
    finalPrice: 5000 - (5000 * 0.12), 
    image: "https://p.rmjo.in/moodShot/hd066j7y-1024x512.webp",
    inStock: true,
  },
  {
    id: 7,
    name: "Television",
    description: "Smart TVs with 4K resolution and HDR support.",
    fullDescription: "Smart TVs offering vibrant 4K displays, HDR support, and built-in streaming services.",
    priceInRupees: 7500, 
    discountPercent: 18, 
    finalPrice: 7500 - (7500 * 0.18), 
    image: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: false,
  },
  {
    id: 8,
    name: "Washing Machine",
    description: "Semi Automatic Washing Machine",
    fullDescription: "Semi Automatic Washing Machine | Capacity/Size : 6 Kg | Haier/Godrej/Samsung",
    priceInRupees: 12000, 
    discountPercent: 22, 
    finalPrice: 12000 - (12000 * 0.22), 
    image: "https://p.rmjo.in/moodShot/av5p7vsn-1024x512.webp",
    inStock: true,
  },
  {
    id: 9,
    name: "Air Conditioner",
    description: "1.5 Ton 3 Star Convertible Inverter Split AC",
    fullDescription: "1.5 Ton 3 Star Convertible Inverter Split AC | Capacity/Size : 1.5 Ton | onvertible 5in1 Modes",
    priceInRupees: 15100, 
    discountPercent: 22, 
    finalPrice: 15100 - (15100 * 0.22), 
    image: "https://p.rmjo.in/moodShot/ni63bq7z-1024x512.webp",
    inStock: true,
  },
  {
    id: 10,
    name: "Dyson Air Purifier (TP10)",
    description: "Dyson Air Purifier (TP10)",
    fullDescription: "Room Area 300-400 SQFT | Senses and reports, automatically | Whole-room purification",
    priceInRupees: 18000, 
    discountPercent: 30, 
    finalPrice: 18000 - (18000 * 0.30), 
    image: "https://p.rmjo.in/moodShot/khetl0wz-1024x512.webp",
    inStock: true,
  },
  {
    id: 11,
    name: "Air Cooler Large",
    description: "Air Cooler Large",
    fullDescription: "Capacity/Size : 65-70 L | Cooling Area: 3000 ft3 | Brand: Symphony/Bajaj/Hindware",
    priceInRupees: 2000, 
    discountPercent: 15, 
    finalPrice: 2000 - (2000 * 0.15), 
    image: "https://p.rmjo.in/moodShot/y3u8am09-1024x512.webp",
    inStock: true,
  },
];

export default CategoriesData;
