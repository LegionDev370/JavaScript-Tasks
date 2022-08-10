let user = prompt("Ismingizni kiriting")
let admin = Number(prompt("Salom" + " " + user + " " +  "Qancha pulingiz borligini kiriting faqat so'mda"))
const dollarPrice = 10650
const euroPrice = 11650
let tourst = 300
let travel = 200
let transport = 150
const euroToSum = transport * euroPrice
const dollarToSum = (tourst + travel) * dollarPrice
const result = euroToSum + dollarToSum
const ajax = result - admin
if (admin >= result){
    alert("Yeah you traveling");
}else{
    alert("Oops not enough money" + " " + " " + "Your complet money" + " " + ajax + "so'm" );
}