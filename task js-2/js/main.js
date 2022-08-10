let dress = 100_000;
let shirt = 150_000;
let foot_wear = 130_000;
const discountToDress = dress * 0.1;
const priceDress = dress - discountToDress;
const discountToShirt = shirt * 0.15;
const priceShirt = shirt - discountToShirt;
const discountToFoot_Wear = foot_wear * 0.2;
const priceFoot_Wear = foot_wear - discountToFoot_Wear;
let info = prompt(
  "Choose your wears:\n 1.Dress\n 2.Shirt\n 3.Foot-Wear\nPrice-Dress = 100 000 so'm " +
    "Dicount 10%" +
    " " +
    priceDress +
    " " +
    "so'm\nPrice-Shirt = 150 000 so'm" +
    " " +
    "Discount 15%" +
    " " +
    priceShirt +
    " " +
    "so'm\nPrice-Foot_Wear = 130 000 so'm" +
    " " +
    "Dicount 20%" +
    " " +
    priceFoot_Wear +
    " " +
    "so'm\nChoose product numbers eg.1 = Dress"
);
if (info === "1"){
    user = Number(prompt("Nechta Olasiz"))
    result = user * priceDress
    alert(result + " " + "so'm bo'ladi")
}else if (info === "2"){
    user = Number(prompt("Nechta Olasiz"))
    result = user * priceShirt
    alert(result + " " + "so'm bo'ladi")
}else if(info === "3"){
    user = Number(prompt("Nechta Olasiz"))
    result = user * priceFoot_Wear
    alert(result + " " + "so'm bo'ladi")
}