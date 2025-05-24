import { Metadata } from 'next';
import BreadCrumArea from "@/app/components/BreadcrumbArea";
import Categories from "@/app/components/products/Categories";
import ProductGrid from "@/app/components/products/ProductGrid";
import ShopTopBar from "@/app/components/ui/ShopTopbar";

const ProductsPage = async ({ params }: { params: { slug: string } }) => {

    const { slug } = await params;

    return (
        <>
            <BreadCrumArea title="sản phẩm" />

            <div className="shop-category-area pb-100px pt-70px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
                            <ShopTopBar />

                            <ProductGrid slugCategory={slug} />
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
