// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";

// export default function ShopPage() {
//   const [sort, setSort] = useState("newest");
//   const [category, setCategory] = useState("all");

//   const categories = ["all", "men", "women", "unisex", "luxury"];
//   const sorting = [
//     { id: "newest", label: "Newest Arrivals" },
//     { id: "priceLow", label: "Price: Low → High" },
//     { id: "priceHigh", label: "Price: High → Low" },
//   ];

//   const products = [
//     { id: 1, title: "Royal Oud", price: 99, brand: "Creed", rating: 5, cat: "luxury", img: "/p1.jpg" },
//     { id: 2, title: "Ocean Bliss", price: 49, brand: "Dior", rating: 4, cat: "unisex", img: "/p2.jpg" },
//     { id: 3, title: "Rose Velvet", price: 55, brand: "Gucci", rating: 3, cat: "women", img: "/p3.jpg" },
//     { id: 4, title: "Amber Musk", price: 60, brand: "Tom Ford", rating: 4, cat: "men", img: "/p4.jpg" },
//   ];

//     const [price, setPrice] = useState(150);
//     const [brands, setBrands] = useState<string[]>([]);
//     const [rating, setRating] = useState(1);

//   // const filtered = products
//   //   .filter((p) => category === "all" || p.cat === category)
//   //   .sort((a, b) => {
//   //     if (sort === "priceLow") return a.price - b.price;
//   //     if (sort === "priceHigh") return b.price - a.price;
//   //     return b.id - a.id;
//   //   });
//   const filtered = products.filter((p) => {
//   return (
//     p.price <= price &&
//     (brands.length === 0 || brands.includes(p.brand)) &&
//     p.rating >= rating
//   );
// });


// function toggleBrand(brand: string) {
//   setBrands((list) =>
//     list.includes(brand) ? list.filter((b) => b !== brand) : [...list, brand]
//   );
// }




//   return (
//     <section className="bg-deepBlack min-h-screen px-6 py-28">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-[240px,1fr] gap-10">

//         {/* Sidebar Filters */}
//         {/* <div className="bg-neutral-900/40 p-4 rounded-2xl h-fit border border-white/5">
//           <h3 className="text-white font-semibold mb-5 text-lg">Categories</h3>
//           <ul className="flex lg:flex-col gap-3 flex-wrap">
//             {categories.map((cat) => (
//               <li key={cat}>
//                 <button
//                   onClick={() => setCategory(cat)}
//                   className={`px-4 py-2 text-sm rounded-xl border transition-all ${
//                     category === cat
//                       ? "bg-amberGold text-black border-amberGold"
//                       : "text-white/60 border-white/10 hover:border-amberGold/40"
//                   }`}
//                 >
//                   {cat.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div> */}

//         <aside className="bg-neutral-900/30 backdrop-blur-xl p-6 rounded-2xl border border-white/5 h-fit">

//   <h3 className="text-xl font-serif font-semibold text-white mb-6">Filter By</h3>

//   {/* Price Range */}
//   <div className="mb-6">
//     <p className="text-white/60 text-sm mb-2">Price Range</p>
//     <input
//       type="range"
//       min="0"
//       max="150"
//       onChange={(e) => setPrice(Number(e.target.value))}
//       className="w-full"
//     />
//     <p className="text-right text-amberGold">${price || 150}</p>
//   </div>

//   {/* Brand */}
//   <div className="mb-6">
//     <p className="text-white/60 text-sm mb-3">Brand</p>
//     {["Dior", "Creed", "Gucci", "Tom Ford"].map((b) => (
//       <label key={b} className="flex items-center gap-2 text-sm mb-2">
//         <input type="checkbox" onChange={() => toggleBrand(b)} /> {b}
//       </label>
//     ))}
//   </div>

//   {/* Rating */}
//   <div>
//     <p className="text-white/60 text-sm mb-3">Min Rating</p>
//     {[5,4,3,2,1].map((r) => (
//       <button
//         key={r}
//         onClick={() => setRating(r)}
//         className={`block w-full text-left text-sm mb-2 p-2 rounded-lg border transition ${
//           rating === r ? "border-amberGold text-amberGold" : "border-white/10 text-white/60 hover:border-amberGold/40"
//         }`}
//       >
//         ⭐ {r}+ Rating
//       </button>
//     ))}
//   </div>

// </aside>


//         {/* Products + Sorting */}
//         <div>
//           <div className="flex justify-between items-center mb-10 flex-wrap gap-5">

//             <h2 className="text-4xl font-serif font-bold text-amberGold">
//               Our Collection
//             </h2>

//             <div className="relative">
//               <button
//                 onClick={() => setSort(sort === "open" ? "newest" : "open")}
//                 className="flex items-center gap-1 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-white/60 text-sm"
//               >
//                 Sort By <ChevronDown size={16} />
//               </button>

