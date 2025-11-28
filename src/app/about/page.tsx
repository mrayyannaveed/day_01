"use client";

import { motion } from "framer-motion";
import { Droplet, Heart, Globe, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-deepBlack text-softWhite min-h-screen px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-amberGold mb-4">
            About ScentsWorld
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Crafting emotions through premium, elegant & unforgettable fragrances.
          </p>
        </motion.div>

        {/* Brand Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center bg-neutral-900/30 p-8 rounded-2xl border border-white/5"
        >
          <div>
            <h2 className="text-3xl font-serif font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="text-amberGold" /> Our Story
            </h2>
            <p className="text-sm leading-relaxed text-white/60">
              At ScentsWorld, we believe a fragrance is more than a scent — it's a feeling, a memory and a statement. 
              Our mission is to deliver world-class perfumes crafted from nature’s finest elements and curated for those who value elegance.
            </p>
          </div>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-64 bg-white/5 rounded-xl flex justify-center items-center text-white/30"
          >
            Image
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {[
            { icon: <Globe size={24} />, title: "Global Quality", desc: "Sourced from top fragrance hubs around the world." },
            { icon: <Heart size={24} />, title: "Crafted with Love", desc: "Made for passion, elegance & emotion." },
            { icon: <Droplet size={24} />, title: "Premium Oils", desc: "Long-lasting concentrated perfume blends." },
            { icon: <Sparkles size={24} />, title: "Luxury Experience", desc: "Designed for confidence & statement." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-neutral-900/40 p-5 rounded-2xl border border-white/5 shadow-xl"
            >
              <div className="text-amberGold mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white/50 text-xs mt-2">{item.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
