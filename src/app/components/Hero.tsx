"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-linear-to-b from-black via-neutral-900 to-black overflow-hidden">

      {/* Background Glow Animation */}
      <motion.div
        initial={{ opacity: 0.3, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
        }}
        className="absolute w-[600px] h-[600px] bg-amber-500 rounded-full blur-[160px]"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          Discover The Art of <span className="text-amber-400">Fragrance</span>
        </h1>
        <p className="text-lg text-white/60 mb-8">
          Premium scents crafted for elegance, passion & confidence.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/shop"
            className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-2xl shadow-lg"
          >
            Explore Collection
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
