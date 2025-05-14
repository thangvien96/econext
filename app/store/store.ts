import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import cartUI from './cartUI';

function saveToLocalStorage(state: any) {
  try {
    const serialized = JSON.stringify(state.order.items);
    localStorage.setItem('cart', serialized);
  } catch (e) {
    console.warn('Không thể lưu localStorage', e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialized = localStorage.getItem('cart');
    if (!serialized) return undefined;
    return { order: { items: JSON.parse(serialized) } };
  } catch (e) {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    order: orderReducer,
    cartUI
  },
});

// Theo dõi thay đổi và lưu vào localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
