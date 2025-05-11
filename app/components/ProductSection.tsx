import ProductGridHome from "./products/ProductGridHome";

interface IProps {
    title: string,
    desc: string,
    category: string
}

const ProductSection = ({ title, desc, category }: IProps) => {

    return (
        <div className={`section product-tab-area ${category === 'newProduct' && 'pb-100px'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center" data-aos="fade-up">
                        <div className="section-title mb-0">
                            <h2 className="title">{title}</h2>
                            <p className="sub-title mb-30px aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">{desc}</p>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <div className="tab-content">

                            <div className="tab-pane fade show active" id="tab-product-new-arrivals">
                                <ProductGridHome category={category} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSection;