
const Header = () => {
  return (
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
        
        <div className="header-bottom d-none d-lg-block">
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
                            
                            <a href="#offcanvas-cart" className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i className="icon-handbag"></i>
                                <span className="header-action-num">01</span>
                               <span className="cart-amount">€30.00</span>
                            </a>
                            <a href="#offcanvas-mobile-menu" className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i className="icon-menu"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
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
                            
                            <a href="#offcanvas-cart" className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i className="icon-handbag"></i>
                                <span className="header-action-num">01</span>
                               <span className="cart-amount">€30.00</span>
                            </a>
                            <a href="#offcanvas-mobile-menu" className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i className="icon-menu"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="bg-gray d-none d-lg-block sticky-nav">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-12 align-self-center">
                        <div className="main-menu manu-color-white">
                            <ul>
                                <li><a href="/">Trang chủ</a></li>
                                <li className="dropdown position-static"><a href="#">Sản phẩm <i
                                            className="ion-ios-arrow-down"></i></a>
                                    <ul className="mega-menu d-block">
                                        <li className="d-flex">
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Đèn trong nhà</a></li>
                                                <li><a href="/san-pham.html">Led âm trần</a></li>
                                                <li><a href="/san-pham.html">Mini spotlight</a></li>
                                                <li><a href="/san-pham.html">Track light</a></li>
                                                <li><a href="/san-pham.html">Surface mounted</a></li>
                                                <li><a href="/san-pham.html">Đèn bóng cao cấp</a></li>
                                                <li><a href="/san-pham.html">Ray nam châm</a></li>
                                                <li><a href="/san-pham.html">Ray nam châm siêu mỏng</a></li>
                                                <li><a href="/san-pham.html">Ray tủ mini</a></li>
                                                <li><a href="/san-pham.html">LED dây</a></li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Đèn ngoài trời</a></li>
                                                <li><a href="/san-pham.html">Đèn âm đất</a></li>
                                                <li><a href="/san-pham.html">Đèn chiếu điểm</a></li>
                                                <li><a href="/san-pham.html">Đèn tường</a></li>
                                                <li><a href="/san-pham.html">Đèn âm cầu thang</a></li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Đèn trang trí</a></li>
                                                <li><a href="/san-pham.html">Series Nelly</a></li>
                                            </ul>
                                        </li>
                                        <li>

                                            <ul className="menu-banner w-100">
                                                <li>
                                                    <a className="p-0" href="shop-left-sidebar.html">
                                                        <img className="img-responsive w-100" src="/images/banner/3.jpg" alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-0" href="shop-left-sidebar.html">
                                                        <img className="img-responsive w-100" src="/images/banner/4.jpg" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">Tin tức</a></li>
                                <li><a href="du-an.html">Dự án</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header