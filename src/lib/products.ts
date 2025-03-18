
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  featured: boolean;
  new: boolean;
  stock: number;
  rating: number;
  specs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Modern Desk Lamp",
    description: "Elegant design with adjustable brightness levels and minimalist aesthetic. Perfect for your workspace.",
    price: 129.99,
    category: "Lighting",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    new: true,
    stock: 15,
    rating: 4.8,
    specs: {
      "Material": "Aluminum, Glass",
      "Height": "18 inches",
      "Width": "6 inches",
      "Weight": "2.4 lbs",
      "Color Temperature": "2700K-5000K"
    }
  },
  {
    id: "p2",
    name: "Wireless Earbuds Pro",
    description: "Immersive sound with active noise cancellation. Designed for comfort and exceptional audio quality.",
    price: 199.99,
    category: "Audio",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    new: true,
    stock: 22,
    rating: 4.9,
    specs: {
      "Battery Life": "8 hours (30 with case)",
      "Connectivity": "Bluetooth 5.2",
      "Noise Cancellation": "Active",
      "Water Resistance": "IPX4",
      "Charging": "USB-C, Wireless"
    }
  },
  {
    id: "p3",
    name: "Minimalist Watch",
    description: "Timeless design with precision movement. A statement piece that complements any style.",
    price: 249.99,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: true,
    new: false,
    stock: 8,
    rating: 4.7,
    specs: {
      "Case Material": "Stainless Steel",
      "Band Material": "Italian Leather",
      "Movement": "Swiss Quartz",
      "Water Resistance": "5 ATM",
      "Diameter": "40mm"
    }
  },
  {
    id: "p4",
    name: "Smart Home Speaker",
    description: "Crystal clear sound with intuitive voice controls. Seamlessly integrates with your smart home.",
    price: 179.99,
    category: "Audio",
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e762f8a5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    new: true,
    stock: 19,
    rating: 4.6,
    specs: {
      "Drivers": "2 x 2.5\" full-range",
      "Connectivity": "WiFi, Bluetooth",
      "Voice Assistant": "Compatible with leading platforms",
      "Dimensions": "5.6\" x 5.6\" x 6.8\"",
      "Power": "25W RMS"
    }
  },
  {
    id: "p5",
    name: "Leather Wallet",
    description: "Crafted from premium leather with RFID protection. Slim profile with ample storage.",
    price: 89.99,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620758340725-dc785c00ed45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    new: false,
    stock: 34,
    rating: 4.5,
    specs: {
      "Material": "Full-grain leather",
      "Card Slots": "6",
      "Protection": "RFID blocking",
      "Dimensions": "4.5\" x 3.5\"",
      "Color": "Tan"
    }
  },
  {
    id: "p6",
    name: "Ceramic Mug Set",
    description: "Set of four handcrafted ceramic mugs. Each piece is unique with a modern, minimalist design.",
    price: 64.99,
    category: "Homeware",
    images: [
      "https://images.unsplash.com/photo-1577918395804-735dbde62572?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530111921656-c82e275edcea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    new: false,
    stock: 27,
    rating: 4.4,
    specs: {
      "Material": "Ceramic",
      "Capacity": "12 oz",
      "Dishwasher Safe": "Yes",
      "Microwave Safe": "Yes",
      "Quantity": "Set of 4"
    }
  },
  {
    id: "p7",
    name: "Smart Water Bottle",
    description: "Tracks hydration with LED indicators. Double-wall insulation keeps drinks at ideal temperature.",
    price: 49.99,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1588867702719-969c8c01f0e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    new: true,
    stock: 41,
    rating: 4.3,
    specs: {
      "Capacity": "20 oz",
      "Material": "Stainless Steel",
      "Battery Life": "2 weeks",
      "Insulation": "24 hours cold, 12 hours hot",
      "App Compatibility": "iOS, Android"
    }
  },
  {
    id: "p8",
    name: "Canvas Backpack",
    description: "Durable canvas with leather accents. Multiple compartments for organization with padded laptop sleeve.",
    price: 119.99,
    category: "Bags",
    images: [
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    featured: false,
    new: false,
    stock: 16,
    rating: 4.6,
    specs: {
      "Material": "Waxed Canvas, Leather",
      "Capacity": "22L",
      "Laptop Compartment": "Up to 15\"",
      "Water Resistant": "Yes",
      "Dimensions": "18\" x 12\" x 6\""
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getNewProducts(): Product[] {
  return products.filter(product => product.new);
}

export function getRelatedProducts(id: string, limit: number = 4): Product[] {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== id)
    .slice(0, limit);
}
