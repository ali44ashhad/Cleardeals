import { Dumbbell,Waves, Wind, TreePine, Trophy, Shield, Car, Coffee, Plane, Hospital, Building } from 'lucide-react';


export const projectData = [
  {
    id: "grandview-estate",
    title: "The Grandview Estate",
    location: "Sector 17, Chandigarh",
    price: "₹3.25 Cr",
    tag: "LUXURY",
    tagColor: "bg-amber-100 text-amber-800",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    stats: [
      { label: "CONFIGURATION", value: "3 & 4 BHK" },
      { label: "PRICE STARTING", value: "₹3.25 Cr" },
      { label: "POSSESSION", value: "Ready" },
      { label: "AREA", value: "2100 Sq.Ft." },
    ],
    imageGrid: [
        { id: 1, src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80", alt: "Executive" },
        { id: 2, src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80", alt: "Kitchen" },
        { id: 3, src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80", alt: "Bedroom" },
        { id: 4, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80", alt: "Bathroom" },
      ],
      // ADDED: Neighborhood Section Data
      neighborhood: {
        mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80",
        locations: [
          { name: "International Airport", time: "15 Mins Drive", icon: Plane },
          { name: "Fortis Hospital", time: "08 Mins Drive", icon: Hospital },
          { name: "CP67 Mall", time: "05 Mins Drive", icon: Building }
        ]
      },
    description: {
      intro: "A landmark of luxury in the heart of Chandigarh's most iconic sector.",
      details: "The Grandview Estate offers unparalleled access to the city's finest amenities while providing a sanctuary of peace."
    },
    amenities: [
      { name: "State-of-art Gym", icon: Dumbbell, color: "bg-zinc-50" },
      { name: "Olympic Size Pool", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80", isImage: true },
      { name: "Private Parks", icon: TreePine, desc: "Lush green spaces.", color: "bg-[#1a2b3c] text-white" }
    ],
    contact: "+91 172 456 7890",
    brochureSize: "8.5 MB"
  },

  // 2
  {
    id: "nexus-business-hub",
    title: "Nexus Business Hub",
    location: "IT Park, Mohali",
    price: "₹1.80 Cr",
    tag: "COMMERCIAL",
    tagColor: "bg-black text-white",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    imageGrid: [
      { id: 1, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80", alt: "Exterior" },
      { id: 2, src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80", alt: "Lobby" },
      { id: 3, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80", alt: "Workspace" },
      { id: 4, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80", alt: "Meeting Room" },
    ],
    stats: [
      { label: "TYPE", value: "Office Spaces" },
      { label: "PRICE STARTING", value: "₹1.80 Cr" },
      { label: "POSSESSION", value: "Immediate" },
      { label: "FLOORS", value: "G + 12" },
    ],
    description: {
        intro: "The future of business operations in Mohali's premier IT destination.",
        details: "High-speed elevators, 100% power backup, and premium glass facades."
    },
    amenities: [
      { name: "Business Lounge", icon: Coffee, color: "bg-zinc-50" },
      { name: "Ample Parking", icon: Car, color: "bg-zinc-100" },
      { name: "24/7 Security", icon: Shield, color: "bg-[#1a2b3c] text-white" }
    ],
    contact: "+91 98765 43210",
    brochureSize: "5.2 MB"
  },
  // 3
  {
    id: "pinecrest-residences",
    title: "The Pinecrest Residences",
    location: "Sector 65, Mohali, Punjab",
    price: "₹2.10 Cr",
    tag: "PRE-LAUNCH",
    tagColor: "bg-teal-100 text-teal-800",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    imageGrid: [
      { id: 1, src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80", alt: "Exterior" },
      { id: 2, src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80", alt: "Living Room" },
      { id: 3, src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80", alt: "Bedroom" },
      { id: 4, src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80", alt: "Balcony View" },
    ],
    stats: [
      { label: "CONFIGURATION", value: "3, 4 & 5 BHK" },
      { label: "PRICE STARTING", value: "₹2.10 Cr*" },
      { label: "POSSESSION", value: "Dec 2025" },
      { label: "AREA", value: "2400 Sq.Ft." },
    ],
    description: {
      intro: "Experience the pinnacle of sophisticated living at The Zenith Residences, strategically located in the heart of Mohali's flourishing Sector 82.",
      details: "Meticulously crafted to maximize natural light and ventilation with expansive balconies that offer panoramic views."
    },
    amenities: [
      { name: "State-of-art Gym", icon: Dumbbell, color: "bg-zinc-50" },
      { name: "Olympic Size Pool", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80", isImage: true },
      { name: "Private Parks", icon: TreePine, desc: "4 acres of manicured landscaped gardens with jogging tracks.", color: "bg-[#1a2b3c] text-white" },
     ],
    contact: "+91 99999 99999",
    brochureSize: "12.4 MB"
  },
  // 4
  {
    id: "elysian-towers",
    title: "Elysian Towers",
    location: "Sector 66, Mohali",
    price: "₹2.85 Cr",
    tag: "PREMIUM",
    tagColor: "bg-teal-100 text-teal-800",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    imageGrid: [
      { id: 1, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80", alt: "Skyline View" },
      { id: 2, src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80", alt: "Modern Lounge" },
      { id: 3, src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80", alt: "Master Suite" },
      { id: 4, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80", alt: "Balcony" },
    ],
    stats: [
      { label: "CONFIGURATION", value: "3 & 4 BHK" },
      { label: "PRICE STARTING", value: "₹2.85 Cr*" },
      { label: "POSSESSION", value: "Ready to Move" },
      { label: "AREA", value: "2850 Sq.Ft." },
    ],
    description: {
      intro: "Elysian Towers stands as a beacon of modern architectural brilliance, offering a panoramic view of the Shivalik range.",
      details: "Featuring double-height ceilings, Italian marble flooring, and smart-home integration, these residences redefine urban sophistication."
    },
    amenities: [
      { name: "Infinity Pool", icon: Waves, color: "bg-zinc-50" },
      { name: "Sky Lounge", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80", isImage: true },
      { name: "Concierge", icon: Shield, desc: "24/7 dedicated lifestyle management.", color: "bg-[#1a2b3c] text-white" },
    ],
    contact: "+91 98888 77777",
    brochureSize: "14.2 MB"
  },

  {
    id: "aura-green-villas",
    title: "Aura Green Villas",
    location: "Mullanpur, New Chandigarh",
    price: "₹5.10 Cr",
    tag: "ULTRA LUXE",
    tagColor: "bg-amber-100 text-amber-800",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
    imageGrid: [
      { id: 1, src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80", alt: "Villa Front" },
      { id: 2, src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80", alt: "Private Pool" },
      { id: 3, src: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80", alt: "Dining Hall" },
      { id: 4, src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80", alt: "Garden" },
    ],
    stats: [
      { label: "CONFIGURATION", value: "5 BHK Villas" },
      { label: "PRICE STARTING", value: "₹5.10 Cr" },
      { label: "POSSESSION", value: "June 2027" },
      { label: "AREA", value: "500 Sq.Yds" },
    ],
    description: {
      intro: "Discover a life of tranquility at Aura Green Villas, where nature meets contemporary luxury in the eco-city of New Chandigarh.",
      details: "Each villa features a private elevator, a temperature-controlled swimming pool, and a sprawling terrace garden."
    },
    amenities: [
      { name: "Zen Garden", icon: TreePine, color: "bg-green-50" },
      { name: "Organic Farm", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80", isImage: true },
      { name: "Solar Power", icon: Wind, desc: "100% sustainable energy backup.", color: "bg-[#1a2b3c] text-white" },
    ],
    contact: "+91 91111 22222",
    brochureSize: "18.5 MB"
  },

  {
    id: "skyline-heights",
    title: "Skyline Heights",
    location: "Zirakpur, Tricity",
    price: "₹1.45 Cr",
    tag: "BEST SELLER",
    tagColor: "bg-blue-100 text-blue-800",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    imageGrid: [
      { id: 1, src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80", alt: "Building" },
      { id: 2, src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80", alt: "Living Space" },
      { id: 3, src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80", alt: "Kitchen" },
      { id: 4, src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80", alt: "Bedroom" },
    ],
    stats: [
      { label: "CONFIGURATION", value: "3 BHK + Study" },
      { label: "PRICE STARTING", value: "₹1.45 Cr*" },
      { label: "POSSESSION", value: "Dec 2026" },
      { label: "AREA", value: "1950 Sq.Ft." },
    ],
    description: {
      intro: "Skyline Heights offers the perfect balance of connectivity and comfort for the modern family.",
      details: "Located right on the PR7 Airport Road, this project ensures you are never more than 10 minutes away from the airport or major shopping hubs."
    },
    amenities: [
      { name: "Sports Court", icon: Trophy, color: "bg-zinc-50" },
      { name: "Kids Zone", icon: Car, color: "bg-zinc-100" },
      { name: "Club House", icon: Building, desc: "15,000 sq.ft of recreational space.", color: "bg-[#1a2b3c] text-white" },
    ],
    contact: "+91 88888 99999",
    brochureSize: "9.8 MB"
  }
  // ... You can add Aura Green Villas, Pinecrest, and Skyline Heights following this same pattern
];