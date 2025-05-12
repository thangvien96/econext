'use client'

import { getProducts } from "@/app/services/product";
import ProductPagination from "./ProductPagination"
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../ui/ProductItem";
import { IProduct } from "./ProductGridHome";
import { useEffect, useRef, useState } from "react";
import Modal from "../ui/Modal";

const ProductGrid = () => {
    const [currentPage, setCurrentpage] = useState<number>(1);
    const [pageSize, setpageSize] = useState<number>(5);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpenModal, setIsOpenModal] = useState(false);


    const { data, isLoading, error } = useQuery({
        queryKey: ["current_page", currentPage],
        queryFn: () => getProducts(currentPage, pageSize)
    });

    useEffect(() => {
        console.log(contentRef.current)
        if (!isLoading && data && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage, isLoading, data]);

    if (isLoading) return <p>Đang tải...</p>;
    if (error) return <p>Có lỗi xảy ra.</p>;


    return (
        <div ref={contentRef} className="shop-bottom-area">

            <div className="row">
                {
                    data.map((product: IProduct, index: number) => (
                            <div key={index} className="col-lg-4  col-md-6 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-delay="200">
                                <ProductItem 
                                    classSpec="mb-25px" 
                                    product={product} 
                                    setIsOpenModal={setIsOpenModal}
                                />
                            </div>
                        )
                    )
                }
            </div>

            <ProductPagination 
                currentPage={currentPage}
                setCurrentpage={setCurrentpage}
                totalPage={40}
            />

            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12 mb-lm-30px mb-sm-30px">
                            
                            
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="product-details-content quickview-content">
                                <h2>Originals Kaval Windbr</h2>
                                <p className="reference">Reference:<span> demo_17</span></p>
                                <div className="pro-details-rating-wrap">
                                    <div className="rating-product">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                    </div>
                                    <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                        <li className="old-price not-cut">$18.90</li>
                                    </ul>
                                </div>
                                <p className="quickview-para">Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm
                                    tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis
                                    nostrud exercitation ullamco</p>
                                <div className="pro-details-size-color">
                                    <div className="pro-details-color-wrap">
                                        <span>Color</span>
                                        <div className="pro-details-color-content">
                                            <ul>
                                                <li className="blue"></li>
                                                <li className="maroon active"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-details-quality">
                                    <div className="cart-plus-minus">
                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                    </div>
                                    <div className="pro-details-cart btn-hover">
                                        <button className="add-cart btn btn-primary btn-hover-primary ml-4"> Add To
                                            Cart</button>
                                    </div>
                                </div>
                                <div className="pro-details-wish-com">
                                    <div className="pro-details-wishlist">
                                        <a href="wishlist.html"><i className="ion-android-favorite-outline"></i>Add to
                                            wishlist</a>
                                    </div>
                                    <div className="pro-details-compare">
                                        <a href="compare.html"><i className="ion-ios-shuffle-strong"></i>Add to compare</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Modal>
        </div>
    )
}

export default ProductGrid