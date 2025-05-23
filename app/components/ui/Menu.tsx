'use client';

import { getProductGroup } from "@/app/services/product";
import { IProductGroup } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Menu = () => {
    const pathname = usePathname();
    const [closing, setClosing] = useState(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ["product_group"],
        queryFn: getProductGroup
    });

    useEffect(() => {
        // Khi route thay đổi => đóng dropdown bằng cách thêm class
        setClosing(true);

        const timeout = setTimeout(() => {
            setClosing(false); // reset lại sau 500ms
        }, 500);

        return () => clearTimeout(timeout);
    }, [pathname]);

    console.log(data);

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
                                            {
                                                data.data.map((prd_group: IProductGroup) => {
                                                    return (
                                                        <ul className="d-block">
                                                            <li className="title"><Link href={`${prd_group.slug}`}>{prd_group.name}</Link></li>
                                                            <li><a href="/san-pham.html">Series Nelly</a></li>
                                                        </ul>
                                                    )
                                                })
                                            }
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