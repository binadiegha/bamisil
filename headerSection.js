function HeaderSection(){

$('body').prepend(`
    <!--====== Start Preloader ======-->
<div class="preloader">
    <div class="loader">
        <div class="pre-shadow"></div>
        <div class="pre-box"></div>
    </div>
</div>
<!--====== End Preloader ======-->
<!--====== Start Header Section ======-->
<header class="header-area">
    <div class="header-top-bar top-bar-one dark-black-bg">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-12 col-md-12 col-6">
                    <div class="top-bar-left d-flex align-items-center">
                        <span class="text">Welcome to Agriculture & Organic Food Template</span>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12 col-md-12 col-6">
                    <div class="top-bar-right">
                        <span class="text"><i class="far fa-clock"></i>Opening Hours : Sunday- Friday, 08:00 am - 05:00pm</span>
                        <ul class="social-link">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-navigation navigation-two">
        <div class="nav-overlay"></div>
        <div class="container-fluid">
            <div class="primary-menu">
                <div class="site-branding">
                    <a href="index.html" class="brand-logo"><img src="assets/images/logo/logo-1.png" alt="Site Logo"></a>
                </div>
                <div class="nav-inner-menu">
                    <div class="nav-menu">
                        <!--=== Mobile Logo ===-->
                        <div class="mobile-logo mb-30 d-block d-xl-none text-center">
                            <a href="index.html" class="brand-logo"><img src="assets/images/logo/logo-1.png" alt="Site Logo"></a>
                        </div>
                        <!--=== Navbar Call Button ===-->
                        <div class="call-button text-center">
                            <span><i class="far fa-phone"></i><a href="tel:+012(345)678" class="b-phone">+012 (345) 678</a></span>
                        </div>
                        <!--=== Main Menu ===-->
                        <nav class="main-menu">
                            <ul>
                                <li class="menu-item"><a href="index.html" class="active">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li class="menu-item has-children"><a href="#">Services</a>
                                    <ul class="sub-menu">
                                        <li><a href="upstream-business.html">Upstream Business</a></li>
                                        <li><a href="downstream-business.html">Downstream Business</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item "><a href="#">Products</a></li>  
<!--                                <li class="menu-item has-children"><a href="#">Products</a>-->
<!--                                    <ul class="sub-menu">-->
<!--                                        <li><a href="portfolio-grid.html">Portfolio Grid</a></li>-->
<!--                                        <li><a href="portfolio-full-width.html">Portfolio Full Width</a></li>-->
<!--                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>-->
<!--                                    </ul>-->
<!--                                </li>-->
                                
                              
                            <li class="menu-item"><a href="careers.html" class="active">Careers</a></li>
                            <li class="menu-item"><a href="contact.html" class="active">Contact</a></li>
                            </ul>
                        </nav>
                        <!--=== Navbar Menu Button ===-->
                        <div class="menu-button">
                            <a href="contact.html" class="main-btn btn-yellow">Get a Quote</a>
                        </div>
                    </div>
                    <!--=== nav Right Item ===-->
                    <div class="nav-right-item d-flex align-items-center">
                        <div class="call-button">
                            <span><i class="far fa-phone"></i><a href="tel:+012(345)678" class="b-phone">+012 (345) 678</a></span>
                        </div>
                        <div class="menu-button">
                            <a href="contact.html" class="main-btn btn-yellow">Get a Quote</a>
                        </div>
                        <div class="navbar-toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!--====== End Header Section ======-->
`)
}

HeaderSection();