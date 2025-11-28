"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";


export default function ProductGrid() {
  const [count, setCount] = useState(0);
  // const addToCart = useCartStore((state) => state.addToCart);
  const addItem = useCartStore((state) => state.addItem);

  const products = [
    { id: 1, name: "Ocean Bliss", price: "$49", img: "/p1.jpg" },
    { id: 2, name: "Rose Velvet", price: "$55", img: "/p2.jpg" },
    { id: 3, name: "Azaro Chrome", price: "$60", img: "/p3.jpg" },
    { id: 4, name: "Royal Chanel", price: "$99", img: "/p4.jpg" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-serif font-bold text-center text-white mb-14">
          Best Sellers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-neutral-900 p-5 rounded-2xl shadow-xl border border-white/5"
            >

              {/* Perfume Img */}
              <div className="h-56 bg-white/5 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                {/* Placeholder until you replace real image */}
                <Image src={product.img} alt={product.name} className="object-cover h-full w-full" width={1000} height={1000} />
                {/* <span className="text-white/30">Image</span> */}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {product.name}
              </h3>

              <p className="text-amber-400 font-medium mt-1 text-lg">
                {product.price}
              </p>

              {/* Add to Cart Button */}
              <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => addItem({ ...product, price: parseFloat(product.price.replace('$', '')) })}
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-400 text-black font-semibold rounded-xl cursor-pointer"
            >
              <ShoppingCart size={18} /> Add to Cart
            </motion.button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
