'use client'

import { useState } from "react";
import ProductItem from "./ProductItem";
import { useQuery } from '@tanstack/react-query';
import { getProductsBestSeller, getProductsNew } from "@/app/services/product";
import { IProduct } from "@/app/types";


interface IProps {
    category: string
}

const ProductGridHome = ({ category }: IProps) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["category", category],
        queryFn: () => {
            if(category == 'bestSellerProduct'){
                return getProductsBestSeller();
            } else {
                return getProductsNew();
            }
        },
    });

    if (isLoading) return <p>Đang tải...</p>;
    if (error) return <p>Có lỗi xảy ra.</p>;

    console.log('data',data);

    return (
        <div className="row">
            
                {
                    data.data.map((product: IProduct, index: number) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="200">
                                <ProductItem product={product} />
                            </div>
                        )
                    )
                }

        </div>
    )
}

export default ProductGridHome;