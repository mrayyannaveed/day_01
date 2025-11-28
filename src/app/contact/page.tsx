"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-deepBlack text-softWhite min-h-screen px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-serif font-bold text-amberGold mb-6">
            Get In Touch
          </h1>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin className="text-amberGold mt-1" size={18} /> 
              123 Fragrance Street, New York, USA
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <Phone className="text-amberGold" size={18} /> 
              +1 234 567 890
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <Mail className="text-amberGold" size={18} /> 
              support@scentsworld.com
            </div>
          </div>

          <p className="text-white/50 text-xs">
            We respond within 24 hours. Your fragrance journey matters to us ✨
          </p>
        </motion.div>

        {/* Right Contact Form */}
        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center bg-neutral-900/30 p-10 rounded-2xl border border-white/5"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="text-amberGold mb-4"
              >
                <Send size={40} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white">Message Sent!</h3>
              <p className="text-sm text-white/60 mt-2 text-center">
                Thank you for contacting us, we'll reach you soon.
              </p>
            </motion.div>
          ) : (

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-900/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-xl space-y-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none text-sm text-white"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none text-sm text-white"
                required
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl outline-none text-sm text-white resize-none"
                required
              />

              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className="w-full p-3 bg-amberGold text-deepBlack font-semibold rounded-xl flex justify-center gap-2 items-center text-sm"
                type="submit"
              >
                <Send size={16} /> Send Message
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
