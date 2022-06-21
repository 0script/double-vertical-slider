const sliderContainer=document.querySelector('.slider-container');
const slideRight=document.querySelector('.right-slide');
const slideLeft=document.querySelector('.left-slide');
const upButton=document.querySelector('.up-button');
const downButton=document.querySelector('.down-button');
const slideLength=slideRight.querySelectorAll('div').length;

let activeSlideIndex=0;

//slideLeft.style.top=`-${(slideLength-1)*100 }vh`


const slideUp=()=>{
    const slideHeight=sliderContainer.clientHeight;
    console.log(slideHeight);
        
    if(activeSlideIndex>slideLength-1){
        activeSlideIndex=0;
        console.log(activeSlideIndex);
        
    }

    slideRight.style.transform=`translateY(-${activeSlideIndex*slideHeight}px)`;
}


const slideDown=()=>{
    const slideHeight=sliderContainer.clientHeight;

    if(activeSlideIndex>slideLength-1){
        activeSlideIndex=0;
        console.log(activeSlideIndex);
        
    }

    slideLeft.style.transform=`translateY(-${activeSlideIndex*slideHeight}px)`;
}

const slide=()=>{
    activeSlideIndex++;
    slideDown();
    slideUp();
}

upButton.addEventListener('click',slide);
downButton.addEventListener('click',slideDown);
