'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/store';
import { useEffect } from 'react';
import { resetShake } from '@/app/store/cartUI';
import { ShoppingCart } from "lucide-react"

const CartIcon = ({ setOpenModalCart } : { setOpenModalCart : (a: boolean) => void }) => {
    const shouldShake = useSelector((state: RootState) => state.cartUI.shouldShake);
    const itemsCart = useSelector((state: RootState) => state.order.items);
    const dispatch = useDispatch();

    useEffect(() => {
        if (shouldShake) {
          const timer = setTimeout(() => dispatch(resetShake()), 600); // reset sau khi shake xong
          return () => clearTimeout(timer);
        }
      }, [shouldShake, dispatch]);

    return (
        <a onClick={() => setOpenModalCart(true)} className={`header-action-btn header-action-btn-cart offcanvas-toggle pr-0 ${shouldShake ? 'animate-bounce' : ''}`}>
            <ShoppingCart id="cart-icon" />
            <span className="header-action-num">{itemsCart.length}</span>
            {/* <span className="cart-amount">€30.00</span> */}
        </a>
    )
}

export default CartIcon