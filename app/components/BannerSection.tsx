const BannerSection = () => {
    return (
        <div className="section pb-100px pt-100px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
                        <div className="banner-2">
                            <img src="/images/banner/5.jpg" alt="" />
                            <div className="info justify-content-start">
                                <div className="content align-self-center">
                                    <h3 className="title">
                                        Bộ sưu tập <br /> đèn trong nhà
                                    </h3>
                                    <a href="/san-pham.html" className="shop-link">Mua ngay</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
                        <div className="banner-2">
                            <img src="/images/banner/6.jpg" alt="" />
                            <div className="info justify-content-start">
                                <div className="content align-self-center">
                                    <h3 className="title">
                                        Bộ sưu tập <br /> đèn ngoài trời </h3>
                                    <a href="/san-pham.html" className="shop-link">Mua ngay</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay="600">
                        <div className="banner-2">
                            <img src="/images/banner/7.jpg" alt="" />
                            <div className="info justify-content-start">
                                <div className="content align-self-center">
                                    <h3 className="title">
                                        Bộ sưu tập <br /> đèn trang trí
                                    </h3>
                                    <a href="/san-pham.html" className="shop-link">Mua ngay</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection