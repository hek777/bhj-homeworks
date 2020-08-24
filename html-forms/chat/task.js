let chatWidget = document.querySelector('.chat-widget');
let date = new Date().getHours() + ':' + new Date().getMinutes();
let messages = document.querySelector('.chat-widget__messages');


chatWidget.addEventListener('click', function()  {
    chatWidget.classList.add('chat-widget_active');
});

function ClientMassages() {
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Enter') {
            e.preventDefault();
            let input = document.querySelector('.chat-widget__input');
            let value = input.value;
            if (value != '') {
                messages.innerHTML += `<div class="message message_client">
                                    <div class="message__time">${date}</div>
                                    <div class="message__text">${value}</div>
                                    </div>`;
                input.value = '';                       
                setTimeout(BotAnswer, 1000);
            } 
        }
    })
}


    let answer = ['Все, пока', 'Ты кто?', 'Вы будете покупать или будете дальше спрашивать?', 'Я не знаю', 'Я просто бот, что ты хочешь от меня?'];
    

function BotAnswer() {
    let random = Math.floor(Math.random() * answer.length)
    let robotMassage = answer[random];
    messages.innerHTML +=  `<div class="message">
    <div class="message__time">${date}</div>
    <div class="message__text">${robotMassage}</div>
    </div>`;
};

ClientMassages();

