let modalmain = document.getElementById("modal_main");
let closemodel = document.querySelectorAll("div.modal__close");
let bttnShowSuccess = document.querySelector(".show-success");
let modalSuccess = document.getElementById("modal_success");

modalmain.className = "modal modal_active";

closemodel[0].onclick = function () {
    modalmain.className = "modal";
};

bttnShowSuccess.onclick = function () {
    modalSuccess.className = "modal modal_active";
    modalmain.className = "modal ";
};

closemodel[1].onclick = function () {
    modalSuccess.className = "modal";
};
