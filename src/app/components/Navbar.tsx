"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, ChevronDown } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import { useCartStore } from "@/store/cartStore";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [cartCounts, setCartCounts] = useState(2);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);

  const { theme, setTheme } = useTheme();
  const cartCount = useCartStore((state) => state.count);


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const shopLinks = [
    { name: "Men's Perfumes", path: "/shop/men" },
    { name: "Women's Perfumes", path: "/shop/women" },
    { name: "Unisex", path: "/shop/unisex" },
    { name: "Luxury Collection", path: "/shop/luxury" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="text-2xl font-bold tracking-wide text-white">
            <span className="text-amber-400">Scents</span>World
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 items-center relative">
          {navLinks.map((link, i) => (
            <motion.li key={link.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
              <Link href={link.path} className="text-white/90 font-medium hover:text-amber-400 transition relative group">
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}

          {/* Shop Dropdown */}
          <div
            onMouseEnter={() => setShopDropdown(true)}
            onMouseLeave={() => setShopDropdown(false)}
            className="relative"
            >
            <button className="text-white/90 font-medium hover:text-amber-400 flex items-center gap-1">
              Shop <ChevronDown size={16} />
            </button>




            <AnimatePresence>
              {shopDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-8 left-0 bg-black/80 text-white backdrop-blur-xl rounded-2xl shadow-xl w-48 py-3"
                >
                  {shopLinks.map((item) => (
                    <Link key={item.name} href={item.path} className="block px-4 py-2 hover:bg-amber-400/10 hover:text-amber-400 transition">
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-amber-400"
          >
            <Search size={20} />
          </motion.button>
        

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/cart" className="relative text-white hover:text-amberGold transition">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </motion.div>

            {/* Theme Toggle */}
        <motion.button
          whileHover={{ rotate: 180, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white hover:text-amberGold transition"
        >
          {theme === "dark" ? "🌙" : "☀"}
        </motion.button>


          {/* Auth Buttons */}
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/login" className="px-4 py-2 border border-white/30 text-white rounded-xl hover:bg-white/10 transition text-sm">
                Login
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/register" className="px-4 py-2 bg-amber-400 text-black font-semibold rounded-xl hover:bg-amber-300 transition text-sm">
                Register
              </Link>
            </motion.div>
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Animated Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-6 pb-4"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-2 gap-2">
              <Search className="text-amber-400" size={18} />
              <input
                type="text"
                placeholder="Search perfumes..."
                className="w-full bg-transparent outline-none text-white placeholder:text-white/60"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed top-0 right-0 w-64 h-screen bg-black/90 backdrop-blur-xl p-6 flex flex-col gap-6"
          >
            <h2 className="text-white text-xl font-bold flex items-center gap-2">
              <ShoppingBag className="text-amber-400" /> Menu
            </h2>

            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-amber-400 text-lg transition">
                {link.name}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              {shopLinks.map((item) => (
                <Link key={item.name} href={item.path} onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-amber-400 transition">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Search */}
            <div className="mt-4">
              <div className="flex items-center bg-white/10 rounded-xl px-3 py-2 gap-2 border border-white/20">
                <Search size={16} className="text-amber-400" />
                <input type="text" placeholder="Search..." className="w-full bg-transparent outline-none text-white placeholder:text-white/50" />
              </div>
            </div>

            {/* Mobile Auth */}
            <div className="flex gap-3 mt-2">
              <Link href="/login" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2 border border-white/30 text-white rounded-xl">Login</Link>
              <Link href="/register" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2 bg-amber-400 text-black font-semibold rounded-xl">Sign Up</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
