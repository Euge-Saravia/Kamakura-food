//DEBE imprimir en pantalla la información de filtros.
import { filterProducts } from "./searcher.js";

function setUpFiltersButtons(filters) {
    let filterContainer = document.querySelector(".filters-container");

    for (let index = 0; index < filters.length; index++) {
        const btn = document.createElement("button");
        btn.classList.add("filter");
        btn.innerHTML = filters[index];

        filterContainer.appendChild(btn);
    }
}

// Obtén una referencia a los botones filtradores
function applyFilter(products) {
    const filterButtons = document.querySelectorAll(".filter");
    filterProducts(filterButtons, products);
}

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
function displayMenu(products) {
    const productsContainer = document.querySelector('#products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');
        productContainer.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="price-container">
                            <h5>${product.price} €</h5>
                            <button class="add-button" id=${product.id}>Añadir</button>
                        </div>
                        `

        productsContainer.appendChild(productContainer);

    })

}


export { displayMenu, setUpFiltersButtons, applyFilter }










