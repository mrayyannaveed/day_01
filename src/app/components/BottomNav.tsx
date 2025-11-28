"use client";
import Link from "next/link";
import { Home, ShoppingCart, User, Search } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 py-3 flex justify-around text-white/60 z-50">
      <Link href="/" className="hover:text-amberGold transition"><Home size={22} /></Link>
      <Link href="/shop" className="hover:text-amberGold transition"><Search size={22} /></Link>
      <Link href="/cart" className="hover:text-amberGold transition"><ShoppingCart size={22} /></Link>
      <Link href="/login" className="hover:text-amberGold transition"><User size={22} /></Link>
    </div>
  );
}
