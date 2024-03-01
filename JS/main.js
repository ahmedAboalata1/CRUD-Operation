var title = document.getElementById('title');
var price = document.getElementById('price');
var ads = document.getElementById('ads');
var discount = document.getElementById('discount');
var tax = document.getElementById('tax');
var total = document.getElementById('total');
var category = document.getElementById('category');
var count = document.getElementById('count');
var submit = document.getElementById('submit');

var productTableBody = document.getElementById('productTableBody')
var deleteAllBtn = document.getElementById('deleteAllBtn')

let products = [];



if (localStorage.getItem('products') != null) {
    products = JSON.parse(localStorage.getItem('products'))
}
displayProducts()

function getTotal() {
    if (price.value != '') {
        var discount = document.getElementById('discount');
        let result = (+price.value + +ads.value + +tax.value) - +discount.value;
        total.innerHTML = result
        total.style.backgroundColor = "green";
    }
    else {
        total.style.backgroundColor = "red";
        total.innerHTML = ""
    }
}

function createProduct() {
    let product = {
        title: title.value,
        price: price.value,
        ads: ads.value,
        tax: tax.value,
        discount: discount.value,
        total: total.innerHTML,
        category: category.value,
        count: count.value,
    }
    if(product.count>=1){
        for (let index = 0; index < product.count; index++) {
            products.push(product)
        }
    }
    else{

    }
    localStorage.setItem('products', JSON.stringify(products))
    console.log(products)
    displayProducts()
    clearProductInputs()
}
function displayProducts() {
    let allRows = ''
    for (let i = 0; i < products.length; i++) {
        let row = `<tr>
                <td>${i}</td>
                <td>${products[i].title}</td>
                <td>${products[i].price}</td>
                <td>${products[i].ads}</td>
                <td>${products[i].tax}</td>
                <td>${products[i].discount}</td>
                <td>${products[i].total}</td>
                <td>${products[i].category}</td>
                <td${products[i].count}</td>
                <td><button id="update"onclick="updateProduct(${i})">Update</button></td>
                <td><button id="delete"onclick="deleteProduct(${i})">Delete</button></td>
               </tr>`
        allRows = allRows + row
    }
    productTableBody.innerHTML = allRows
    deleteAllBtn.style.display='block'
    if (products.length == 0) {
        deleteAllBtn.style.display='none'
    }
}
function updateProduct(index) {
alert("NOT IMPLEMENTED YET")
    localStorage.setItem('products', JSON.stringify(products))
    displayProducts()
}
function deleteProduct(index) {
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
    displayProducts()
}
function clearProductInputs() {
    var allProductInputs = document.querySelectorAll('.input input')
    allProductInputs.forEach(x => x.value = '')
    getTotal()
}
function deleteAll() {
    products=[]
    localStorage.setItem('products', JSON.stringify(products))
    displayProducts()
}