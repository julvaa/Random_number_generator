const value = document.getElementById("value");
const button = document.getElementById("button");
let result;
const a = 2;
const b = 100;




button.onclick = function random(){
    result = Math.floor(Math.random() * b ) + a;
    value.textContent = `Woah its ${result}`;
}