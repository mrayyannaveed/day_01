// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { motion } from "framer-motion";
// import { useCartStore } from "@/store/cartStore";

// export default function CheckoutPage() {
//   const { status } = useSession();
//   const router = useRouter();
//   const items = useCartStore((s) => s.items);
//   const total = useCartStore((s) => s.totalPrice)();

//   useEffect(() => {
//     // client-side safety: if not authenticated redirect (middleware does server-side redirect too)
//     if (status === "unauthenticated") {
//       router.push("/auth/signin");
//     }
//   }, [status, router]);

//   if (status === "loading") {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <section className="min-h-screen bg-deepBlack pt-28 pb-20 px-6 text-white">
//       <div className="max-w-4xl mx-auto">
//         <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-serif text-amberGold mb-8">
//           Checkout
//         </motion.h1>

//         <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 space-y-4">
//           {items.length === 0 ? (
//             <p className="text-white/60">Your cart is empty.</p>
//           ) : (
//             <>
//               <ul className="space-y-3">
//                 {items.map((it) => (
//                   <li key={it.id} className="flex justify-between text-sm">
//                     <span>{it.name} × {it.qty}</span>
//                     <span className="font-semibold text-amberGold">${(it.qty * it.price).toFixed(2)}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-4">
//                 <span className="text-white/60">Total</span>
//                 <span className="text-2xl font-bold text-amberGold">${total.toFixed(2)}</span>
//               </div>

//               <div className="mt-6 flex gap-3">
//                 <button className="px-4 py-2 bg-amberGold text-black rounded-lg">Pay Now</button>
//                 <button onClick={() => router.push("/cart")} className="px-4 py-2 border border-white/10 rounded-lg">Edit Cart</button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const { data: session, status } = useSession(); // ✅ always destructure data
  const router = useRouter();
  const items = useCartStore((s) => s.items);

  // useMemo to avoid recalculation every render
  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);

  useEffect(() => {
    // redirect client-side if unauthenticated
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  // Show loading while session is loading
  if (status === "loading" || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-deepBlack pt-28 pb-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-amberGold mb-8"
        >
          Checkout
        </motion.h1>

        <div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 space-y-4">
          {items.length === 0 ? (
            <p className="text-white/60">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it.id} className="flex justify-between text-sm">
                    <span>{it.name} × {it.qty}</span>
                    <span className="font-semibold text-amberGold">
                      ${(it.qty * it.price).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-4">
                <span className="text-white/60">Total</span>
                <span className="text-2xl font-bold text-amberGold">${total.toFixed(2)}</span>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-amberGold text-black rounded-lg">Pay Now</button>
                <button
                  onClick={() => router.push("/cart")}
                  className="px-4 py-2 border border-white/10 rounded-lg"
                >
                  Edit Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
