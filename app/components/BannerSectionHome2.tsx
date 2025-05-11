

const BannerSectionHome2 = () => {
  return (
    <div className="section pb-100px pt-100px">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
                    <a href="/san-pham.html" className="banner-3">
                        <img src="/images/banner/1.jpg" alt="" />
                        <div className="info justify-content-end">
                            <div className="content align-self-center">
                                <h3 className="title">
                                    Sale Furniture <br /> For Summer
                                </h3>
                                <p>Great Discounts Here</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
                    <a href="/san-pham.html" className="banner-3">
                        <img src="/images/banner/2.jpg" alt="" />
                        <div className="info justify-content-start">
                            <div className="content align-self-center">
                                <h3 className="title">
                                    Office Chair <br /> For Best Offer</h3>
                                <p>Great Discounts Here</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSectionHome2