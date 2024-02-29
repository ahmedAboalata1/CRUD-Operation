var title = document.getElementById('title');
var price = document.getElementById('price');
var ads = document.getElementById('ads');
var discount = document.getElementById('discount');
var tax = document.getElementById('tax');
var total = document.getElementById('total');
var count = document.getElementById('count');
var submit = document.getElementById('submit');

let products =[]
function getTotal() {
    if (price.value != '') {
        var discount = document.getElementById('discount');
        let result = (+price.value + +ads.value + +tax.value) - +discount.value;
        console.log(result)
        total.innerHTML=result
        total.style.backgroundColor ="green";
    }
    else{
        total.style.backgroundColor ="red";
        total.innerHTML=""
    }
}


