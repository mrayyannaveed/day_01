

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", { redirect: false, email: form.email, password: form.password });
    if (res && !res.error) {
      router.push("/checkout"); // or wherever
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen bg-deepBlack flex items-center justify-center px-6">
      <form onSubmit={handle} className="w-full max-w-md bg-neutral-900/30 p-8 rounded-2xl border border-white/5">
        <h2 className="text-2xl text-amberGold font-serif mb-4">Sign In</h2>
        <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-3 mb-3 rounded-lg bg-white/5 outline-none text-white" />
        <input value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} type="password" placeholder="Password" className="w-full p-3 mb-4 rounded-lg bg-white/5 outline-none text-white" />
        <button className="w-full p-3 bg-amberGold text-black rounded-lg">Sign in</button>
      </form>
    </section>
  );
}
