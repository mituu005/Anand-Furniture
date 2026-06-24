export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  detailsDescription: string;
  image: string;
  images: string[];
  features: string[];
  materialInfo: string;
  sizes: string[];
  colors: Array<{ name: string; hex?: string }>;
  applications: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium PVC Wardrobe',
    slug: 'premium-pvc-wardrobe',
    category: 'Wardrobes',
    description: 'Termite-proof, water-resistant, customized PVC wardrobes with smart internal layouts.',
    detailsDescription: 'Our Premium PVC Wardrobes are engineered to provide maximum durability with stunning modern aesthetics. Specially designed for bedrooms, dressing rooms, and walk-in closets, these wardrobes are 100% waterproof, fire-retardant, and termite-proof, making them the ultimate long-term choice for high-humidity environments.',
    image: '/product-wardrobe.png',
    images: ['/product-wardrobe.png', '/gallery-2.png', '/product-bedroom.png'],
    features: [
      '100% Termite & Pest Proof',
      'Waterproof and Moisture Resistant',
      'Fire Retardant Materials',
      'Soft-close German hinges and slides',
      'Custom Layout Configurable'
    ],
    materialInfo: 'High-Density PVC Foam Board with Premium Laminate and Edge-band Finish',
    sizes: ['Customized as per room dimensions (Standard heights: 7ft, 8.5ft, or full-height)'],
    colors: [
      { name: 'Classic Walnut', hex: '#5c4033' },
      { name: 'Frosty White', hex: '#ffffff' },
      { name: 'Matte Slate Grey', hex: '#708090' },
      { name: 'Warm Teak', hex: '#b5651d' }
    ],
    applications: ['Master Bed Suite', 'Kids Bedrooms', 'Dressing Areas', 'Walk-in Closets']
  },
  {
    id: 2,
    name: 'L-Shaped Acrylic Kitchen',
    slug: 'l-shaped-acrylic-kitchen',
    category: 'Modular Kitchen',
    description: 'Ultra-glossy modern modular kitchen designs with soft-close tandem drawers.',
    detailsDescription: 'Elevate your cooking experience with our premium L-Shaped Acrylic Modular Kitchen. Featuring a high-gloss reflective finish that is scratch-resistant and easy to clean, this kitchen system integrates intelligent storage solutions like pull-out larders, tandem drawers, and corner carousels for seamless operation.',
    image: '/gallery-6.png',
    images: ['/gallery-6.png', '/product-dining.png', '/gallery-3.png'],
    features: [
      'High-gloss scratch-resistant acrylic sheets',
      'Tandem drawers and smart pull-out baskets',
      'Seamless edge-banding for water protection',
      'Heat, steam, and oil resistant surfaces',
      'LED under-cabinet profile lighting'
    ],
    materialInfo: 'Boiling Water Proof (BWP) Marine Plywood Core with 1.5mm Acrylic Finish',
    sizes: ['Tailored layout configurations (L-Shape, U-Shape, Straight, or Island designs)'],
    colors: [
      { name: 'Royal Red & White', hex: '#8b0000' },
      { name: 'Champagne Gold', hex: '#f7e7ce' },
      { name: 'Midnight Blue & Grey', hex: '#191970' },
      { name: 'Solid Gloss White', hex: '#ffffff' }
    ],
    applications: ['Residential Kitchens', 'Penthouse Kitchenettes', 'Open Kitchen Layouts']
  },
  {
    id: 3,
    name: 'PVC Designer Sofa Set',
    slug: 'pvc-designer-sofa-set',
    category: 'PVC Furniture',
    description: 'Sturdy PVC-framed sofa set wrapped in premium fabrics, perfect for living spaces.',
    detailsDescription: 'Designed for ultimate luxury and comfort, this PVC-framed sofa set combines structural strength with contemporary design. The internal structure uses premium reinforced PVC profiles that will never rot, bend, or decay, paired with high-density foam cushions for exceptional seating comfort.',
    image: '/product-sofa.png',
    images: ['/product-sofa.png', '/gallery-1.png'],
    features: [
      'Reinforced PVC frame structure',
      'High-resiliency foam cushions for bounce',
      'Stain-resistant upholstery fabrics',
      'Ergonomically designed for lumbar support',
      'Removable covers for easy washing'
    ],
    materialInfo: 'Heavy-duty PVC Structural Profiles, High-Density Cushioning, Premium Linen Upholstery',
    sizes: [
      '3-Seater: 72" Width x 34" Depth x 32" Height',
      'Single Seater: 36" Width x 34" Depth x 32" Height'
    ],
    colors: [
      { name: 'Ocean Blue', hex: '#0077be' },
      { name: 'Sand Beige', hex: '#f5f5dc' },
      { name: 'Charcoal Black', hex: '#222222' }
    ],
    applications: ['Living Rooms', 'Commercial Reception Areas', 'Office Lobbies', 'Executive Waiting Rooms']
  },
  {
    id: 4,
    name: 'Sliding Door Bedroom Wardrobe',
    slug: 'sliding-door-bedroom-wardrobe',
    category: 'Wardrobes',
    description: 'Contemporary sliding wardrobes with anti-jump safety track systems.',
    detailsDescription: 'Maximize your bedroom space with our contemporary Sliding Door Wardrobe. It features an ultra-smooth floor-running sliding mechanism with an anti-jump safety system. The interior is customized with hanging rods, adjustable shelves, secure drawers with digital locks, and integrated LED sensor lights.',
    image: '/product-bedroom.png',
    images: ['/product-bedroom.png', '/gallery-2.png'],
    features: [
      'Smooth German-engineered slide mechanism',
      'Integrated LED sensor lighting',
      'Large vanity mirror option',
      'Dedicated accessory and jewelry drawers',
      'Soft-closing dampening bumpers'
    ],
    materialInfo: 'Boiling Water Resistant (BWR) Blockboard with Acrylic and Veneer finishes',
    sizes: ['Width: 6ft to 12ft (Customizable)', 'Height: 8ft to 10ft', 'Depth: 2ft (Standard)'],
    colors: [
      { name: 'Smoke Oak', hex: '#554c41' },
      { name: 'Warm Teak', hex: '#a0522d' },
      { name: 'Pearl White & Mirror', hex: '#eaeaea' }
    ],
    applications: ['Master Bedroom', 'Luxury Guest Room', 'Modern Lofts and Condos']
  },
  {
    id: 5,
    name: 'Floating Media TV Unit',
    slug: 'floating-media-tv-unit',
    category: 'TV Units',
    description: 'Elegant floating TV unit with wire management slots and integrated led backlighting.',
    detailsDescription: 'Bring a clean, minimalist aesthetic to your entertainment room with our Floating Media Console. It keeps your floor clutter-free while providing ample storage for media players, game consoles, and decorations. Smart wire cutouts keep cables neatly hidden, and indirect LED backlighting creates a theater-like atmosphere.',
    image: '/gallery-2.png',
    images: ['/gallery-2.png', '/product-pvc.png', '/gallery-1.png'],
    features: [
      'Wall-mounted space-saving design',
      'Concealed wire-routing channels',
      'Dimmable ambient LED backlighting',
      'Drop-down pneumatic cabinet doors',
      'Scratch-resistant top panel'
    ],
    materialInfo: 'High-density PVC and MDF Boards with Matte/Gloss PU Paint finish',
    sizes: [
      'Standard: 5ft Length x 14" Depth x 12" Height',
      'Large: 7ft Length x 14" Depth x 12" Height'
    ],
    colors: [
      { name: 'Textured Concrete & Walnut', hex: '#8b8589' },
      { name: 'Charcoal Black & Gold Accent', hex: '#111111' },
      { name: 'White Matte & Oak', hex: '#f0ebd8' }
    ],
    applications: ['Living Rooms', 'Home Theaters', 'Master Bed Suites', 'Hotel Bedrooms']
  },
  {
    id: 6,
    name: 'Executive Ergonomic Desk',
    slug: 'executive-ergonomic-desk',
    category: 'Office Furniture',
    description: 'Premium wooden executive office desk with drawer pedestals and cable outlets.',
    detailsDescription: 'Designed for professionals, this Executive Desk combines elegant style with functional utility. It offers a spacious work surface, an integrated wire-management system with metal grommets, and a lockable three-drawer pedestal for confidential files and personal items.',
    image: '/product-office.png',
    images: ['/product-office.png', '/gallery-4.png', '/gallery-5.png'],
    features: [
      'Large scratch-resistant work surface',
      'Pre-drilled metal wire grommets',
      'Lockable drawer pedestals for security',
      'Impact-resistant PVC edge-banding',
      'Sturdy heavy-load steel support frame'
    ],
    materialInfo: 'Commercial grade Engineered Wood with scratch-resistant melamine finish',
    sizes: [
      'Standard Executive: 5.0ft Length x 2.5ft Width',
      'Presidential: 6.0ft Length x 3.0ft Width'
    ],
    colors: [
      { name: 'Dark Wenge', hex: '#3b2f2f' },
      { name: 'Mahogany Red', hex: '#4a0e0e' },
      { name: 'Urban Maple', hex: '#d4af37' }
    ],
    applications: ['Corporate Executive Offices', 'Home Study Rooms', 'Conference Cabins']
  },
  {
    id: 7,
    name: 'WPC Fluted Wall Panels',
    slug: 'wpc-fluted-wall-panels',
    category: 'Interior Panels',
    description: 'Premium WPC fluted panels for luxury wall feature styling and noise reduction.',
    detailsDescription: 'Enhance your walls with our premium Wood Plastic Composite (WPC) Fluted Panels. Offering a realistic 3D timber texture, these panels are water-proof, insect-proof, and sound-insulating. They are perfect for creating stunning TV background feature walls or luxury lobby highlight pillars.',
    image: '/product-pvc.png',
    images: ['/product-pvc.png', '/gallery-1.png', '/gallery-3.png'],
    features: [
      '3D textured fluted profile',
      'Sound damping properties',
      'Eco-friendly recyclable material',
      'Easy interlocking installation system',
      'Waterproof & zero rot'
    ],
    materialInfo: 'Wood Plastic Composite (WPC) with Anti-UV and Anti-Scratch film',
    sizes: ['Width: 6 inches (Interlocking joint)', 'Length: 9.5ft', 'Thickness: 12mm'],
    colors: [
      { name: 'Teak Brown', hex: '#cd853f' },
      { name: 'Charcoal Black', hex: '#1c1c1c' },
      { name: 'Silver Birch', hex: '#c0c0c0' },
      { name: 'Golden Cedar', hex: '#daab48' }
    ],
    applications: ['TV Feature Walls', 'Living Room Highlights', 'Office Receptions', 'Hotel Lobbies']
  },
  {
    id: 8,
    name: 'PVC Seamless Ceiling Panels',
    slug: 'pvc-seamless-ceiling-panels',
    category: 'Interior Panels',
    description: 'Interlocking PVC ceiling panels with high water resistance and easy installation.',
    detailsDescription: 'Say goodbye to damp ceilings with our PVC Seamless Ceiling Panels. Lightweight and extremely durable, these panels interlock flawlessly to create a flat, moisture-proof ceiling that is ideal for bathrooms, kitchens, balconies, and living rooms. They feature a reflective silver-strip design for modern elegance.',
    image: '/gallery-3.png',
    images: ['/gallery-3.png', '/product-pvc.png'],
    features: [
      'Lightweight and quick to install',
      '100% moisture and mould resistant',
      'Interlocking tongue-and-groove joint',
      'Zero painting/maintenance required',
      'Integrated spotlights support'
    ],
    materialInfo: 'Extruded PVC with Glossy/Matte Anti-static coatings',
    sizes: ['Width: 10 inches', 'Length: 10ft', 'Thickness: 8mm'],
    colors: [
      { name: 'Glossy White', hex: '#ffffff' },
      { name: 'White Woodgrain with Silver Strip', hex: '#ececec' },
      { name: 'Dark Woodgrain', hex: '#5c4033' }
    ],
    applications: ['Kitchen Ceilings', 'Bathroom Ceilings', 'Balconies', 'Commercial Showrooms']
  },
  {
    id: 9,
    name: 'Designer Cabinet Metallic Handles',
    slug: 'designer-cabinet-metallic-handles',
    category: 'Accessories',
    description: 'Premium metallic pulls and handles for kitchen drawers and wardrobes.',
    detailsDescription: 'Give the final touch of luxury to your furniture with our Designer Cabinet Handles. Available in various lengths and styles, these premium metal pulls feature a rust-resistant electroplated finish that keeps them looking pristine even with daily use in high-moisture kitchen environments.',
    image: '/gallery-5.png',
    images: ['/gallery-5.png', '/gallery-6.png'],
    features: [
      'Rust-resistant electroplated coating',
      'Solid metal heavy construction',
      'Modern minimalist profile',
      'Easy mounting screws included',
      'Fingerprint resistant matte texture'
    ],
    materialInfo: 'Solid Zinc Alloy and Solid Brass',
    sizes: [
      '96mm Hole Spacing',
      '128mm Hole Spacing',
      '192mm Hole Spacing',
      '320mm Hole Spacing'
    ],
    colors: [
      { name: 'Brushed Gold', hex: '#ffd700' },
      { name: 'Matte Black', hex: '#1a1a1a' },
      { name: 'Satin Chrome', hex: '#e8e8e8' }
    ],
    applications: ['Kitchen Cabinets', 'Wardrobe Doors', 'TV Unit Drawers', 'Vanities']
  },
  {
    id: 10,
    name: 'Stainless Steel Kitchen Organizers',
    slug: 'stainless-steel-kitchen-organizers',
    category: 'Accessories',
    description: 'Heavy-duty stainless steel pull-out baskets and dividers for kitchen organizing.',
    detailsDescription: 'Organize your kitchen cookware and dinnerware with our heavy-duty Stainless Steel Kitchen Baskets. Specially coated to prevent rust, these wire baskets ride on ultra-smooth telescopic soft-close runners, providing easy accessibility and a high weight capacity of up to 40 kg.',
    image: '/gallery-4.png',
    images: ['/gallery-4.png', '/gallery-6.png'],
    features: [
      'SS 304 food-grade material',
      'Smooth telescopic soft-close runners',
      'High weight-carrying capacity (up to 40kg)',
      'Removable modular dividers',
      'Anti-slip sheet lining compatibility'
    ],
    materialInfo: 'Premium 304 Grade Stainless Steel',
    sizes: [
      'Standard: 15" Width x 20" Depth x 6" Height',
      'Wide: 21" Width x 20" Depth x 8" Height'
    ],
    colors: [
      { name: 'Polished Chrome', hex: '#d5d6d8' },
      { name: 'Matte Graphite Black', hex: '#2c3539' }
    ],
    applications: ['Modular Kitchen Drawers', 'Under-sink Cabinets', 'Pantry Units']
  }
];
