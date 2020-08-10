let menuLinks = document.querySelectorAll('.menu__link');

for (let i of Array.from(menuLinks)) {
    i.onclick = function () {

        let parent = i.parentElement;
        let menusub = parent.querySelector('.menu_sub');

        menusub.classList.toggle("menu_active")

        if (i.closest('.menu_main')) {
            return false;
        };
    };
};
