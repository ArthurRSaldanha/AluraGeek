import { conectApi } from "./conectApi.js";
import showProducts from "./showProducts.js"


document.body.addEventListener('click', async function(event) {
    if (event.target.matches('.deleteButton')) {
        const idProduct = event.target.dataset.id;
        await conectApi.deleteProduct(idProduct);
        // Refresh the cards after deletion
        showProducts();
    }
});