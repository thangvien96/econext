'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Menu = () => {
    const pathname = usePathname();
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        // Khi route thay đổi => đóng dropdown bằng cách thêm class
        setClosing(true);

        const timeout = setTimeout(() => {
            setClosing(false); // reset lại sau 500ms
        }, 500);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div className="bg-gray d-none d-lg-block sticky-nav">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-12 align-self-center">
                        <div className="main-menu manu-color-white">
                            <ul>
                                <li><Link href="/">Trang chủ</Link></li>
                                <li className={`dropdown position-static ${closing ? 'dropdown--closed' : ''}`}>
                                    <Link href="/products">Sản phẩm 
                                        <i className="ion-ios-arrow-down"></i>
                                    </Link>
                                    <ul className="mega-menu d-block">
                                        <li className="d-flex">
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Đèn trong nhà</a></li>
                                                <li><Link href="/products">Led âm trần</Link></li>
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
    )
}

export default Menu;