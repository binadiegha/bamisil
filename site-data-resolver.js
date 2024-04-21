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
    ValueResolver(phones, "+2349038545739",)
    ValueResolver(emails, "info@bamisi.com",)

    spans.forEach( node => {
        node.setAttribute('href', `${'mailto:'}${'info@bamisi.com'}`);
    });
}


// handle nested links



ResolveSiteData()