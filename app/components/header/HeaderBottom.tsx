import CartIcon from '../cart/CartIcon';

export interface IModalCart {
    openModalCart: boolean,
    setOpenModalCart: (a: boolean) => void
}

const HeaderBottom = ({ setOpenModalCart } : IModalCart) => {

    return (
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
                            
                            <CartIcon setOpenModalCart={setOpenModalCart} />

                            <a href="#offcanvas-mobile-menu" className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i className="icon-menu"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;