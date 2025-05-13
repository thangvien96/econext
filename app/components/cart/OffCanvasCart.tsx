'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { IModalCart } from "../header/HeaderBottom";
import Link from 'next/link';

const OffCanvasCart = ({ openModalCart, setOpenModalCart } : IModalCart) => {
    const items = useSelector((state: RootState) => state.order.items);
    console.log(items)

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
                                            <span className="quantity-price">{prd.quantity} x <span className="amount">${prd.price}</span></span>
                                            <a className="remove">×</a>
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
                                <tr>
                                    <td className="text-start">Sub-Total :</td>
                                    <td className="text-end">$523.30</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Eco Tax (-2.00) :</td>
                                    <td className="text-end">$4.52</td>
                                </tr>
                                <tr>
                                    <td className="text-start">VAT (20%) :</td>
                                    <td className="text-end">$104.66</td>
                                </tr>
                                <tr>
                                    <td className="text-start">Total :</td>
                                    <td className="text-end theme-color">$632.48</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="buttons">
                        <a href="cart.html" className="btn btn-dark btn-hover-primary mb-30px">view cart</a>
                        <a href="checkout.html" className="btn btn-outline-dark current-btn">checkout</a>
                    </div>
                    <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
                </div>
            </div>
        </div>
    )
}

export default OffCanvasCart;