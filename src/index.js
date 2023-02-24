function addToCartProduct(img,productName,price) {
    const tbody=document.querySelector('tbody');
    const titleNames=document.querySelectorAll('.item-name');
    for (let i = 0; i < titleNames.length; i++) {
        if (titleNames[i].innerText == productName) {
            alert('This product already added yours cart');
            return; 
        }
        
    }
    tbody.innerHTML +=`
    <tr class="bg-gray-50">
        <td class="p-3 text-sm text-gray-700"><img src="${img}" alt="" class="w-28"></td>
        <td class="item-name">${productName}</td>
        <td class="item-price">${price}</td>
        <td class="p-3 text-sm text-gray-700"><input type="number" min="0" class="qty" value="1"></td>
        <td class="total-product-price">${price}</td>
        <td class="p-3 text-sm text-gray-700"><button class="remove-btn">Remove</button></td>
    </tr>
    `
    const qtys=document.querySelectorAll('.qty');
    qtys.forEach(val=>{
        val.addEventListener('click',function(event){
            const updateEl=event.target; 
            const parentsEl=updateEl.parentElement.parentElement;
            const itemPrice=parentsEl.querySelector('.item-price');
            let itemPrice2=itemPrice.innerText.replace('$',' ');
            const totalProductPrice=parentsEl.querySelector('.total-product-price');
            if (updateEl.value >0) {
                totalProductPrice.innerText=`${updateEl.value * itemPrice2}$`;
            }
            else{
                totalProductPrice.innerText="0"
            }
            grandTotal();
             
        })
    });
    deleteProduct();
    grandTotal();
}


function grandTotal() {
    let total=0;
    var totalPrice=document.querySelector('.total-price');
    let totalPriceProduct=document.querySelectorAll('.total-product-price');
    totalPriceProduct.forEach(val=>{
        let updatesAmount=parseInt(val.innerText.replace('$',' '));
        total +=updatesAmount;
    });
    totalPrice.innerHTML=`${total}$`;
}



function addToCart() {
    const addToCartBtn=document.querySelectorAll('.btn');
    addToCartBtn.forEach(val=>{
       val.addEventListener('click',function(event){
           let addToCart=event.target;
           let addToCartEl=addToCart.parentElement.parentElement;
           const image=addToCartEl.children[0].children[0].src;
           const productName=addToCartEl.children[1].children[0].innerText;
           const productPrice=addToCartEl.children[1].children[1].innerText;
           addToCartProduct(image,productName,productPrice);
         
       });
    });
}

function deleteProduct() {
    const removeBtn=document.querySelectorAll('.remove-btn');
    removeBtn.forEach(val=>{
        val.addEventListener('click',function(event){
           const e=event.target;
           e.parentElement.parentElement.remove();
           grandTotal();
        })
       });
}

addToCart();