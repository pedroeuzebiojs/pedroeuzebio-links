const body = document.querySelector("body");
const switchButton = document.querySelector("#switch button");

const toggleMode = () => {
  body.classList.toggle("light");
};

switchButton.addEventListener("click", toggleMode);
