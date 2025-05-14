'use client';

import { useSelector } from "react-redux";
import { RootState } from '@/app/store/store';
import Link from "next/link";
import { useMemo } from "react";
import { calculateTotal } from "@/app/utils/carts";

const CartTotal = () => {
    const items = useSelector((state: RootState) => state.order.items);

    const totalMoney = useMemo(() => calculateTotal(items), [items]);

    return (
        <div className="col-lg-4 col-md-12 mt-md-30px">
            <div className="grand-totall">
                <div className="title-wrap">
                    <h4 className="cart-bottom-title section-bg-gary-cart">Tổng tiền</h4>
                </div>
                <h5>Tổng sản phẩm <span>${totalMoney}</span></h5>
                <div className="total-shipping">
                    <h5>Total shipping</h5>
                    <ul>
                        <li> Standard <span>$20.00</span></li>
                    </ul>
                </div>
                <h4 className="grand-totall-title">Grand Total <span>${totalMoney + 20}</span></h4>
                <Link href="/checkout">Xác nhận thanh toán</Link>
            </div>
        </div>
    )
}

export default CartTotal;