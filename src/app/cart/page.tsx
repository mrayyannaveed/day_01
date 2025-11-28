// // "use client";
// // import { motion } from "framer-motion";
// // import { useCartStore } from "@/store/cartStore";
// // import { Trash2, ShoppingBag } from "lucide-react";

// // export default function CartPage() {
// //   const count = useCartStore((s) => s.count);
// //   const resetCart = useCartStore((s) => s.resetCart);

// //   return (
// //     <section className="min-h-screen bg-deepBlack px-6 py-32 text-white flex flex-col items-center">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="w-full max-w-4xl"
// //       >
// //         <h1 className="text-5xl font-serif text-amberGold mb-8 flex items-center gap-3 justify-center">
// //           <ShoppingBag size={40} /> My Cart
// //         </h1>

// //         <div className="bg-neutral-900/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
// //           {count === 0 ? (
// //             <p className="text-center text-xl text-white/50 py-8">Your cart is empty</p>
// //           ) : (
// //             <>
// //               <div className="flex justify-between items-center">
// //                 <div className="flex items-center gap-3 text-xl">
// //                   <ShoppingBag className="text-amberGold" /> Items:
// //                   <span className="font-bold text-amberGold">{count}</span>
// //                 </div>

// //                 <motion.button
// //                   whileHover={{ scale: 1.1 }}
// //                   whileTap={{ scale: 0.9 }}
// //                   onClick={resetCart}
// //                   className="text-red-400 hover:text-red-300"
// //                 >
// //                   <Trash2 size={24} />
// //                 </motion.button>
// //               </div>

// //               <div className="mt-6 border-t border-white/10 pt-6 text-center">
// //                 <button className="px-6 py-2 bg-amberGold text-black font-semibold rounded-xl hover:opacity-90 transition">
// //                   Checkout Now
// //                 </button>
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }


// // src/app/cart/page.tsx
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Trash2 } from "lucide-react";
// import { useCartStore } from "@/store/cartStore";

// export default function CartPage() {
//   const items = useCartStore((s) => s.items);
//   const setQty = useCartStore((s) => s.setQty);
//   const removeItem = useCartStore((s) => s.removeItem);
//   const clearCart = useCartStore((s) => s.clearCart);
//   const totalItems = useCartStore((s) => s.totalItems)();
//   const totalPrice = useCartStore((s) => s.totalPrice)();

//   return (
//     <section className="min-h-screen bg-deepBlack pt-28 pb-20 px-6 text-white">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl font-serif text-amberGold mb-8">Your Bag</h1>

//         {items.length === 0 ? (
//           <div className="bg-neutral-900/30 p-12 rounded-2xl text-center border border-white/5">
//             <p className="text-white/60 mb-4">Your cart is empty.</p>
//             <Link href="/shop" className="inline-block px-6 py-2 bg-amberGold text-black rounded-xl">
//               Continue Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="grid lg:grid-cols-[1fr,320px] gap-8">
//             <div className="space-y-4">
//               {items.map((it) => (
//                 <motion.div
//                   key={it.id}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex items-center gap-4 bg-neutral-900/30 p-4 rounded-2xl border border-white/5"
//                 >
//                   <div className="w-28 h-20 bg-white/5 rounded-lg overflow-hidden flex items-center justify-center">
//                     {it.img ? (
//                       // if you use next/image and have remote images, add domains in next.config.js
//                       <Image src={it.img} alt={it.name} width={200} height={120} className="object-cover" />
//                     ) : (
//                       <div className="text-white/30">{it.name}</div>
//                     )}
//                   </div>

//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-white font-semibold">{it.name}</h3>
//                         <p className="text-white/50 text-sm">${it.price.toFixed(2)}</p>
//                       </div>
//                       <button onClick={() => removeItem(it.id)} className="text-white/40 hover:text-red-400">
//                         <Trash2 />
//                       </button>
//                     </div>

