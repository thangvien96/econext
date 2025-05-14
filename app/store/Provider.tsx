'use client';

import { useEffect } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { addProduct } from './orderSlice';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 👇 Chỉ chạy trên client
    const json = localStorage.getItem('cart');
    if (json) {
      const items = JSON.parse(json);
      for (const item of items) {
        store.dispatch(addProduct(item)); // ✅ Cập nhật lại Redux
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
