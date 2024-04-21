function Map(){
    $('body').append(`
              <!--====== Start Map section ======-->
        <section class="contact-page-map">
            <div class="map-box">
                <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            </div>
        </section><!--====== End Map section ======-->
        <!--====== Start Contact Section ======-->
        <section class="contact-three pb-70 wow fadeInUp">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-xl-7 col-lg-10">
                        <div class="contact-three_content-box">
                            <div class="section-title section-title-left mb-60">
                
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
                                        <button class="main-btn btn-yellow">Send Us Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--====== End Contact Section ======-->

    `)
}

Map();