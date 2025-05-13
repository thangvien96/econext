'use client'

import { getDetailProducts } from "@/app/services/product";
import { useQuery } from "@tanstack/react-query";
import ProductImageSlider from "./ProductImageSlider";
import { useState } from "react";

const DetailProductModal = ({selectedProduct} : {selectedProduct: string|null}) => {
    const [quantity, setQuantity] = useState<string>("1")

    const { data, isLoading, error } = useQuery({
        queryKey: ["selectedProduct", selectedProduct],
        queryFn: () => getDetailProducts(selectedProduct)
    });

    if (isLoading) return <p>Đang tải...</p>;
    if (error) return <p>Có lỗi xảy ra.</p>;

    console.log(data);

    return (
        <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12 mb-lm-30px mb-sm-30px">
                <ProductImageSlider gallery={data.gallery} />
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-details-content quickview-content">
                    <h2>{data.name}</h2>
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
                            <li className="old-price not-cut">${data.price}</li>
                        </ul>
                    </div>
                    {/* <p className="quickview-para">{data.description}</p> */}
                    <p className="quickview-para" dangerouslySetInnerHTML={{ __html: data.description }}></p>

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
                            <input className="cart-plus-minus-box" type="text" name="qtybutton" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
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
    )
}

export default DetailProductModal;