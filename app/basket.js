

let basketMenuAll = document.querySelector('.basketMenu_active');
let BuyTotal = document.querySelector('.Buy');
let BasketButton = document.querySelector('.BasketBuy');
let basketTotalEl=document.querySelector('.basketTotal');
let basketTotalValue=document.querySelector('.basketTotalValue')
let basket ={};
//active menu
BasketButton.addEventListener('click', function(){
    basketMenuAll.classList.toggle('basketMenu_active');
})

//click for card event

addEventListenersForCardButtons ();
function addEventListenersForCardButtons (){
    const addToCardBtns = document.querySelectorAll('button[data-productId]');
    addToCardBtns.forEach(function(button){
        button.addEventListener('click', addProductHandler)
    })
}


//event addProductHandler for button card

function addProductHandler(event) {
    const productId= event.currentTarget.getAttribute('data-productId');
    addProductInToBasket(productId);
}

function increaseProductCount(){
    BuyTotal.style.display='inline-block';
    BuyTotal.textContent++
}
function addProductInToBasket(productId) {
    increaseProductCount();
    addProductObj(productId);
    renderProductInBasket(productId);
    calcAllPrice();
}

function addProductObj(productId){
    if(!(productId in basket)){
        basket[productId] =1;
    }else{
        basket[productId]++;
        
    }
}

function renderProductInBasket(productId){
    let productExist = document.querySelector(`.productCount[data-productId='${productId}']`);
    if(productExist){
        addProductCount(productId);
        recalSumProduct(productId);
    }else{
        renderNewProductInBasket(productId);
    }
}
function renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
function addProductCount(productId) {
    const prodCountEl= document.querySelector(`.productCount[data-productId='${productId}']`);
    prodCountEl.textContent++
}

function recalSumProduct(productId){
    const productTotalRowEl=document.querySelector(`.productTotalRow[data-productId='${productId}']`);
    let totalPriceRow=(basket[productId]*products[productId].price).toFixed(2);
    productTotalRowEl.textContent=totalPriceRow;
}

function calcAllPrice(){
    let totalSum=0;
    for(let productId in basket) {
        totalSum+=basket[productId]*products[productId].price;
    }
    basketTotalValue.textContent=totalSum.toFixed(2);
}