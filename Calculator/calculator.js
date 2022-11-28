let display = document.querySelector(".results");

let button = Array.from(document.getElementsByClassName("btn"));

button.map((button) => {
  button.addEventListener("click", (ele) => {
    ele.preventDefault();
    switch (ele.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += ele.target.innerText;
    }
  });
});
