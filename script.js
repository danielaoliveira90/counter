// Create a simple web page with a button and a counter. When the button is clicked, the counter should increment by 1.

let count = document.querySelector("#count");
let incButton = document.querySelector("#inc");

var num = 0;
count.innerText = num;

incButton.addEventListener("click", increment);


function increment() {
  num++;
  count.innerText = num;
}