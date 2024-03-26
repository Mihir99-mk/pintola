import create from "zustand";

interface CartItem {
  count: number;
  productId: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
}

// Function to load cart from localStorage
const loadCartFromLocalStorage = (): CartItem[] => {
  const cartString = localStorage.getItem("cart");
  if (cartString) {
    return JSON.parse(cartString);
  }
  return [];
};

// Function to save cart to localStorage
const saveCartToLocalStorage = (cart: CartItem[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const useStore = create<CartStore>((set) => ({
  cart: loadCartFromLocalStorage(), // Load cart from localStorage
  addToCart: (productId, quantity) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex((item) => item.productId === productId);

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += quantity;
        updatedCart[existingItemIndex].count += quantity; // Update count based on quantity
        saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
        return { cart: updatedCart };
      } else {
        const updatedCart = [
          ...state.cart,
          {
            productId,
            quantity,
            count: quantity, // Initialize count with quantity for new items
          },
        ];
        saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
        return { cart: updatedCart };
      }
    }),
}));
