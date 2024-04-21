function HomeAboutSection(){
    $('body').append(`
        
        <!--====== Start About Section ======-->
        <section class="about-section p-r z-1 pt-130 pb-80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-5 col-lg-6">
                        <div class="about-one_content-box mb-50">
                            <div class="section-title section-title-left mb-30 wow fadeInUp">
                                <span class="sub-title">About Us</span>
                                <h2>We’re Best Agriculture
                                    & Organic Firms</h2>
                            </div>
                            <div class="quote-text mb-35 wow fadeInDown" data-wow-delay=".3s">
                                <p>Sed ut perspiciatis omnis natus error volup accusantiue 
                                    doloremque laudantium totam aperiam eaque quae abllcs 
                                    veritatis quasi architecto beatae vitae.</p>
                            </div>
                            <div class="tab-content-box wow fadeInUp">
                                <ul class="nav nav-tabs mb-20">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#mission">Our Mission</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#vision">Our Vision</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="mission">
                                        <div class="content-box-gap">
                                            <p>Natus error sit voluptatem accusantium doloremque laudatium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt</p>
                                            <div class="avatar-box d-flex align-items-center">
                                                <div class="thumb">
                                                    <img src="assets/images/user-1.jpg" alt="Admin Thumb">
                                                </div>
                                                <div class="content">
                                                    <img src="assets/images/sign-1.png" alt="Sign">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="vision">
                                        <div class="content-box-gap">
                                            <p>Natus error sit voluptatem accusantium doloremque laudatium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt</p>
                                            <div class="avatar-box d-flex align-items-center">
                                                <div class="thumb">
                                                    <img src="assets/images/user-1.jpg" alt="Admin Thumb">
                                                </div>
                                                <div class="content">
                                                    <img src="assets/images/sign-1.png" alt="Sign">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6">
                        <div class="about-one_image-box p-r mb-50 pl-100">
                            <div class="about-img_one wow fadeInLeft">
                                <img src="assets/images/about/img-1.jpg" alt="About Image">
                            </div>
                            <div class="about-img_two wow fadeInRight">
                                <img src="assets/images/about/img-2.jpg" alt="About Image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--====== End About Section ======-->
    `)
}

HomeAboutSection();