//var declarations
var 
header,
headerProgressLineImage,
headerProgressLineDot1,
headerProgressLineDot1Text,
headerProgressLineDot2,
headerProgressLineDot2Text,
headerProgressLineDot3,
headerProgressLineDot3Text
;

function lineAnimate() {
    header = document.querySelector('.header');
    headerProgressLineImageWrapper = document.querySelector('.header__section-secondary-section-two');
    headerProgressLineDot1 = document.querySelector('.header__section-secondary-section-two-dots-1');
    headerProgressLineDot1Text = document.querySelector('.header__section-secondary-section-two-dots-1-text');
    headerProgressLineDot2 = document.querySelector('.header__section-secondary-section-two-dots-2');
    headerProgressLineDot2Text = document.querySelector('.header__section-secondary-section-two-dots-2-text');
    headerProgressLineDot3 = document.querySelector('.header__section-secondary-section-two-dots-3');
    headerProgressLineDot3Text = document.querySelector('.header__section-secondary-section-two-dots-3-text');

    headerProgressLineImageWrapper.classList.add("animate-line-width");
    setTimeout(() => {
        headerProgressLineDot1.classList.add("animate-dot-width");
        headerProgressLineDot1Text.classList.add("animate-dot-text-width");
    }, 1500);

    setTimeout(() => {
        headerProgressLineDot2.classList.add("animate-dot-width");
        headerProgressLineDot2Text.classList.add("animate-dot-text-width");
    }, 2000);

    setTimeout(() => {
        headerProgressLineDot3.classList.add("animate-dot-width");
        headerProgressLineDot3Text.classList.add("animate-dot-text-width");
    }, 2500);

}