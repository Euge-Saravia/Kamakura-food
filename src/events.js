import { products, filters } from '../assets/data/data.js';
import { addToCart } from './cart.js';
import { displayCart } from './cartUI.js';
import { showReceipt } from './receipt.js';
import { displayMenu, setUpFiltersButtons, applyFilter } from './menu.js';
import { displayAlert } from './alert.js';


function setupCartButton() {
    const cartButton = document.getElementById('cart');

    const cartContainer = document.getElementById('cart-container');
    cartButton.addEventListener('click', function () {
        toggleDisplay(cartContainer);
    });
}


function setUpCheckoutButton() {
    const checkoutButton = document.querySelector('#proceedPay-button');
    const productsContainer = document.querySelector('#products-container');
    const receiptContainer = document.querySelector('#receipt-container');

    checkoutButton.addEventListener('click', function () {
        toggleDisplay(productsContainer);
        toggleDisplay(receiptContainer);
        showReceipt();

    });
}


function closeReceipt() {
    const closeReceiptButton = document.querySelector('#close-receipt');
    const cartContainer = document.querySelector('#products-container');
    const receiptContainer = document.querySelector('#receipt-container');

    closeReceiptButton.addEventListener('click', function () {
        toggleDisplay(receiptContainer);
        toggleDisplay(cartContainer);
    });
}


function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const id = parseInt(e.target.getAttribute('id'), 10);
            const product = products.find(product => product.id === id);
            addToCart(product);
            displayCart(products);
        });
    });
}


function toggleDisplay(element) {
    const currentDisplay = getComputedStyle(element).display;
    if (currentDisplay === 'none') {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
}

function endPayment() {
    const payButton = document.querySelector('#pay-button');
    payButton.addEventListener('click', displayAlert);
}


displayMenu(products);
setUpFiltersButtons(filters);
applyFilter(products);
setupCartButton();
setupAddToCartButtons();
setUpCheckoutButton();
displayCart();
closeReceipt();
endPayment();




