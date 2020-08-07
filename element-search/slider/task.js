let leftArrow = document.getElementsByClassName("slider__arrow_prev").item(0);
let rightArrow = document.getElementsByClassName("slider__arrow_next").item(0);


const worker = function (side) {
    let image = document.getElementsByClassName("slider__item slider__item_active").item(0);
    if (side === "left") {
        if (image.previousElementSibling) {
            image.previousElementSibling.classList.add("slider__item_active");
        } else {
            image.parentElement.lastElementChild.classList.add("slider__item_active")
        }
    }
    if (side === "right") {
        if (image.nextElementSibling) {
            image.nextElementSibling.classList.add("slider__item_active");
        } else {
            image.parentElement.firstElementChild.classList.add("slider__item_active")
        }
    }
    image.classList.remove("slider__item_active");

}
leftArrow.onclick = function () {
    worker("left")
};
rightArrow.onclick = function () {
    worker("right")
};



