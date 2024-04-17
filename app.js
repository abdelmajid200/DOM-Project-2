
const btn = document.querySelector("button");
function getRandomColor(number) {
  return Math.floor(Math.random() * (number + 1));
}
btn.addEventListener("click", () => {
  const rndCol = `rgb(${getRandomColor(255)} ${getRandomColor(
    255
  )} ${getRandomColor(255)})`;
  const di = document.getElementById("color-box");
  di.style.backgroundColor = rndCol;
});
