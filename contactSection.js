function ContactSection(){
    $('body').append(`
        <!--====== Start Contact Section ======-->
        <section class="contact-one p-r z-2 contact-one-main-reset " style=" box-shadow: none;">
            <div class="container-fluid" style="padding: 0;">
                <div class="row no-gutters"  style="box-shadow:none;">
                    <div class="col-lg-6" >
                        <div class="contact-one_content-box wow fadeInLeft" style="box-shadow:none;">
                            <div class="contact-wrapper">
                                <div class="section-title section-title-left mb-40">
                        
                                    <h2>Join Us Today</h2>
                                </div>
                                <div class="contact-form">
                                  <p class="mb-40">From the moment you join us, you become an integral part of the A-Bamisil family. Our culture is built on the foundation of mutual respect, innovation, and teamwork. We believe in creating an inclusive atmosphere where every voice is heard, ideas are shared freely, and success is celebrated together. At A-Bamisil, you'll find a community that values your contributions and supports your growth every step of the way.</p>
<!--                                    <form>-->
<!--                                        <div class="form_group">-->
<!--                                            <input type="text" class="form_control" placeholder="Full Name" name="name" required>-->
<!--                                        </div>-->
<!--                                        <div class="form_group">-->
<!--                                            <input type="email" class="form_control" placeholder="Email Address" name="email" required>-->
<!--                                        </div>-->
<!--                                        <div class="form_group">-->
<!--                                            <textarea class="form_control" placeholder="Write Message" name="message"></textarea>-->
<!--                                        </div>-->
<!--                                        -->
<!--                                          <div class="form_group">-->
<!--                                            <button class="main-btn yellow-bg">Send Your CV</button>-->
<!--                                        </div>-->
<!--                                       -->
<!--                                    </form>-->

                                        <div class="">
                                            <button class="main-btn yellow-bg">Send Your CV</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-one_information-box bg_cover wow fadeInRight contact-one-reset" style="background-image: url(assets/images/bg/contact-bg-1.jpg); height: 100%;">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--====== End Contact Section ======-->
    `)
}

ContactSection()