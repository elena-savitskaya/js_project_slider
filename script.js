const btnUp = document.querySelector('.up-button');
const btnDown = document.querySelector('.down-button');
const container = document.querySelector('.container');
const sideBar = document.querySelector('.sidebar');

// нужно получить какое количество картинок мы используем - 
// обращаемся в блоку main-slide и посчитаем, а сколько внутри у него дивов
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;
let activeSlideIndex = 0;

btnUp.addEventListener('click', () => {
    changeSlide('up')
})

btnDown.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--

    } if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}