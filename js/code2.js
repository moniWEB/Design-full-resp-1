
// top button 


const vari=document.querySelector('.totop');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
        vari.classList.add('man');
    }else{
        vari.classList.remove('man');
    };
});



//  readmore and readless


const btn=document.querySelector('.btn');
const parachild=document.querySelector('.parachild');


btn.addEventListener('click',()=>{
    parachild.classList.toggle('man-power');
btn.classList.toggle('man-power');
if(btn.innerHTML==='click-now'){
    btn.innerHTML='read-less';
}else{
    btn.innerHTML='click-now'
}
})


// navbar

const header=document.querySelector('.bar');

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',window.scrollY>0);
    const abc=window.scrollY>0;

    console.log(abc);
})
