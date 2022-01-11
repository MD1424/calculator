const NumberDisplay = document.querySelector("#number-display");
let displayvarible = "";

function apendnumber(numbertoapend) {
  displayvarible = displayvarible + numbertoapend;
  NumberDisplay.innerHTML = displayvarible;
}

for (let i = 0; i < 10; i++) {
  const Button = document.querySelector("#button-" + i);
  Button.onclick = () => apendnumber(i);
}
const symbols = [
  { id: "#button-plus", symbol: "+" },
  { id: "#button-minus", symbol: "-" },
  { id: "#button-times", symbol: "*" },
  { id: "#button-divide", symbol: "/" },
];
for (let i = 0; i < symbols.length; i++) {
  const Button = document.querySelector(symbols[i].id);
  Button.onclick = () => apendnumber(symbols[i].symbol);
}
document.addEventListener("keypress", (event) => console.log(event.code));
document.addEventListener("keydown", logkey);

function logkey(event) {
  log.textContent += "${event.code}";
}
document.addEventListener("keydown", (event) => {
  if (event.code === "numpad1") {
    appendNumber("1");
  }
});
const expr = "1";
switch (expr) {
  case "1":
    console.log("1");
    break;
  case "2":
    console.log("2");
    break;
  case "3":
    console.log("3");
    break;
  case "4":
    console.log("4");
    break;
  case "5":
    console.log("5");
    break;
  case "6":
    console.log("6");
    break;
  case "7":
    console.log("7");
    break;
  case "8":
    console.log("8");
    break;
  case "9":
    console.log("9");
    break;
  case "0":
    console.log("0");
    break;
}
