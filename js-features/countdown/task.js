
const getCounter = function() {
    const counter = document.getElementById("timer");
    counter.textContent -= 1;
    if (counter.textContent == -1) {
        alert(`Вы победили в конкурсе!`);
    }
    
}
setInterval(getCounter, 1000);
