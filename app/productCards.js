const pathToImages='Catalog';
const pathToProductsImages='FeatureItemCard';
const feturedItemsCardEl = document.querySelector('.feturedItemsCard');
//add card
function insertProductInToPage(products, feturedItemsCardEl){
    let ProducsMurkup =document.createElement('div');
    ProducsMurkup.classList.add('feturedItemsCard');
    // let ProducsMurkup ='';
    for (let product of products){
        ProducsMurkup.innerHTML+=getProdutsInMurkup(product);
    }
    feturedItemsCardEl.insertAdjacentElement('afterbegin', ProducsMurkup)
}
insertProductInToPage(products,feturedItemsCardEl);

function getProdutsInMurkup(product) {
    return`<div class="itemCard">
    <div class="block">
        <img src="${pathToImages}/${pathToProductsImages}/${product.image}" alt="${product.name}">
        <div class="imgBusket">
            <button data-productId="${product.id}">
                <img src="img/FeatureItemCard/hover/BusketHover.svg" class="imgBusketPhoto" alt="">
                Add&nbsp;to&nbsp;Cart
            </button>
        </div>
    </div>

    <h3><strong>${product.name}</strong></h3>
    <p>${product.description}</p>
    <div class="price">$${product.price}</div>
</div>
`
}