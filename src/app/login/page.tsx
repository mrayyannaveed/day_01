"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <section className="min-h-screen bg-deepBlack flex justify-center items-center px-6 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-neutral-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-serif text-amberGold text-center">Welcome Back</h1>

        <input type="email" placeholder="Email" className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none" />
        <input type="password" placeholder="Password" className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none" />

        <motion.button whileTap={{ scale: 0.95 }} className="w-full p-3 bg-amberGold text-black font-semibold rounded-xl hover:opacity-90">
          Login
        </motion.button>

        <p className="text-center text-sm text-white/50">
          Don't have an account?{" "}
          <Link href="/register" className="text-amberGold hover:underline">Create one</Link>
        </p>
      </motion.div>
    </section>
  );
}
