import BreadCrumArea from "../components/BreadcrumbArea";
import Categories from "../components/products/Categories";
import ProductGrid from "../components/products/ProductGrid";
import ShopTopBar from "../components/ui/ShopTopbar";

const ProductsPage = () => {
    return (
        <>
            <BreadCrumArea title="sản phẩm" />

            <div className="shop-category-area pb-100px pt-70px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
                            <ShopTopBar />

                            <ProductGrid />
                        </div>  
                        <div className="col-lg-3 order-lg-first col-md-12 order-md-last mb-md-60px mb-lm-60px">
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage;