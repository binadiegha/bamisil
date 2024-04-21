function ContactSection(){
    $('body').append(`
        
        <!--====== Start Contact Section ======-->
        <section class="contact-one p-r z-2">
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="col-lg-6">
                        <div class="contact-one_content-box wow fadeInLeft">
                            <div class="contact-wrapper">
                                <div class="section-title section-title-left mb-40">
                                    <span class="sub-title">Get In Touch</span>
                                    <h2>Need Oragnic Foods!
                                        Send Us Message</h2>
                                </div>
                                <div class="contact-form">
                                    <form>
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Full Name" name="name" required>
                                        </div>
                                        <div class="form_group">
                                            <input type="email" class="form_control" placeholder="Email Address" name="email" required>
                                        </div>
                                        <div class="form_group">
                                            <textarea class="form_control" placeholder="Write Message" name="message"></textarea>
                                        </div>
                                        <div class="form_group">
                                            <button class="main-btn yellow-bg">Send Us Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-one_information-box bg_cover wow fadeInRight" style="background-image: url(assets/images/bg/contact-bg-1.jpg);">
                            <div class="information-box">
                                <h3>Contact Us</h3>
                                <p>Sit volupta accusantium doloreues laudatiuec totam rem aperiam eaque abillo inventore verit atiset</p>
                                <div class="information-item_one d-flex mb-25">
                                    <div class="icon">
                                        <i class="flaticon-placeholder"></i>
                                    </div>
                                    <div class="info">
                                        <span class="sub-title mb-1">Location</span>
                                        <h5>55 Main Street, New York</h5>
                                    </div>
                                </div>
                                <div class="information-item_one d-flex mb-25">
                                    <div class="icon">
                                        <i class="flaticon-email"></i>
                                    </div>
                                    <div class="info">
                                        <span class="sub-title mb-1">Email Address</span>
                                        <h5><a href="../../cdn-cgi/l/email-protection.html#9ef6f1eaf2f7f0fbdef9f3fff7f2b0fdf1f3"><span class="__cf_email__" data-cfemail="ed85829981848388ad8a808c8481c38e8280">[email&#160;protected]</span></a></h5>
                                    </div>
                                </div>
                                <div class="information-item_one d-flex mb-25">
                                    <div class="icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <div class="info">
                                        <span class="sub-title mb-1">Phone Number</span>
                                        <h5><a href="tel:+0123456789">+012(345) 67 89</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--====== End Contact Section ======-->
    `)
}

ContactSection()