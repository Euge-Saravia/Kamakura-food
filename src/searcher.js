//DEBE buscar los productos por los filtros
import { displayMenu } from "./menu.js";

function filterProducts(filterButtons, products) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.innerHTML.toLowerCase();
      if (category === "todos") {
        displayMenu(products);
      } else {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );
        displayMenu(filteredProducts);
      }
    });
  });
}

export { filterProducts };
