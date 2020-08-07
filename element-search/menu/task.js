let menuLinks = document.querySelectorAll('.menu__link');

for (let i of Array.from(menuLinks)) {
    i.onclick = function () {

        let parent = i.parentElement;
        let menusub = parent.querySelector('.menu_sub');

        if (menusub.className === 'menu menu_sub') {
            menusub.classList.add("menu_active");
        } else {
            menusub.classList.remove("menu_active")
        }

        if (i.closest('.menu_main')) {
            return false;
        };
    };
};
