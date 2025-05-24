import Link from "next/link";

import AddToCartButton from "./AddToCartButton";
import { IProduct } from "@/app/types";
import { formatCurrencyVND } from "@/app/utils/helpers";


const ProductItem = (
    { 
        product, 
        classSpec, 
        setIsOpenModal,
        setSelectedProduct
    } : { 
        product: IProduct, 
        classSpec?: string,
        setIsOpenModal?: (a: boolean) => void
        setSelectedProduct?: (a: string|null) => void
    }) => {


    const handleViewDetailProduct = (slug: string) => {
        if(setIsOpenModal){
            setIsOpenModal(true)
        }
        if(setSelectedProduct){
            setSelectedProduct(slug)
        }
    }

    return (
        <div className={`product ${classSpec || ""}`}>
            <div className="thumb">
                <Link href={`/product/${product.slug}`} className="image">
                    <img src={`${process.env.NEXT_PUBLIC_URL_BASE_API}${product.image[0].url}`} alt="Product" />
                    <img className="hover-image" src={`${process.env.NEXT_PUBLIC_URL_BASE_API}${product.image[1].url}`} alt="Product" />
                </Link>
                
                {
                    product.tag && 
                    <span className="badges">
                        <span className="new">{product.tag}</span>
                    </span>
                }

                <div className="actions">
                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><i
                            className="icon-heart"></i></a>
                    { 
                    setIsOpenModal && <a className="action quickview" title="Quick view" onClick={() => handleViewDetailProduct(product.slug)}><i
                            className="icon-size-fullscreen"></i></a>
                    }
                    <a href="compare.html" className="action compare" title="Compare"><i
                            className="icon-refresh"></i></a>
                </div>
                
                <AddToCartButton product={product} />
            </div>
            <div className="content">
                <h5 className="title"><a href="/san-pham.html">{product.name}</a></h5>
                <span className="price">
                    <span className="new">{formatCurrencyVND(product.price)}</span>
                </span>
            </div>
        </div>
    )
}

export default ProductItem;