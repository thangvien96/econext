'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { RootState } from '@/app/store/store';
import { IModalCart } from "../header/HeaderBottom";
import Link from 'next/link';
import { removeProduct } from '@/app/store/orderSlice';
import { calculateTotal } from '@/app/utils/carts';
import { useCartTotal } from '@/app/hooks/useCartTotal';


const OffCanvasCart = ({ openModalCart, setOpenModalCart } : IModalCart) => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.order.items);
    console.log(items)

    const totalMoney = useCartTotal();

    const handleDeleteProductInCart = (productId: string) => {
        dispatch(removeProduct(productId));
    }

    return (
        <div id="offcanvas-cart" className={`offcanvas offcanvas-cart ${openModalCart ? 'offcanvas-open' : ''}`}>
            <div className="inner">
                <div className="head">
                    <span className="title">Cart</span>
                    <button className="offcanvas-close" onClick={() => setOpenModalCart(false)}>×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        {
                            items.map((prd) => {
                                return (
                                    <li key={`${prd.id}`}>
                                        <Link href={`/${prd.slug}`} className="image">
                                            <img src={prd.images[0]} alt="Cart product Image" />
                                        </Link>
                                        <div className="content">
                                            <Link href={`/${prd.slug}`} className="title">{prd.name}</Link>
                                            <span className="quantity-price">{prd.quantity} <span>x</span><span className="amount">${prd.price}</span></span>
                                            <a className="remove" onClick={() => handleDeleteProductInCart(prd.id)}>×</a>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="foot">
                    <div className="sub-total">
                        <table className="table">
                            <tbody>
                                {/* <tr>
                                    <td className="text-start">Sub-Total :</td>
                                    <td className="text-end">${totalMoney}</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Eco Tax (-2.00) :</td>
                                    <td className="text-end">$4.52</td>
                                </tr>
                                <tr>
                                    <td className="text-start">VAT (20%) :</td>
                                    <td className="text-end">$104.66</td>
                                </tr> */}
                                <tr>
                                    <td className="text-start">Total :</td>
                                    <td className="text-end theme-color">${totalMoney}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="buttons">
                        <Link href="/cart" onClick={() => setOpenModalCart(false)} className="btn btn-dark btn-hover-primary mb-30px">view cart</Link>
                        <a href="checkout.html" className="btn btn-outline-dark current-btn">checkout</a>
                    </div>
                    <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
                </div>
            </div>
        </div>
    )
}

export default OffCanvasCart;