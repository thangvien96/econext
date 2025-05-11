import BlogSlider from "./ui/BlogSlider";

const BlogHome = () => {
    return (
        <div className="main-blog-area pb-100px">
            <div className="container">
                
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up">
                        <div className="section-title text-center mb-11">
                            <h2 className="title">Tin tức</h2>
                            <p className="sub-title">
                                Cập nhật những tin tức mới nhất về sản phẩm, xu hướng và công nghệ chiếu sáng, giúp bạn luôn bắt kịp những thay đổi trong ngành.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="blog-slider swiper-container slider-nav-style-1" data-aos="fade-up" data-aos-delay="200">
                    
                    <div className="swiper-wrapper">
                        <BlogSlider />
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BlogHome;