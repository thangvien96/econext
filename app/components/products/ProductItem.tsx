import Link from "next/link";
import { IProduct } from "./ProductGridHome";
import AddToCartButton from "./AddToCartButton";


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


    const handleViewDetailProduct = (productId: string) => {
        if(setIsOpenModal){
            setIsOpenModal(true)
        }
        if(setSelectedProduct){
            setSelectedProduct(productId)
        }
    }

    return (
        <div className={`product ${classSpec || ""}`}>
            <div className="thumb">
                <Link href={`/product/${product.slug}`} className="image">
                    <img src={product.images[0]} alt="Product" />
                    <img className="hover-image" src={product.images[1]} alt="Product" />
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
                    setIsOpenModal && <a className="action quickview" title="Quick view" onClick={() => handleViewDetailProduct(product.id)}><i
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
                    <span className="new">{product.price} VND</span>
                </span>
            </div>
        </div>
    )
}

export default ProductItem;