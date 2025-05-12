const ProductPagination = () => {
    return (
        <div className="pro-pagination-style text-center mb-md-30px mb-lm-30px mt-30px" data-aos="fade-up">
            <ul>
                <li>
                    <a className="prev" href="#"><i className="ion-ios-arrow-left"></i></a>
                </li>
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li>
                    <a className="next" href="#"><i className="ion-ios-arrow-right"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default ProductPagination;