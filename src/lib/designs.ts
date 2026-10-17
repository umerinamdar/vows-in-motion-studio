import inv1 from "@/assets/inv-1.jpg";
import inv2 from "@/assets/inv-2.jpg";
import inv3 from "@/assets/inv-3.jpg";
import inv4 from "@/assets/inv-4.jpg";
import inv5 from "@/assets/inv-5.jpg";
import inv6 from "@/assets/inv-6.jpg";

export type Design = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  tone: "light" | "dark";
  couple: [string, string];
  date: string;
  reveal: string;
  category: string;
};

const raw: Omit<Design, "slug">[] = [
  { title: "Rajmahal", tagline: "Ivory arches, marigold and rose", image: inv1, tone: "dark", couple: ["Aanya", "Vihaan"], date: "12 · 02 · 2027", reveal: "Palace doors", category: "Traditional" },
  { title: "Mogra", tagline: "Emerald velvet, jasmine garlands", image: inv2, tone: "light", couple: ["Meera", "Arjun"], date: "28 · 11 · 2026", reveal: "Curtain rise", category: "Royal" },
  { title: "Gulmohar", tagline: "Watercolour peonies, soft and airy", image: inv3, tone: "dark", couple: ["Isha", "Kabir"], date: "05 · 03 · 2027", reveal: "Envelope", category: "Modern" },
  { title: "Banarasi", tagline: "Maroon silk with a wax-sealed note", image: inv4, tone: "light", couple: ["Riya", "Aditya"], date: "18 · 01 · 2027", reveal: "Envelope", category: "Traditional" },
  { title: "Pichola", tagline: "A lake palace at golden hour", image: inv5, tone: "light", couple: ["Tara", "Rohan"], date: "09 · 12 · 2026", reveal: "Cinematic fade", category: "Destination" },
  { title: "Chandni", tagline: "Midnight sky, lotus and crescent", image: inv6, tone: "light", couple: ["Zoya", "Ayaan"], date: "21 · 02 · 2027", reveal: "Scratch card", category: "Modern" },
  { title: "Haldi Bloom", tagline: "Sunlit florals for every function", image: inv1, tone: "dark", couple: ["Naina", "Dev"], date: "14 · 11 · 2026", reveal: "Envelope", category: "Traditional" },
  { title: "Shahi Darbar", tagline: "Gilded borders, regal restraint", image: inv2, tone: "light", couple: ["Saanvi", "Reyansh"], date: "03 · 02 · 2027", reveal: "Palace doors", category: "Royal" },
  { title: "Phoolon Ki Chaadar", tagline: "Pastel garden, minimal type", image: inv3, tone: "dark", couple: ["Anika", "Yash"], date: "26 · 01 · 2027", reveal: "Curtain rise", category: "Modern" },
  { title: "Sindoor", tagline: "Deep red heritage with gold paisley", image: inv4, tone: "light", couple: ["Diya", "Karan"], date: "07 · 12 · 2026", reveal: "Scratch card", category: "Traditional" },
  { title: "Udaipur Dusk", tagline: "For the destination wedding", image: inv5, tone: "light", couple: ["Kiara", "Neil"], date: "19 · 03 · 2027", reveal: "Cinematic fade", category: "Destination" },
  { title: "Taara", tagline: "Celestial gold on navy", image: inv6, tone: "light", couple: ["Myra", "Ishaan"], date: "11 · 02 · 2027", reveal: "Envelope", category: "Modern" },
  { title: "Jharokha", tagline: "Carved windows, framed in blooms", image: inv1, tone: "dark", couple: ["Pari", "Aarav"], date: "30 · 11 · 2026", reveal: "Palace doors", category: "Royal" },
  { title: "Hariyali", tagline: "Lush green for a mehendi evening", image: inv2, tone: "light", couple: ["Avni", "Vivaan"], date: "16 · 01 · 2027", reveal: "Curtain rise", category: "Traditional" },
  { title: "Saanjh", tagline: "Quiet, modern, beautifully soft", image: inv3, tone: "dark", couple: ["Ira", "Shaurya"], date: "08 · 03 · 2027", reveal: "Scratch card", category: "Modern" },
  { title: "Lal Joda", tagline: "A bride's red, in silk and gold", image: inv4, tone: "light", couple: ["Ahana", "Rudra"], date: "24 · 02 · 2027", reveal: "Envelope", category: "Traditional" },
];

export const designs: Design[] = raw.map((d) => ({
  ...d,
  slug: d.title.toLowerCase().replace(/[^a-z]+/g, "-"),
}));
