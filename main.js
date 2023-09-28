const leftAerrow = document.querySelector('.left')
const rightAerrow = document.querySelector('.right')
const frame = document.querySelector('.frame')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')

let lnth = 1;
let imgLnthd = images.length;

rightAerrow.addEventListener('click', () => {
  lnth = lnth <  imgLnthd ? lnth + 1 : 1  
  updateLnth(lnth)
});

leftAerrow.addEventListener('click', () => {
  lnth = lnth > 1 ? lnth - 1 : imgLnthd
  updateLnth(lnth)
});

function updateLnth(lnth) {
    slider.style.transform = `translateX(-${(lnth - 1) * 100}%)`;
   
}

for (let i = 0; i < imgLnthd; i++) {
const createCircle = document.createElement('div');
createCircle.className = 'circle';
bottom.appendChild(createCircle)


const circles = document.querySelectorAll('.circle');
let activeCircle = circles[0];
activeCircle.classList.add('active');
circles.forEach((ccl, i)=>{
    ccl.addEventListener('click', function () {
        activeCircle.classList.remove('active');
        lnth = i + 1;

        ccl.classList.add('active');
        activeCircle = ccl
        updateLnth(lnth)
    })
})
}

/*
// This is when ciecle is premade
const circles = document.querySelectorAll('.circle');
let activeCircle = circles[0];
activeCircle.classList.add('active');

circles.forEach((circle, ind)=>{
    circle.addEventListener('click', function () {
        // if (activeCircle !== null) {
        //     activeCircle.classList.remove('active');
        // }
        activeCircle.classList.remove('active');
        lnth = ind + 1;

        circle.classList.add('active');
        activeCircle = circle
        updateLnth(lnth)
    })
})

*/
