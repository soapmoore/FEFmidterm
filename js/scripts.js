var tabs = document.querySelectorAll("nav a");
contentPara = document.querySelector(".content");

const divA = document.getElementById("b");
const divB = document.getElementById("c");

divA.style.display = "none";
divB.style.display = "none";

const targetDiv1 = document.getElementById("a");
const btn1 = document.getElementById("recipes");
btn1.onclick = function () {
  targetDiv1.style.display = "block";
  targetDiv2.style.display = "none";
  targetDiv3.style.display = "none";
  window.location.href = "midterm-with-div.html#Recipes";
};

const targetDiv2 = document.getElementById("b");
const btn2 = document.getElementById("reviews");
btn2.onclick = function () {
  targetDiv2.style.display = "block";
  targetDiv1.style.display = "none";
  targetDiv3.style.display = "none";
  window.location.href = "midterm-with-div.html#Reviews";
};

const targetDiv3 = document.getElementById("c");
const btn3 = document.getElementById("delivery");
btn3.onclick = function () {
  targetDiv3.style.display = "block";
  targetDiv2.style.display = "none";
  targetDiv1.style.display = "none";
  window.location.href = "midterm-with-div.html#Delivery";
};
