import { clearCart, cart } from "./cart.js";
import { displayCart } from "./cartUI.js";
import { showReceipt } from "./receipt.js";
import { toggleDisplay } from "./events.js"; 

function displayAlert() {
  if (cart.length === 0) {
    const messageCheck = document.querySelector(".message-empty-cart");
    if (!messageCheck) {
      const receiptContainer = document.querySelector("#receipt-container");
      const message = document.createElement("p");
      message.classList.add("message-empty-cart");
      message.innerHTML = "Tu orden está vacía";
      receiptContainer.appendChild(message);
    }
  } else {
    const container = document.querySelector(".container");
    const alert = document.createElement("dialog");
    alert.classList.add("alert");
    alert.innerHTML = ` 
          <button class="close-button" id="close-alert"><img src="./assets/img/close.svg" alt="close"></button>
          <h3>Gracias por tu Compra</h3>
          <p>¡Pedido realizado con éxito gracias por comprar en Kamakura Food!</p>
          <img class="image-logo" src="./assets/img/logo.svg" alt="restaurant logo">
      `;
  
    container.appendChild(alert);
    alert.showModal();
    closeAlert(alert);
  }
}

function closeAlert(alert) {
  const closeAlertButton = alert.querySelector("#close-alert");
  closeAlertButton.addEventListener("click", () => {
    alert.close();
    clearCart();

    const cartContainer = document.getElementById("cart-container");
    toggleDisplay(cartContainer);

    displayCart();
    showReceipt();

    const receiptContainer = document.querySelector("#receipt-container");
    toggleDisplay(receiptContainer);

    const productsContainer = document.querySelector("#products-container");
    toggleDisplay(productsContainer);
  });
}

export { displayAlert };
