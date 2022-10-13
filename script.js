let offset = 0;
const carousel = document.querySelector('.carousel');
let prevButton = document.querySelector('.prev-button'),
nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', function(){
    offset += 140;
    if (offset >= 420){
        nextButton.setAttribute("disabled", "true");
    }
    else{
        nextButton.disabled = false;
        }
    carousel.style.left = -offset + 'px';
});
prevButton.addEventListener('click', function(){
    offset -= 140;
    if (offset === 0){
        prevButton.setAttribute("disabled", "true");
    }
    else{
        prevButton.removeAttribute('disabled');
    }
    carousel.style.left = -offset + 'px';
});



 
