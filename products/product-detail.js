

function ProductDetail(){
    const products = prod;
    const myKeys =  Object.keys(products)
    products.length = myKeys.length
    const s = window.location.search.slice(1,).split('&')
    const params = {};
    s.forEach(pair => {
        const items = pair.split('=');
        params[items[0]] = items[1];

    })

    const product = decodeURI(params.product)
    console.log( product)

    console.log(Object.hasOwnProperty(product))
    if(!products.hasOwnProperty(product)) return location.href = 'index.html';
    const data = products[product];

    console.log({len: products.length, keys:myKeys });

  $('body').append(`
           <!-- ====== Start project Details ====== -->
        <section class="project-details-page pt-80 pb-80 wow fadeInUp">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="project-details-wrapper">
                            <div class="img-holder mb-50 override-image-holder">
                                <img src="${data?.photo}" alt="">
                            </div>
                            <div class="project-content pb-75">
                                <div class="content-box">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <h3 class="title mb-15">${data?.title}</h3>
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12">
                                                    <div class="project-info-box mb-45">
                                                        <h4 class="mb-10">5000+</h4>
                                                        <p>
                                                            Tonns produces</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12">
                                                    <div class="project-info-box mb-45">
                                                        <h4 class="mb-10">100%</h4>
                                                        <p>
                                                            Quality</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-12">
                                                    <div class="project-info-box mb-45">
                                                        <h4 class="mb-10">Zero Impurities</h4>
                                                        <p>Assured</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <p>${data?.about}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-box">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <h3 class="title mb-15">Why Use ${data?.title}</h3>
                                        </div>
                                        <div class="col-lg-7">
<!--                                            <div class="content">-->
<!--                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.-->
<!--                                            </div>-->

                                <div class="choose-item-list mb-50" id="why-list">
                                
                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="post-navigation border-top-1 pt-80">
                                <div class="row align-items-center">
                                
                                    <div class="col-lg-5" id="prev-product">
<!--                                       prev product goes here-->
                                    </div>
                                    
                                    <div class="col-lg-2">
                                        <div class="post-navigation-icon text-center">
                                            <img src="../assets/images/bar.png" alt="">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-5" id="next-product">
<!--                                       next product goes here-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--====== End Portfolio Details ======-->
    `)

   //  show benefits
   data.why.forEach(item => {
       $('#why-list').append(`
        <div class="single-choose-item mb-30">
            <div class="text">
                <h5>${item?.title}</h5>
                <p>${item?.content}</p>
            </div>
        </div>
    `)
   })

//   show next product
    const currIndex = myKeys.indexOf(product);
    const [prevIndex, nextIndex] = [currIndex - 1, currIndex + 1];

    console.log(prevIndex, nextIndex, currIndex)
    if(prevIndex > -1) {
        const prd = products[myKeys[prevIndex]]
        $('#prev-product').append(`
             <div class="post-navigation-item prev-navigation d-flex align-items-center">
                <div class="thumb">
                    <img src="${prd?.photo}" alt="" style="height: 100%; object-fit: cover;">
                </div>
                <div class="text">
                    <h4><a href="product-detail.html?product=${prd?.title}">${prd?.title}</a></h4>
                    <p><a href="#">Palm</a>, <a href="#">Produce</a></p>
                </div>
            </div>
        `)
    }

//     show next product
    if(nextIndex < myKeys.length) {
        const prd = products[myKeys[nextIndex]]
        $('#next-product').append(`
             <div class="post-navigation-item next-navigation d-flex align-items-center">
                <div class="thumb" style="">
                    <img src="${prd?.photo}" alt="" style="height: 100%; object-fit: cover;">
                </div>
                <div class="text">
                    <h4><a href="product-detail.html?product=${prd?.title}">${prd?.title}</a></h4>
                    <p><a href="#">Palm</a>, <a href="#">Produce</a></p>
                </div>
            </div>
        `)
    }
//     end of code
}




ProductDetail()

