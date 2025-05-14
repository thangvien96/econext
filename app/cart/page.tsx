import Link from "next/link";
import BreadCrumArea from "../components/BreadcrumbArea";
import TableCart from "../components/cart/TableCart";
import ClearCart from "../components/cart/ClearCart";
import CartTotal from "../components/cart/CartTotal";

const CartPage = () => {
    return (
        <>
            <BreadCrumArea title="Giỏ hàng" />

            <div className="cart-main-area pt-100px pb-100px">
                <div className="container">
                    <h3 className="cart-page-title">Giỏ hàng của bạn</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                
                                <TableCart />

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="cart-shiping-update-wrapper">
                                            <div className="cart-shiping-update">
                                                <Link href="/products">Tiếp tục mua sắm</Link>
                                            </div>
                                            <ClearCart />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-lm-30px">
                                    <div className="cart-tax">
                                        <div className="title-wrap">
                                            <h4 className="cart-bottom-title section-bg-gray">Địa chỉ nhận hàng</h4>
                                        </div>
                                        <div className="tax-wrapper">
                                            {/* <p>Enter your destination to get a shipping estimate.</p> */}
                                            <div className="tax-select-wrapper">
                                                <div className="tax-select">
                                                    <label>
                                                        * Thành phố
                                                    </label>
                                                    <select className="email s-email s-wid">
                                                        <option>Hà Nội</option>
                                                        <option>Hồ Chí Minh</option>
                                                    </select>
                                                </div>
                                                <div className="tax-select mb-25px">
                                                    <label>
                                                        * Địa chỉ nhà
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                                <button className="cart-btn-2" type="submit">Xác nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-lm-30px">
                                    <div className="discount-code-wrapper">
                                        <div className="title-wrap">
                                            <h4 className="cart-bottom-title section-bg-gray">Mã giảm giá</h4>
                                        </div>
                                        <div className="discount-code">
                                            <p>Nhập mã giảm giá của bạn</p>
                                            <form>
                                                <input type="text" name="name" />
                                                <button className="cart-btn-2" type="submit">Đồng ý</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                
                                <CartTotal />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartPage;