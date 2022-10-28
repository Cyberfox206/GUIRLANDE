const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
let text_color = document.getElementById("text_color").textContent = "Veuillez cliquer sur un carré";
let couler = ""
red.addEventListener("click", () => {
    couler = "red";
    text_color = document.getElementById("text_color").textContent = "VOUS AVEZ CLIQUÉ SUR LE CARRÉ " + couler;
})
green.addEventListener("click", () => {
    couler = "green";
    text_color = document.getElementById("text_color").textContent = "VOUS AVEZ CLIQUÉ SUR LE CARRÉ " + couler;
})
blue.addEventListener("click", () => {
    couler = "blue";
    text_color = document.getElementById("text_color").textContent = "VOUS AVEZ CLIQUÉ SUR LE CARRÉ " + couler;
})
yellow.addEventListener("click", () => {
    couler = "yellow";
    text_color = document.getElementById("text_color").textContent = "VOUS AVEZ CLIQUÉ SUR LE CARRÉ " + couler;
})


