const boxes=document.querySelectorAll('.box');
window.addEventListener('scroll',checkbox);

checkbox();


function checkbox(){
    const trigebuttom=window.innerHeight/5*4;
boxes.forEach(box => {
  
    const boxtop=box.getBoundingClientRect().top;

    if(boxtop<trigebuttom){
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }
})
}


