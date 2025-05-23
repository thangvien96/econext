import { IProduct } from "../types";


export function calculateTotal(items: IProduct[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}