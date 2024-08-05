const BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for(let select of dropdowns){
  for(let currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "USD"){
      newOption.selected = "selected";}
    else if(select.name === "to" && currCode === "INR"){
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
   
  select.addEventListener("change", (el) => {
    changeCountryFlag(el);
  })
}

const updateExchangeRate = async () => {
    let usrAmt = document.querySelector(".amount input");
let amount = usrAmt.value;
if(amount === "" || amount <1){
    amount = 1;
    usrAmt.value = 1;
}
const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];

let finalAmt = amount * rate;
msg.innerText = `${amount} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}

const changeCountryFlag = (el) => {
   let currCode = el.target.value;
   let countryCode = countryList[currCode];
   let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = el.target.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (el) => {
    el.preventDefault();
    updateExchangeRate();
    
});


window.addEventListener("load", ()=>{
    updateExchangeRate();
});