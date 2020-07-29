let hole = document.querySelectorAll('.hole');
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function restart () {
    dead.textContent = 0;
    lost.textContent = 0;
};

for (let i = 0; i <= hole.length; i++) {
    hole[i].onclick = function(){
        
        if (this.classList.contains("hole_has-mole")) {
            dead.textContent ++;
        } else {
            lost.textContent ++;
        };

        if (dead.textContent == 10) {
            alert(`Вы победили`)
            restart();
        };

        if (lost.textContent == 10) {
            alert(`Вы проиграли`)
            restart();
        }
    };
};