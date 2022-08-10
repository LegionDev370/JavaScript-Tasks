let select = document.querySelector("#currency")
let form = document.querySelector("form")
let input = document.querySelector("#input")
let btn = document.querySelector("button")
let dollarToSumm = document.querySelector(".DollarToSumm")
let euroToSumm = document.querySelector(".EuroToSumm")

form.addEventListener("submit", function(evt){
    evt.preventDefault()
    let inputvalue = input.value;
    let dollarPrice = 10650
    let euroPrice = 11650
    if (!isNaN(inputvalue)){
        if (select.value === "dollar"){
            let resultDollar = inputvalue * dollarPrice;
            dollarToSumm.textContent += + " " + resultDollar + " " + "so'm";
        }else if (select.value === "euro"){
            let resultEuro = inputvalue * euroPrice;
            euroToSumm.textContent += + " " + resultEuro + " " + "so'm";
        }
    }else{
        alert("Please only numbers")
    }
})