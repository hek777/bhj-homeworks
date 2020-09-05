let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');


let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.responseText).data;
        console.log(data);
        pollTitle.textContent = data.title;
        for (let i of Array.from(data.answers)) {
            pollAnswers.insertAdjacentHTML("beforeEnd", 
            `<button class="poll__answer">
              ${i}
             </button>`)
        }
        let button = document.querySelectorAll('.poll__answer');
        for (let p of Array.from(button)) {
            p.addEventListener('click', function () {
                alert(`Спсибо, ваш голос засчитан`);
            })
        }
    }
}
