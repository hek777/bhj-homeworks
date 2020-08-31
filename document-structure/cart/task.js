let btnQuantity = Array.from(document.getElementsByClassName('product__quantity-control'));
let btnAddProduct = Array.from(document.getElementsByClassName('product__add'));
let [basket] = document.getElementsByClassName('cart__products');

const minusQuantity = item => {
    item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent--;
    if ( item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent < 1 ) {
        item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = 1;
    }
}

const plusQuantity = item => {
    item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent++;
}

btnQuantity.forEach( item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('product__quantity-control_dec')) {
            minusQuantity(item);
        }
        if (item.classList.contains('product__quantity-control_inc')) {
            plusQuantity(item);
        }
    })
});

btnAddProduct.forEach( item => {
    item.addEventListener('click', () => {
        let cardImageSrc = item.closest('.product').querySelector('img').getAttribute('src');
        let cardQuantity = item.closest('.product').querySelector('.product__quantity-value').textContent;
        let productId = item.closest('.product').dataset.id;
        let cartProtucts = Array.from(document.getElementsByClassName('cart__product'));
        
        if (cardQuantity > 0) {
            let findCartProduct = cartProtucts.find( item => item.dataset.id === productId );            

            if (findCartProduct) {
                let findCartProductQuantity = +findCartProduct.querySelector('.cart__product-count').textContent;
                findCartProductQuantity += +cardQuantity;
                findCartProduct.querySelector('.cart__product-count').textContent = findCartProductQuantity;
            } else {
                basket.insertAdjacentHTML('afterbegin', 
                `<div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${cardImageSrc}">
                    <div class="cart__product-count">${cardQuantity}</div>
                </div>`);
            }
        }
        
    })
})
