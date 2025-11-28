
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

          <div className="hidden md:flex items-center gap-3">
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
