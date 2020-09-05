let items = document.getElementById('items');   
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200){
        loader.classList.toggle('loader_active');
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        for (let i in data.response.Valute) {
            items.insertAdjacentHTML('beforeEnd', ` <div class="item">
            <div class="item__code">
            ${data.response.Valute[i].CharCode}
        </div>
        <div class="item__value">
        ${data.response.Valute[i].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
        </div>`)
        }
        
    }
}
