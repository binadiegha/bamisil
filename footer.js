function Footer(){
    const year = new Date().getFullYear()
    $().ready( ()=> {
        $('body').append(`<!--====== Start Footer ======-->
        <footer class="footer-default footer-white dark-black-bg">
            <div class="container">
                <div class="footer-top wow fadeInUp">
                    <div class="row">
<!--                        <div class="col-lg-4 col-md-12 footer-contact-item">-->
<!--                            <div class="contact-info d-flex justify-content-center">-->
<!--                                <div class="site-logo text-center">-->
<!--                                    <a href="index.html" class="brand-logo"><img src="assets/images/logo/logo-2.png" alt="Footer Logo"></a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                        
                        <div class="col-lg-4 col-md-12 footer-contact-item">
                            <div class="contact-info d-flex">
                                <div class="icon">
                                    <i class="flaticon-placeholder"></i>
                                </div>
                                <div class="text">
                                    <h5 class="b-lagos">Locations</h5>
                                    <h6 class="b-coporate">55 Main Street, New York</h6>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="col-lg-4 col-md-12 footer-contact-item">
                            <div class="contact-info d-flex">
                                <div class="icon">
                                    <i class="flaticon-placeholder"></i>
                                </div>
                                <div class="text">
                                    <h5 class="b-ekiti">Locations</h5>
                                    <h6 class="b-office">55 Main Street, New York</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 footer-contact-item">
                            <div class="contact-info d-flex">
                                <div class="icon">
                                    <i class="flaticon-email"></i>
                                </div>
                                <div class="text">
                                    <h5 >Email Us</h5>
                                    <h6><a href="" class="b-email-span"><span class="__cf_email__ b-email" ></span></a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-widget pt-70 pb-25">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                            <div class="footer-widget about-widget mb-40 wow fadeInDown">
                                <h4 class="widget-title">About Us</h4>
                                <div class="footer-about-content">
                                    <p>A-Bamisil International promotes food security and job creation through oil palm cultivation, striving to be Nigeria's leading supplier of oils.</p>
                                    <div class="social-box">
                                        <h4 class="mb-15">Follow On</h4>
                                        <ul class="social-link">
<!--                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>-->
<!--                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>-->
                                            <li><a href="https://www.linkedin.com/company/a-bamisil-farms/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://www.youtube.com/@A-BAMISLFARMS" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-lg-4 col-md-7 col-sm-12">
                            <div class="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                                <h4 class="widget-title">Links</h4>
                                <div class="footer-widget-nav">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="downstream-business.html">Downstream</a></li>
                                        <li><a href="upstream-business.html">Upstream</a></li>
                                        <li><a href="products/">Products</a></li>
                                    
                                    </ul>
                                    <ul>
                                        <li><a href="careers.html">Careers</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="about.html#mission">Mission</a></li>
                                        <li><a href="about.html#vision">Vision</a></li>
                                   
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="footer-widget recent-post-widget mb-40 wow fadeInDown">
                                <h4 class="widget-title">Top Products</h4>
                                <ul class="post-widget-wrap">
                                    <li class="post-item">
                                        <img src="https://res.cloudinary.com/dz4wq80nz/image/upload/v1713794309/bamisil/crude-palm-oil_pbvrdn.jpg" alt="Post Image">
                                        <div class="post-title-date">
                                            <h3 class="title"><a href="products/product-detail.html?product=Crude%20Palm%20Oil%20(CPO)">Crude Palm Oil (CPO)</a></h3>
                                            <span class="posted-on"><i class="fas fa-check-circle"></i><a href="#">Downstream</a></span>
                                        </div>
                                    </li>
                                    <li class="post-item">
                                        <img src="https://res.cloudinary.com/dz4wq80nz/image/upload/v1713794310/bamisil/palm-kernel_lu7jk8.jpg" alt="Post Image">
                                        <div class="post-title-date">
                                            <h3 class="title"><a href=products/product-detail.html?product=Palm%20Kernel%20Oil%20(PKO)">Palm Kernel Oil (PKO)</a></h3>
                                            <span class="posted-on"><i class="fas fa-check-circle"></i><a href="#">Downstream</a></span>
                                        </div>
                                    </li>
                                </ul>
                                <a href="products/" class="more-btn">See More Products</a>
                            </div>
                        </div>
                    </div>
                </div>
<!--                <div class="footer-newsletter footer-newsletter-one text-white wow fadeInUp">-->
<!--                    <div class="row">-->
<!--                        <div class="col-xl-3">-->
<!--                            <div class="footer-text">-->
<!--                                <h5>Subscrive Our Newsletter-->
<!--                                    To Get More Updates</h5>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-xl-9">-->
<!--                            <div class="newsletter-form">-->
<!--                                <form>-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-lg-5">-->
<!--                                            <div class="form_group">-->
<!--                                                <input type="email" class="form_control" placeholder="Email Address" name="email" required>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-lg-4">-->
<!--                                            <div class="form_group">-->
<!--                                                <input type="text" class="form_control" placeholder="Phone" name="phone" required>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-lg-3">-->
<!--                                            <div class="form_group">-->
<!--                                                <button class="main-btn btn-yellow">Subscribe Now</button>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </form>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="footer-copyright">
                    <div class="col-lg-12">
                        <div class="copyright-text text-center">
                            <p>&copy; ${year} A-Bamisil. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer><!--====== End Footer ======-->
        <script type="module" src="site-data-resolver.js"></script>
        <script type="module" src="../site-data-resolver.js"></script>
`)
    })
}

Footer();