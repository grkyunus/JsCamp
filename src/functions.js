function addToCart(quantity, productName="Elma"){
    console.log("sepete eklendi " + productName +" Adet" + quantity)
}

addToCart(10)

console.log("-------------------------------")

let sayHello = ()=>{
    console.log("hello world!")
}

sayHello()

console.log("-------------------------------")

let sayHello2 = function () {
    console.log("hello world 2")
}

sayHello2()


// tercih edilmemesi gereken bir yöntemdir.
function addToCart2(productName,quantity,unitPrice){

}

addToCart2("Elma",5,10)
addToCart2("Elma",5,10)

console.log("-------------------------------")
//Doğrusu

let product1 = {productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product){
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}


addToCart3(product1)

console.log("-------------------------------")

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName="KARPUZ"
console.log(product3.productName)

console.log("-------------------------------")


function addToCart4(products) {
    console.log(products);
}
// alt ve üst products bir birine bağlı değildir. yani birini ismi farklı olda bir şey değişmez.

let products = [
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 10, quantity: 5},
    {productName: "Karpuz", unitPrice: 10, quantity: 5}
];

addToCart4(products);

console.log("-------------------------------")

// rest operatörünü her zaman fonksiyonun sonuna bırakmak doğrudur.
function add(...numbers) {  // "..." rest operatörü
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }    
    console.log(total) 
}

add(20,30)
add(20,30,40)

console.log("-------------------------------")

let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))

console.log("-------------------------------")

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
// console.log(marmara)
console.log(icAnadoluSehirleri)

console.log("-------------------------------")


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = 
{productName: "Elma", unitPrice: 10, quantity: 5}) 

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

console.log("-------------------------------")




