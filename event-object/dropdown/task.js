let dropdownList = document.querySelector(".dropdown__list");
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownlink = document.querySelectorAll(".dropdown__link");


dropdownValue.addEventListener("click", function() {
    dropdownList.classList.toggle('dropdown__list_active');
})
 
for (let i of Array.from(dropdownlink)) {
    i.onclick = function() {
        dropdownList.classList.toggle("dropdown__list_active")
        dropdownValue.textContent = this.textContent;
        return false;
    }
}
