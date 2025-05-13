import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../components/products/ProductGridHome';

// export interface IProductCart extends IProduct {
//   quantity: number;
// }

interface OrderState {
  items: IProduct[];
}

const initialState: OrderState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      const existing = state.items.find(p => p.id === action.payload.id);
      if (existing) {
        console.log(action.payload);
        existing.quantity += action.payload.quantity;
      } else {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const product = state.items.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    clearOrder(state) {
      state.items = [];
    },
  },
});

export const { addProduct, removeProduct, updateQuantity, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
