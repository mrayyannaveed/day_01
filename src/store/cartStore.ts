import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  qty: number;
  img?: string;
  meta?: Record<string, any>;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: CartItem["id"]) => void;
  setQty: (id: CartItem["id"], qty: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
  count: number;
  syncCount: () => void;
};

// ✅ Safe storage for SSR + correct types
const storage = {
  getItem: (key: string) => {
    if (typeof window === "undefined") return null;
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: (key: string, value: any) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  },
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      count: 0,

      addItem: (item, qty = 1) =>
        set((state) => {
          const exists = state.items.find((i) => i.id === item.id);
          const updated = exists
            ? state.items.map((i) =>
                i.id === item.id ? { ...i, qty: i.qty + qty } : i
              )
            : [...state.items, { ...item, qty }];
          return { items: updated, count: updated.reduce((s, i) => s + i.qty, 0) };
        }),

      removeItem: (id) =>
        set((state) => {
          const updated = state.items.filter((i) => i.id !== id);
          return { items: updated, count: updated.reduce((s, i) => s + i.qty, 0) };
        }),

      setQty: (id, qty) =>
        set((state) => {
          const updated = state.items.map((i) => (i.id === id ? { ...i, qty } : i));
          return { items: updated, count: updated.reduce((s, i) => s + i.qty, 0) };
        }),

      clearCart: () => set({ items: [], count: 0 }),

      totalItems: () => get().items.reduce((s, i) => s + i.qty, 0),
      totalPrice: () => get().items.reduce((s, i) => s + i.qty * i.price, 0),

      syncCount: () =>
        set({ count: get().items.reduce((s, i) => s + i.qty, 0) }),
    }),
    {
      name: "scentsworld-cart",
      storage, // ✅ compatible with zustand persist
      onRehydrateStorage: () => (state) => {
        if (state) state.syncCount();
      },
    }
  )
);
