
const getCounter = function() {
    const counter = document.getElementById("timer");
    counter.textContent -= 1;
    if (counter.textContent == 0) {
        alert(`Вы победили в конкурсе!`);
        //clearInterval(timerID);
        location.reload(true);
    } 
}
let timerID = setInterval(getCounter, 1000);

