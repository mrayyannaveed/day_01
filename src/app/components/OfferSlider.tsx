"use client";
import { motion } from "framer-motion";

export default function OfferSlider() {
  const offers = [
    "Free Shipping on orders over $70",
    "Get 10% off your first order",
    "New Luxury Scents Added!",
  ];

  return (
    <div className="bg-amberGold text-white py-2 overflow-hidden fixed top-[72px] w-full z-40">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="whitespace-nowrap flex gap-24 text-sm font-medium px-10"
      >
        {offers.concat(offers).map((o, i) => (
          <span key={i}>{o}</span>
        ))}
      </motion.div>
    </div>
  );
}
