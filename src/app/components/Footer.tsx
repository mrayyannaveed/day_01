"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const social = [
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-black text-white/80 pt-16 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">

          {/* Brand Column */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
              <span className="text-amber-400">Scents</span>World
            </h2>
            <p className="text-sm text-white/50">
              Where elegance meets everlasting fragrance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {social.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ scale: 1.2, color: "#fbbf24" }}
                  className="hover:text-amber-400 transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {links.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5, color: "#fbbf24" }}>
                  <Link href={link.path} className="hover:text-amber-400 transition">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2"><MapPin size={16} /> 123 Fragrance Street</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +1 234 567 890</li>
              <li className="flex items-center gap-2"><Mail size={16} /> support@scentsworld.com</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-medium text-white mb-4">Newsletter</h3>
            <p className="text-sm text-white/50 mb-3">
              Subscribe for the latest fragrance drops & offers.
            </p>
            <div className="flex bg-white/5 border border-white/10 rounded-xl px-3 py-2 items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-sm placeholder:text-white/40"
              />
              <motion.button type="button" whileTap={{ scale: 0.9 }}>
                <Mail className="text-amber-400" />
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        {year && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center text-xs text-white/40 mt-14"
          >
            © {year} ScentsWorld. All rights reserved.
          </motion.div>
        )}

      </div>
    </footer>
  );
}
