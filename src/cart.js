import { displayCart, updateDisplayQuantity, updateDisplaySubtotal, updateDisplayTotal } from './cartUI.js';

const cart = [];

function addToCart(product) {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
        increaseQuantity(existingProduct);
    } else {
        product.quantity = 1;
        product.subtotal = product.quantity * product.price
        cart.push(product);
    }
}

function increaseQuantity(product) {
    product.quantity++;
    updateDisplayQuantity(product);

}

function decreaseQuantity(product) {
    if (product.quantity > 1) {
        product.quantity--;
        updateDisplayQuantity(product);
    } else {
        removeProduct(product);
    }

}

function removeProduct(product) {
    let index = cart.indexOf(product);
    cart.splice(index, 1);
    cartTotal();
    displayCart();

}

function updateSubtotal(product) {
    const subtotal = product.price * product.quantity;
    product.subtotal = subtotal;
    updateDisplaySubtotal(subtotal, product);
    cartTotal();
}


function cartTotal() {
    const total = cart.reduce((total, product) => total + product.subtotal, 0);
    updateDisplayTotal(total);
    return total;
}

function clearCart() {
    cart.length = 0;
}



export { addToCart, cart, cartTotal, decreaseQuantity, increaseQuantity, updateSubtotal, removeProduct, clearCart };


