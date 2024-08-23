// change navbar style on scrolling.
// window.addEventListener('scroll',()=>{
//     document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>10);
// })
// window.addEventListener('scroll',()=>{
//     document.querySelector('nav button').classList.toggle('butn-open',window.scrollY>10);
// })


// show hidden faq question
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{

        faq.classList.toggle('faq-open');
        //change icon
        const icon=faq.querySelector('.faq-icon i');
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus';
        }else{
            icon.className='uil uil-plus';
        }

    })
})

// show/hide nav menu

const menu=document.querySelector('.nav-menu');
const open=document.querySelector('#open-menu-button');
const close=document.querySelector('#close-menu-button');
open.addEventListener('click',()=>{
    menu.style.display='flex';
    close.style.display='inline-block';
    open.style.display='none';
})
const closenav=()=>{
    menu.style.display='none';
    close.style.display='none';
    open.style.display='inline-block';
}
close.addEventListener('click',closenav);