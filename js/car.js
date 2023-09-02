
const moni = document.querySelector('.bar');

window.addEventListener('scroll',()=>{
    moni.classList.toggle('sticky',window.scrollY>50);
    const abc = window.scrollY>50;
    console.log(abc);
});


// const header=document.querySelector('.bar');

// window.addEventListener('scroll',()=>{
//     header.classList.toggle('sticky',window.scrollY>0);
//     const abc=window.scrollY>0;

//     console.log(abc);
// })