//               {sort === "open" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="absolute right-0 mt-2 w-44 bg-black/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden"
//                 >
//                   {sorting.map((s) => (
//                     <button
//                       key={s.id}
//                       onClick={() => setSort(s.id)}
//                       className="block w-full text-left px-4 py-2 text-white/70 hover:text-amberGold hover:bg-amberGold/10 text-sm transition"
//                     >
//                       {s.label}
//                     </button>
//                   ))}
//                 </motion.div>
//               )}
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
//             {filtered.map((p, i) => (
//               <motion.div
//                 key={p.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-neutral-900 p-4 rounded-2xl border border-white/5"
//               >
//                 <div className="h-48 bg-white/5 rounded-xl mb-3 flex items-center justify-center text-white/40">
//                   {/* Image */}
//                   <Image src={p.img} alt={p.title} width={192} height={192} className="rounded-xl object-cover" />
//                 </div>

//                 <h4 className="font-medium text-white">{p.title}</h4>
//                 <p className="text-amberGold font-semibold text-lg mt-1">${p.price}</p>

//                 <Link
//                   href={`/shop/${p.id}`}
//                   className="mt-3 inline-block text-sm text-white/50 hover:text-amberGold transition"
//                 >
//                   View Details →
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SlidersHorizontal, Star, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

type Product = {
  id: number | string;
  name: string;
  price: number;
  brand: string;
  rating: number;
  img: string;
};

const products: Product[] = [
  { id: 1, name: "Royal Oud", price: 120, brand: "Arabian Scents", rating: 4.5, img: "/perfumes/oud.jpg" },
  { id: 2, name: "Midnight Bloom", price: 80, brand: "Flora London", rating: 4.2, img: "/perfumes/bloom.jpg" },
  { id: 3, name: "Velvet Noir", price: 150, brand: "Luxury Paris", rating: 5, img: "/perfumes/noir.jpg" },
  { id: 4, name: "Citrus Vibe", price: 60, brand: "Fresh Co", rating: 3.9, img: "/perfumes/citrus.jpg" },
];

export default function ShopPage() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [brand, setBrand] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  const addItem = useCartStore((s) => s.addItem);

  const filtered = useMemo(() => {
    return products.filter(
      (p) =>
        p.price >= minPrice &&
        p.price <= maxPrice &&
        (brand ? p.brand === brand : true) &&
        p.rating >= minRating
    );
  }, [minPrice, maxPrice, brand, minRating]);

  const brands = useMemo(() => Array.from(new Set(products.map((p) => p.brand))), []);

  return (
    <section className="min-h-screen bg-deepBlack pt-28 pb-16 px-6 text-softWhite">
      <div className="max-w-7xl mx-auto">

        {/* Header + Filter Button */}
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif text-amberGold"
          >
            Shop Perfumes
          </motion.h1>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-sm"
          >
            <SlidersHorizontal size={16} /> Filters
          </motion.button>

          <div className="hidden md:flex flex items-center gap-3">
            <SlidersHorizontal className="text-amberGold" size={20} />
            <span className="text-white/60">Filter your scent</span>
          </div>
        </div>

        {/* Filters (collapsible on mobile) */}
        <motion.div
          initial={false}
          animate={{ height: filterOpen ? "auto" : 0, opacity: filterOpen ? 1 : 0 }}
          className="md:h-auto md:opacity-100 overflow-hidden bg-neutral-900/30 border border-white/5 rounded-2xl p-6 mb-10"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-end">
            
            {/* Price Range */}
            <div className="space-y-1">
              <label className="text-xs text-white/60">Min Price</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 outline-none text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-white/60">Max Price</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 outline-none text-sm"
              />
            </div>

            {/* Brand */}
            <div className="space-y-1">
              <label className="text-xs text-white/60">Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 outline-none text-sm cursor-pointer"
              >
                <option value="">All Brands</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div className="space-y-1">
              <label className="text-xs text-white/60">Min Rating</label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 outline-none text-sm cursor-pointer"
              >
                <option value={0}>All</option>
                <option value={4}>4★ and up</option>
                <option value={4.5}>4.5★ and up</option>
                <option value={5}>5★ only</option>
              </select>
            </div>

          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-neutral-900/40 border border-white/5 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-56 relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-xs text-amberGold">
                  <Star size={12} /> {p.rating}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-serif font-semibold text-white">{p.name}</h3>
                <p className="text-xs text-white/60 mb-4">{p.brand}</p>

                <div className="text-xl font-bold text-amberGold mb-5">${p.price.toFixed(2)}</div>

                {/* Add to Cart */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => addItem({ id: p.id, name: p.name, price: p.price, img: p.img })}
                  className="w-full flex justify-center items-center gap-2 px-3 py-2 bg-amberGold text-black font-semibold rounded-xl shadow-md text-sm"
                >
                  <ShoppingCart size={16} /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
