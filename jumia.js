const items = document.querySelectorAll('img');
const nbslide = items.length;
const suivant = document.querySelector('.suivant');
const precedent = document.querySelector('.precedent');
let count = 0;

function slideSuivant() {
    items[count].classList.remove('active');

    if (count < nbslide - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivant)

function slidePrecedent() {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = nbslide - 1;
    }
    items[count].classList.add('active');
}
precedent.addEventListener('click', slidePrecedent)

setInterval(function () {
    if (count < nbslide - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active')

}, 2000)


const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
arrow1.disabled = true;

const slideFooter = () => {
    const img1 = document.querySelectorAll('.img-footer1');
    const img2 = document.querySelectorAll('.img-footer2');

    for (let i = 0; i < img1.length; i++) {
        const slide1 = img1[i];
        const slide2 = img2[i];
        if (slide1.style.display == 'block') {
            slide1.style.display = 'none';
            slide2.style.display = 'block';
            arrow2.disabled = true;
            arrow1.disabled = false;
        } else {
            slide1.style.display = 'block';
            slide2.style.display = 'none';
            arrow1.disabled = true;
            arrow2.disabled = false;
        }
    }
}





/* var img_slider = document.getElementsByClassName('img');
let etape = 0;
let nbr_img = img_slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleveractiveimages(){
    for(let i = 0; i<nbr_img; i++){
        img_slider[i].classList.remove('active');
    }
}
suivant.addEventListener('click', function(){
    etape++;
    if(etape >= nbr_img){
        etape = 0;
    }
    enleveractiveimages();
    img_slider(etape).classList.add('active');
})
precedent.addEventListener('click', function(){
    etape--;
    if(etape < 0){
        etape = nbr_img - 1;
    }
    enleveractiveimages();
    img_slider(etape).classList.add('active');
})
setInterval(function(){
    etape++;
    if(etape >= nbr_img){
        etape = 0;
    }
    enleveractiveimages();
    img_slider(etape).classList.add('active');

}, 3000) */