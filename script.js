"use strict";
function refreshPage() {
  window.location.reload();
}
///////////////////////////

let meto = function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
};
let IncrementDiv = (div_id) => {
  let my_div = document.getElementById(div_id);
  my_div.innerText = parseInt(my_div.innerText) + 1;
};
let calcrate = function (result, input) {
  let my_span = document.getElementById(result);
  console.log("=========================");
  console.log(document.getElementById(input).innerText);
  console.log(document.getElementById("totto").innerText);
  console.log("=========================");

  my_span.innerText =
    parseFloat(document.getElementById(input).innerText) /
    parseFloat(document.getElementById("totto").innerText);
};
let calcrates = function () {
  calcrate("birort", "oners");
  calcrate("ikiort", "twoers");
  calcrate("ucort", "thrers");
  calcrate("dortort", "fouers");
  calcrate("besort", "fivers");
  calcrate("altiort", "sixers");
};
let buttonselector = document.getElementById("button1");
let diceprinter = document.getElementById("placeholder");
buttonselector.addEventListener("click", function () {
  let result = meto();
  IncrementDiv("totto");
  diceprinter.innerHTML = result;

  switch (result) {
    case 1:
      IncrementDiv("oners");
      break;
    case 2:
      IncrementDiv("twoers");
      break;
    case 3:
      IncrementDiv("thrers");
      break;
    case 4:
      IncrementDiv("fouers");
      break;
    case 5:
      IncrementDiv("fivers");
      break;
    case 6:
      IncrementDiv("sixers");
      break;
  }
  calcrates();
});
