import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  shipping: 12.0,
  tax: 0,
  total: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, selectedColor, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === product.id && item.selectedColor === selectedColor
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          images: product.images,
          selectedColor: selectedColor || product.colors[0],
          quantity: quantity,
          category: product.category,
          rating: product.rating,
          reviews: product.reviews,
          onSale: product.onSale,
        });
      }

      // Recalculate totals
      cartSlice.caseReducers.calculateTotals(state);
    },

    removeFromCart: (state, action) => {
      const { itemId, selectedColor } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === itemId && item.selectedColor === selectedColor)
      );

      // Recalculate totals
      cartSlice.caseReducers.calculateTotals(state);
    },

    updateQuantity: (state, action) => {
      const { itemId, selectedColor, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.id === itemId && item.selectedColor === selectedColor
      );

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (item) =>
              !(item.id === itemId && item.selectedColor === selectedColor)
          );
        } else {
          item.quantity = quantity;
        }
      }

      // Recalculate totals
      cartSlice.caseReducers.calculateTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      state.shipping = 12.0;
      state.tax = 0;
      state.total = 0;
    },

    setCartOpen: (state, action) => {
      state.isOpen = action.payload;
    },

    calculateTotals: (state) => {
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.subtotal = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Calculate tax (8% of subtotal)
      state.tax = state.subtotal * 0.08;

      // Calculate total
      state.total = state.subtotal + state.shipping + state.tax;
    },

    // Initialize cart from localStorage
    initializeCart: (state, action) => {
      if (action.payload) {
        return { ...state, ...action.payload };
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setCartOpen,
  calculateTotals,
  initializeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
