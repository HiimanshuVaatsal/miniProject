let next =document.getElementById('next')
let previous = document.getElementById("previous");
console.log(next)
console.log(previous)

let images=['veg1.png','veg2.png','veg3.png','veg4.png','veg5.png']
let curentIndex=0;

function setImage(){
    let singleimage=document.getElementById("imageslider");
    singleimage.src=images[curentIndex];
}

next.addEventListener('click',()=>{
    curentIndex=(curentIndex+1)% images.length;
    setImage();
})

previous.addEventListener('click',()=>{
    curentIndex=(curentIndex-1+images.length)%images.length
    setImage()
})

setImage()