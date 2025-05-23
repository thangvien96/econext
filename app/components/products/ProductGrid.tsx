'use client'

import { getProducts } from "@/app/services/product";
import ProductPagination from "./ProductPagination"
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";
import { useEffect, useRef, useState } from "react";
import Modal from "../ui/Modal";
import DetailProductModal from "./DetailProductModal";
import { IProduct } from "@/app/types";

const ProductGrid = () => {
    const [currentPage, setCurrentpage] = useState<number>(1);
    const [pageSize, setpageSize] = useState<number>(6);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);


    const { data, isLoading, error } = useQuery({
        queryKey: ["current_page", currentPage],
        queryFn: () => getProducts(currentPage, pageSize)
    });

    useEffect(() => {
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
                                    setSelectedProduct={setSelectedProduct}
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
                    <DetailProductModal selectedProduct={selectedProduct} />
            </Modal>
        </div>
    )
}

export default ProductGrid