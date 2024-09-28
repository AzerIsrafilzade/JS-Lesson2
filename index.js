// Masaustu JS
// React Native Mobile APP
// SPA Single Page Application React JS

// Dinamik type proqramlashdirma dilidir

// varibale = value

/* 1.string: "" '' ``
2. number: 2.54
3. boolean: true, false
undefined
{} Object
[] Array Object 

*/

// var s9 undefined (teyin olunmayib,hele fikirleshir)

// s9 = [{},{},{}]

//var, let, const yaddashda deyishen yaratmanin xususi ve duzgun halidir


// berarberlik isharesi o zaman yazilir ki sen RAMda hansisa bir yaradirsan

var firstLaptop = {
    model: "ASUS",
    price: 2000,
    memory: "256GB",
    stockcondition: true

}

var secondLaptop = {
    model: "HP",
    price: 3000,
    memory: "128GB",
    stockcondition: false

}

var laptops = [
    {
        model: "ASUS",
        price: 2000,
        memory: "256GB",
        stockcondition: true
    
    },

    {
        model: "HP",
        price: 3000,
        memory: "128GB",
        stockcondition: false
    
    },


]

// console.log(laptops[0].model, laptops[0].memory)

// DOM-Document Object Model
// html ve javascriptde elementlere tesir etmek DOM adlanir

// alert("Kod calishir") JS HTML bagli olmasini yoxlamaq

var ModelTdTag = document.getElementById("model")
var PriceTdTAg = document.getElementById("price")
var StorageTdTAg = document.getElementById("storage")
var StockTdTAg = document.getElementById("stock")

ModelTdTag. innerText = "ACER"
PriceTdTAg. innerText = "3000 manat"
StorageTdTAg. innerText = "128GB"
StockTdTAg. innerText = false



// border: 1px solid red; - CSS
// console.log() - js


/* let stock = 5; // Change this value to test different scenarios
let availability;

Using if-else statements
if (stock > 10) {
    availability = "In Stock";
} else if (stock > 0) {
    availability = "Limited Stock";
} else {
    availability = "Out of Stock";
}

Display the result in the HTML
document.getElementById("stock-status").innerText = availability;

*/
