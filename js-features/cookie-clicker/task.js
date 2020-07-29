let sizecookie = document.getElementById("cookie")
let counter = document.getElementById("clicker__counter")
sizecookie.onclick = function() {
    counter.textContent ++;
    if (counter.textContent % 2) {
        sizecookie.width = 400;
    } else {
        sizecookie.width = 200;
    };
};