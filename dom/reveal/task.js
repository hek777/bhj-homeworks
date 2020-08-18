let reveal = document.querySelectorAll(".reveal");
for (let i of Array.from(reveal)) {
    window.addEventListener('scroll', function(){
        let viewportHeight = window.innerHeight;
        let elementTop = i.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
            i.classList.add('reveal_active');
        };
        if (elementTop > viewportHeight) {
            i.classList.remove('reveal_active');
        }
    });
};
