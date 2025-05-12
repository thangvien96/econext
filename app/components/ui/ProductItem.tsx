import Link from "next/link";
import { IProduct } from "../products/ProductGridHome";


const ProductItem = (
    { 
        product, 
        classSpec, 
        setIsOpenModal 
    } : { 
        product: IProduct, 
        classSpec?: string,
        setIsOpenModal: (a: boolean) => void
    }) => {
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
                    <a className="action quickview" title="Quick view" onClick={() => setIsOpenModal(true)}><i
                            className="icon-size-fullscreen"></i></a>
                    <a href="compare.html" className="action compare" title="Compare"><i
                            className="icon-refresh"></i></a>
                </div>
                <button title="Add To Cart" className=" add-to-cart">Add
                    To Cart</button>
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