
class PageBanner {
    constructor(title) {
        this.title = title
    }


    getSection(){
        $('body').append(`
    
        <section class="page-banner bg_cover position-relative z-1" style="background-image: url(${'assets/images/bg/page-bg-1.jpg'});">
           <div class="brand-card text-center">
                <img src="assets/images/icon/wheat.png" alt="icon">
                <h3>Orgarium</h3>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-10">
                        <div class="page-title">
                            <h1>${title}</h1>
                            <ul class="breadcrumbs-link">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">${title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--====== End Page-Banner Section ======-->
    `)
    }

}