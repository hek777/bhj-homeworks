let modalmain = document.getElementById("modal_main");
let closemodel = document.querySelectorAll("div.modal__close");
let bttnShowSuccess = document.querySelector(".show-success");
let modalSuccess = document.getElementById("modal_success");

modalmain.classList.add("modal_active");

closemodel[0].onclick = function () {
    this.closest(".modal").remove("modal_active");
};

bttnShowSuccess.onclick = function () {
    modalSuccess.classList.add("modal_active");
    modalmain.classList.remove("modal_active");
};

closemodel[1].onclick = function () {
    this.closest(".modal").remove("modal_active");
};
