let offset = 0;
const carousel = document.querySelector('.carousel');
let prevButton = document.querySelector('.prev-button'),
nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', function(){
    offset += 140;
    if (offset >= 420){
        nextButton.setAttribute("disabled", "true");
        nextButton.classList.add('off-button');
    }
    prevButton.disabled = false;
    prevButton.classList.remove('off-button');
        
    carousel.style.left = -offset + 'px';
});
prevButton.addEventListener('click', function(){
    offset -= 140;
    if (offset === 0){
        prevButton.setAttribute("disabled", "true");
        prevButton.classList.add('off-button');
    }
    nextButton.disabled = false;
    nextButton.classList.remove('off-button');
    carousel.style.left = -offset + 'px';
});



 