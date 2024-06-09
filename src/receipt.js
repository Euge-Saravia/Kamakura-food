import { cart, cartTotal } from "./cart.js";

function showReceipt() {
    const receiptContainer = document.getElementById("receipt-container");
    const totalElement = document.getElementById("receipt-total");

    clearReceipt();

    if (cart.length === 0) {
        const messageElem = document.createElement("h3");
        messageElem.classList.add("receipt-message");
        messageElem.innerHTML = `<h3>Aun no has escogido tu orden</h3>`;

        receiptContainer.insertBefore(messageElem, totalElement);
    } else {
        cart.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("receipt-product");
            productElement.id = "receipt-product";
            productElement.innerHTML = `
            <h3>${product.name}</h3>
            <div class="receipt-price">
                <p>Cantidad: ${product.quantity}</p>
                <h5>Subtotal: ${(product.price * product.quantity).toFixed(
                2
            )} €</h5>
            </div> `;

            receiptContainer.insertBefore(productElement, totalElement);
        });
    }

    updateReceiptTotal(totalElement);
}

function updateReceiptTotal(totalElement) {
    const receiptTotal = cartTotal();
    totalElement.innerHTML = `Total: ${receiptTotal.toFixed(2)} €`;
}

function clearReceipt() {
    const title = document.querySelector(".receipt-message");
    if (title) {
        title.remove();
    }
    const message = document.querySelector(".message-empty-cart");
    if (message) {
        message.remove();
    }
    const products = document.querySelectorAll(".receipt-product");
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        product.remove();
    }
}

export { showReceipt };
