function ValueResolver(arr, value, type){

    if(!value) return
    console.log(arr)
    let data = ""

    if (value.includes('@')) {
        data = "mailto:"
    } else {
        data = "tel:"
    }
    arr.forEach( node => {
        node.innerHTML = value;
        node.setAttribute('href', `${data}${value}`);
    });
}

function ResolveSiteData() {
    const phones = document.querySelectorAll('.b-phone');
    const emails = document.querySelectorAll('.b-email');
    const spans = document.querySelectorAll('.b-email-span');
    const lagos = document.querySelectorAll('.b-lagos');
    const ekiti = document.querySelectorAll('.b-ekiti');
    const office = document.querySelectorAll('.b-office');
    const corporate = document.querySelectorAll('.b-coporate');
    ValueResolver(phones, "+2349038545739",)
    ValueResolver(emails, "info@bamisil.com",)

    spans.forEach( node => {
        node.setAttribute('href', `${'mailto:'}${'info@bamisil.com'}`);
    });

    lagos.forEach( node => {
        node.innerHTML = "Corporate Address";
    });

    ekiti.forEach( node => {
        node.innerHTML = "Office Address";

    });

    office.forEach( node => {
        node.innerHTML = "A-Bamisil Factory Complex, Ado/Ijan Road, Ado Ekiti, Nigeria ";
    });

    corporate.forEach( node => {
        node.innerHTML = "7th Floor, Mulliner Tower,  39, Alfred Rewane, Ikoyi, Lagos, Nigeria";

    });
}


// handle nested links



ResolveSiteData()