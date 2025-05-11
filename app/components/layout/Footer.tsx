const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-6 col-lg-4 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="200">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">about us</h4>
                                    <p className="about-text">Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    </p>
                                    <ul className="link-follow">
                                        <li className="li">
                                            <a className="paypal icon-paypal m-0" title="Paypal" href="#"></a>
                                        </li>
                                        <li className="li">
                                            <a className="tumblr icon-social-tumblr" title="Tumblr" href="#"></a>
                                        </li>
                                        <li className="li">
                                            <a className="twitter icon-social-twitter" title="Twitter" href="#"></a>
                                        </li>
                                        <li className="li">
                                            <a className="pinterest icon-social-pinterest" title="Pinterest" href="#"></a>
                                        </li>
                                        <li className="li">
                                            <a className="linkedin icon-social-linkedin" title="Linkedin" href="#"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            
                            <div className="col-md-6 col-sm-6 col-lg-3 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">information</h4>
                                    <div className="footer-links">
                                        <div className="footer-row">
                                            <ul className="align-items-center">
                                                <li className="li"><a className="single-link" href="about.html">About us</a></li>
                                                <li className="li"><a className="single-link" href="#">Delivery Information</a></li>
                                                <li className="li"><a className="single-link" href="privacy-policy.html">Privacy & Policy</a></li>
                                                <li className="li"><a className="single-link" href="#">Terms & Condition</a></li>
                                                <li className="li"><a className="single-link" href="#">Manufactures</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="col-md-6 col-lg-2 col-sm-6 mb-lm-30px" data-aos="fade-up" data-aos-delay="600">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">my account</h4>
                                    <div className="footer-links">
                                        <div className="footer-row">
                                            <ul className="align-items-center">
                                                <li className="li"><a className="single-link" href="my-account.html">My
                                                        Account</a>
                                                </li>
                                                <li className="li"><a className="single-link" href="cart.html">My Cart</a></li>
                                                <li className="li"><a className="single-link" href="login.html">Login</a></li>
                                                <li className="li"><a className="single-link" href="wishlist.html">Wishlist</a></li>
                                                <li className="li"><a className="single-link" href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="800">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">newsletter</h4>
                                    <div className="footer-links">
                                        
                                        <div id="mc_embed_signup" className="subscribe-form">
                                            {/* <form id="mc-embedded-subscribe-form" className="validate"  target="_blank" name="mc-embedded-subscribe-form" method="post" action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                                <div id="mc_embed_signup_scroll" className="mc-form">
                                                    <input className="email" type="email" placeholder="Your Mail*" name="EMAIL" value="" />
                                                    <div className="mc-news" aria-hidden="true">
                                                        <input type="text" value="" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                    </div>
                                                    <div className="clear">
                                                        <button id="mc-embedded-subscribe" className="button btn-primary" type="submit" name="subscribe" value=""><i
                                                                className="icon-cursor"></i> Send Mail</button>
                                                    </div>
                                                </div>
                                            </form> */}
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row flex-sm-row-reverse">
                            <div className="col-md-6 text-end">
                                <div className="payment-link">
                                    <img src="/images/icons/payment.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 text-start">
                                <p className="copy-text"> © 2021 <strong>Furns</strong> Made With <i className="ion-heart" aria-hidden="true"></i> By <a className="company-name" href="https://hasthemes.com/">
                                    <strong> HasThemes</strong></a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;