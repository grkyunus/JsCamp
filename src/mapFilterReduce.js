let cart = [
    {id:1,productName:"Telefon",quantity:3,unitPprice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPprice:30},
    {id:3,productName:"Kalem",quantity:1,unitPprice:20},
    {id:4,productName:"Şarj Cihazı",quantity:2,unitPprice:100},
    {id:5,productName:"Kitap",quantity:3,unitPprice:30},
    {id:6,productName:"Pot",quantity:5,unitPprice:150},
]

console.log("<ul>")
cart.map(product =>{
    console.log("<li>"+ product.productName + " : " + product.unitPprice * product.quantity +"</li>")
})
console.log("</ul>")

console.log("-------------------------------")

let total = cart.reduce((acc,product)=> acc+ product.unitPprice * product.quantity,0 )

console.log(total)

console.log("-------------------------------")

let quantityOver2 = cart.filter(product=> product.quantity>2)

console.log(quantityOver2)



console.log("----------------referans tip ekleme---------------")

function addToCart(sepet) {
    sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPprice:20})    
}

addToCart(cart)

console.log(cart)

console.log("---------------değer tip atama----------------")

let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)

console.log(sayi)

console.log("-------------------------------")




