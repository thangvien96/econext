'use client'

import { getProducts } from "@/app/services/product";
import ProductPagination from "./ProductPagination"
import { useQuery } from "@tanstack/react-query";
import ProductItem from "../ui/ProductItem";
import { IProduct } from "./ProductGridHome";

const ProductGrid = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["product"],
        queryFn: getProducts
    });

    if (isLoading) return <p>Đang tải...</p>;
    if (error) return <p>Có lỗi xảy ra.</p>;

    return (
        <div className="shop-bottom-area">

            <div className="row">
                {
                    data.map((product: IProduct, index: number) => (
                            <div key={index} className="col-lg-4  col-md-6 col-sm-6 col-xs-6" data-aos="fade-up" data-aos-delay="200">
                                <ProductItem classSpec="mb-25px" product={product} />
                            </div>
                        )
                    )
                }
            </div>

            <ProductPagination />

        </div>
    )
}

export default ProductGrid