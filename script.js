"use strict";

///////////////////////////
function refreshPage() {
  window.location.reload();
}
///////////////////////////
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button1");
var result;
let bir = [];
let bir1 = [];
let bir2 = [];
let bir3 = [];
let bir4 = [];
let bir5 = [];

let birort = 0;
let birsayi = 0;
let iki = 0;
let uc = 0;
let dort = 0;
let bes = 0;
let alti = 0;

button.onclick = function () {
  result = dice.roll();
  printNumber(result);
  if (result == 1) {
    bir.push("1");
    birsayi = bir.length;
    document.getElementById("oners").textContent = birsayi;
    birort = birsayi / (birsayi + iki + uc + dort + bes + alti);
    document.getElementById("birort").textContent = birort;
  }
  if (result == 2) {
    bir1.push("1");
    iki = bir1.length;
    document.getElementById("twoers").textContent = iki;
    birort = iki / (birsayi + iki + uc + dort + bes + alti);
    document.getElementById("ikiort").textContent = birort;
  }
  if (result == 3) {
    bir2.push("1");
    uc = bir2.length;
    document.getElementById("thrers").textContent = uc;
    birort = uc / (birsayi + iki + uc + dort + bes + alti);
    document.getElementById("ucort").textContent = birort;
  }
  if (result == 4) {
    bir3.push("1");
    dort = bir3.length;
    document.getElementById("fouers").textContent = dort;
    birort = dort / (birsayi + iki + uc + dort + bes + alti);
    document.getElementById("dortort").textContent = birort;
  }
  if (result == 5) {
    bir4.push("1");
    bes = bir4.length;
    document.getElementById("fivers").textContent = bes;
    birort = bes / (birsayi + iki + uc + dort + bes + alti);
    document.getElementById("besort").textContent = birort;
  }
  if (result == 6) {
    bir5.push("1");
    alti = bir5.length;
    document.getElementById("sixers").textContent = alti;
    birort = alti / (birsayi + iki + uc + dort + bes + alti);
    document.getElementById("altiort").textContent = birort;
  }
  let tot = birsayi + iki + uc + dort + bes + alti;
  document.getElementById("totto").textContent = tot;
};
