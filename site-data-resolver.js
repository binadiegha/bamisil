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

const links = document.querySelectorAll('a');

links.forEach( link => {
    link.addEventListener('click', (event)=> {
        event.preventDefault()

       setTimeout(()=> {
           console.log(event)
           console.log(window)
           const path = window.location.pathname;
           const splits = path.split('/').filter( section => section !== "");

           const pool = event.target.baseURI.split('/');
           // const targ = pool[pool.length - 1]
           const targ = event.target.innerHTML.toLowerCase()+".html";

           console.log({targ})

           window.location.pathname = splits[0]+"/"+targ

           console.log(event.target.href)
           console.log(window.location.pathname, splits)
           // window.location.href = "https://google.com"
           // event.defaultPrevented = false;
       }, 1000)
    })
})


ResolveSiteData()