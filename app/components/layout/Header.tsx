'use client'

import Menu from "../ui/Menu"
import OffCanvasCart from "../cart/OffCanvasCart"
import HeaderBottom from "../header/HeaderBottom"
import { useState } from "react"
import OffCanvasOverlay from "../ui/OffCanvasOverlay"

const Header = () => {
    const [openModalCart, setOpenModalCart] = useState<boolean>(false);

    return (
        <>
            <div className="header section">
            
                <div className="header-top section-fluid bg-black">
                    <div className="container">
                        <div className="row row-cols-lg-2 align-items-center">
                            
                            <div className="col text-center text-lg-start">
                                <div className="header-top-massege">
                                    <p>Gọi mua hàng: 0988.855.155 </p>
                                </div>
                            </div>
                            
                            <div className="col d-none d-lg-block">
                                <div className="header-top-set-lan-curr d-flex justify-content-end">
                                    
                                    <div className="header-top-curr dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown"> Giới thiệu về ECO LIGHT </button>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a className="dropdown-item" href="#">English</a></li>
                                            <li><a className="dropdown-item" href="#">Italiano</a></li>
                                            <li><a className="dropdown-item" href="#">Français</a></li>
                                            <li><a className="dropdown-item" href="#">Filipino</a></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="header-top-curr dropdown">
                                        <button className="dropdown-toggle pr-0 border-0" data-bs-toggle="dropdown">Hướng dẫn đường đi </button>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a className="dropdown-item" href="#">USD $</a></li>
                                            <li><a className="dropdown-item" href="#">EUR €</a></li>
                                            <li><a className="dropdown-item" href="#">POUND £</a></li>
                                            <li><a className="dropdown-item" href="#">FRANC ₣</a></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <HeaderBottom
                    openModalCart={openModalCart}
                    setOpenModalCart={setOpenModalCart}
                />
                
                <div className="header-bottom d-lg-none sticky-nav bg-white">
                    <div className="container position-relative">
                        <div className="row align-self-center">
                        
                            <div className="col-auto align-self-center">
                                <div className="header-logo">
                                    <a href="index.html"><img src="/images/logo/logo.png" alt="Site Logo" /></a>
                                </div>
                            </div>
                            
                            <div className="col align-self-center">
                                <div className="header-actions">
                                    <div className="header_account_list">
                                        <a href="javascript:void(0)" className="header-action-btn search-btn"><i
                                                className="icon-magnifier"></i></a>
                                        <div className="dropdown_search">
                                            <form className="action-form" action="#">
                                                <input className="form-control" placeholder="Enter your search key" type="text" />
                                                <button className="submit" type="submit"><i className="icon-magnifier"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    
                                    <div className="header-bottom-set dropdown">
                                        <button className="dropdown-toggle header-action-btn" data-bs-toggle="dropdown"><i
                                                className="icon-user"></i></button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a className="dropdown-item" href="my-account.html">My account</a></li>
                                            <li><a className="dropdown-item" href="checkout.html">Checkout</a></li>
                                            <li><a className="dropdown-item" href="login.html">Sign in</a></li>
                                        </ul>
                                    </div>
                                    
                                    {/* <a href="#offcanvas-cart" className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                        <i className="icon-handbag"></i>
                                        <span className="header-action-num">01</span>
                                    <span className="cart-amount">€30.00</span>
                                    </a> */}
                                    {/* <a href="#offcanvas-mobile-menu" className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                        <i className="icon-menu"></i>
                                    </a> */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <Menu />
                
            </div>

            <OffCanvasCart 
                openModalCart={openModalCart}
                setOpenModalCart={setOpenModalCart} 
            />

            <OffCanvasOverlay
                openModalCart={openModalCart}
            />
        </>
    )
}

export default Header