//                     <div className="mt-3 flex items-center gap-3">
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => setQty(it.id, Math.max(1, it.qty - 1))}
//                           className="px-3 py-1 bg-white/5 rounded-md"
//                         >
//                           −
//                         </button>
//                         <div className="px-3 py-1 rounded-md bg-white/2">{it.qty}</div>
//                         <button
//                           onClick={() => setQty(it.id, it.qty + 1)}
//                           className="px-3 py-1 bg-white/5 rounded-md"
//                         >
//                           +
//                         </button>
//                       </div>

//                       <div className="text-white/60 text-sm">
//                         Subtotal: <span className="font-semibold text-amberGold">${(it.qty * it.price).toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Summary */}
//             <aside className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5">
//               <h4 className="text-white/60">Order Summary</h4>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className="text-white/50">Items</span>
//                 <span className="font-semibold text-white">{totalItems}</span>
//               </div>

//               <div className="mt-3 flex justify-between items-center text-amberGold text-xl font-semibold">
//                 <span>Total</span>
//                 <span>${totalPrice.toFixed(2)}</span>
//               </div>

//               <div className="mt-6 space-y-3">
//                 <button className="w-full px-4 py-3 bg-amberGold text-black rounded-xl font-semibold">Checkout</button>
//                 <button onClick={() => clearCart()} className="w-full px-4 py-3 border border-white/10 rounded-xl text-white/60">Clear Cart</button>
//               </div>
//             </aside>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalItems = useCartStore((s) => s.totalItems)();
  const totalPrice = useCartStore((s) => s.totalPrice)();

  const router = useRouter();

  // Example: If you want to prefill cart with sample items for dev/testing,
  // uncomment and adjust. Remove for production.
  // useEffect(() => {
  //   if (items.length === 0) {
  //     addItem({ id: 1, name: "Royal Oud", price: 99, img: "/perfumes/oud.jpg" }, 1);
  //   }
  // }, []);

  const currency = (n: number) => `$${n.toFixed(2)}`;

  return (
    <section className="min-h-screen bg-deepBlack pt-28 pb-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif text-amberGold mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="bg-neutral-900/30 p-12 rounded-2xl text-center border border-white/5">
            <p className="text-white/60 mb-4">Your cart is empty.</p>
            <Link href="/shop" className="inline-block px-6 py-2 bg-amberGold text-black rounded-xl">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr,340px] gap-8">
            <div className="space-y-4">
              {items.map((it) => (
                <motion.div
                  key={it.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 bg-neutral-900/30 p-4 rounded-2xl border border-white/5"
                >
                  <div className="w-28 h-20 bg-white/5 rounded-lg overflow-hidden flex items-center justify-center">
                    {it.img ? (
                      // next/image requires explicit width/height or fill (use as needed)
                      <Image src={it.img} alt={it.name} width={200} height={120} className="object-cover" />
                    ) : (
                      <div className="text-white/30">{it.name}</div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-semibold">{it.name}</h3>
                        <p className="text-white/50 text-sm">{currency(it.price)}</p>
                      </div>
                      <button onClick={() => removeItem(it.id)} className="text-white/40 hover:text-red-400">
                        <Trash2 />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(it.id, Math.max(1, it.qty - 1))}
                          className="px-3 py-1 bg-white/5 rounded-md"
                          aria-label={`Decrease ${it.name} quantity`}
                        >
                          −
                        </button>

                        <div className="px-3 py-1 rounded-md bg-white/2">{it.qty}</div>

                        <button
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="px-3 py-1 bg-white/5 rounded-md"
                          aria-label={`Increase ${it.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <div className="text-white/60 text-sm">
                        Subtotal: <span className="font-semibold text-amberGold">{currency(it.qty * it.price)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <aside className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5">
              <h4 className="text-white/60">Order Summary</h4>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-white/50">Items</span>
                <span className="font-semibold text-white">{totalItems}</span>
              </div>

              <div className="mt-3 flex justify-between items-center text-amberGold text-2xl font-bold">
                <span>Total</span>
                <span>{currency(totalPrice)}</span>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full px-4 py-3 bg-amberGold text-black rounded-xl font-semibold hover:opacity-95"
                >
                  Proceed to Checkout
                </button>

                <button onClick={() => clearCart()} className="w-full px-4 py-3 border border-white/10 rounded-xl text-white/60">
                  Clear Cart
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
