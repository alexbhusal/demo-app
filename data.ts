export interface SearchData {
  placeholder: string;
  history: string[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  original_price: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  isNew: boolean;
  stock: boolean;
}

export interface Variant {
  storage: string;
}

export interface Specifications {
  RAM: string;
  Storage: string;
  Color: string;
  fastCharging: string;
}

export interface Delivery {
  location: string;
  time: string;
  fee: number;
}

export interface ProductDetails {
  id: string;
  name: string;
  brand: string;
  price: number;
  original_price: number;
  rating: number;
  images: string[];
  variants: Variant[];
  highlights: string[];
  specifications: Specifications;
  description: string;
  delivery: Delivery;
}

export interface Deal {
  id: string;
  title: string;
  price: number;
}

export interface Live {
  id: string;
  title: string;
  viewers: string;
  date: string;
}

export interface Recommendations {
  youMayAlsoLike: string[];
  relatedProducts: string[];
}

export interface AppData {
  search: SearchData;
  categories: Category[];
  products: Product[];
  productDetails: ProductDetails;
  deals: Deal[];
  live: Live[];
  recommendations: Recommendations;
}


// DATA

export const data: AppData = {
  search: {
    placeholder: "Search for products...",
    history: [
      "Laptops",
      "iPhone 16 Pro Max",
      "Protein Powder",
      "Glass Bottle",
      "Lenovo LOQ RTX 4060",
      "Macbook Air M4",
      "Chicken Pickle"
    ]
  },

  categories: [
    { id: 1, name: "Health & Skin Care", icon: "health.png" },
    { id: 2, name: "Hair Care", icon: "hair.png" },
    { id: 3, name: "Furniture & Plants", icon: "furniture.png" },
    { id: 4, name: "Chairs & Carpet", icon: "chair.png" },
    { id: 5, name: "Electronics", icon: "electronics.png" },
    { id: 6, name: "Fashion", icon: "fashion.png" }
  ],

  products: [
    {
      id: "p1",
      name: "Beardo Hair Serum with Argan Oil, 50ML",
      category: "Hair Care",
      price: 9999,
      original_price: 12999,
      discount: 40,
      rating: 4.2,
      reviews: 1000,
      image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
      isNew: true,
      stock: true
    },
    {
      id: "p2",
      name: "iPhone 17 Pro Max",
      category: "Electronics",
      price: 192000,
      original_price: 200000,
      discount: 8,
      rating: 4.5,
      reviews: 422,
      image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
      isNew: true,
      stock: true
    },
    {
      id: "p3",
      name: "Wireless Earbuds NB121 Pods",
      category: "Electronics",
      price: 5999,
      original_price: 9999,
      discount: 40,
      rating: 4.3,
      reviews: 300,
      image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
      isNew: false,
      stock: true
    }
  ],

  productDetails: {
    id: "p2",
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    price: 192000,
    original_price: 200000,
    rating: 4.5,
    images: ["iphone1.png", "iphone2.png"],
    variants: [
      { storage: "64GB" },
      { storage: "256GB" },
      { storage: "512GB" },
      { storage: "1TB" }
    ],
    highlights: [
      "A19 Pro Fusion Chip",
      "ProMotion XDR Display",
      "Quad-Lens Camera System",
      "48MP Periscope Zoom",
      "All-day battery",
      "MagSafe 3.0 charging",
      "IP69 Water Resistance"
    ],
    specifications: {
      RAM: "8GB",
      Storage: "512GB",
      Color: "Black",
      fastCharging: "30W"
    },
    description:
      "High-performance smartphone with advanced camera, AI features, and long battery life.",
    delivery: {
      location: "Kathmandu",
      time: "28-30 Nov",
      fee: 120
    }
  },

  deals: [
    {
      id: "d1",
      title: "50% Discount on Sneakers",
      price: 5999
    },
    {
      id: "d2",
      title: "22% Off on Fossil Watches",
      price: 9999
    }
  ],

  live: [
    {
      id: "l1",
      title: "Fashion Try-On Live",
      viewers: "4.8K",
      date: "Aug 01, 2025"
    }
  ],

  recommendations: {
    youMayAlsoLike: ["p1", "p3"],
    relatedProducts: ["p1", "p3"]
  }
};


export const categories = [
  {
    id: "1",
    name: "Skin",
    image: "https://images.pexels.com/photos/4735940/pexels-photo-4735940.jpeg",
  },
  {
    id: "2",
    name: "Face",
    image: "https://images.pexels.com/photos/4735904/pexels-photo-4735904.jpeg",
  },
  {
    id: "3",
    name: "Med",
    image: "https://images.pexels.com/photos/7038242/pexels-photo-7038242.jpeg",
  },
  {
    id: "4",
    name: "Beverages",
    image: "https://images.pexels.com/photos/2061/restaurant-beans-coffee-cup.jpg",
  },
  {
    id: "5",
    name: "Grocery",
    image: "https://images.pexels.com/photos/5951182/pexels-photo-5951182.jpeg",
  },
  {
    id: "6",
    name: "tools",
    image: "https://imgs.search.brave.com/gRgUP_h6bNurRSjU009suL4jwgeCSP0GtoTZyEKXX4g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWct/djItcHJvZC53aG9w/LmNvbS91bnNhZmUv/cnM6Zml0OjEwODA6/MC9wbGFpbi9odHRw/czovL2Fzc2V0cy53/aG9wLmNvbS9pbWFn/ZXMvaW1hZ2VzLzQ2/MTM3Lm9yaWdpbmFs/LmpwZWdAYXZpZj93/PTEwODAmcT03NQ",
  },
];



export const LiveProdustsData = [
  {
    id: "1",
    name: "Fashion Try-OnLive",
    image: "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  },
  {
    id: "2",
    name: "Fashion Try-OnLive",
    image: "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  },
  {
    id: "3",
    name: "Fashion Try-OnLive",
    image: "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  },
  {
    id: "4",
    name: "Fashion Try-OnLive",
    image: "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  },
  {
    id: "5",
    name: "Fashion Try-OnLive",
    image: "https://images.pexels.com/photos/36619221/pexels-photo-36619221.jpeg",
  },
];

