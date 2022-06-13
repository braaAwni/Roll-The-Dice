let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg",
];
let dice = document.querySelectorAll("img");
let button = document.querySelector("button");

button.onclick = function () {
  dice.forEach((die) => {
    die.classList.add("shake");
  });
  setTimeout(() => {
    dice.forEach((die) => {
      die.classList.remove("shake");
    });
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);
    document.querySelector("#die-1").setAttribute("src", images[num1]);
    document.querySelector("#die-2").setAttribute("src", images[num2]);
    document.querySelector("#total").innerHTML =
      "Your roll is " + (num1 + 1 + (num2 + 1));
  }, 500);
};
