import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { useMemo } from 'react';

export function useCartTotal() {
  const items = useSelector((state: RootState) => state.order.items);
  return useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );
}
