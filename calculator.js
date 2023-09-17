const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const equal_btn = document.querySelector(".btn_equal");
const clear_btn = document.querySelector(".btn-clear");
buttons.forEach((button) => {
button.addEventListener("click", () => {
    screen.value += button.value;
});
});
equal_btn.addEventListener("click", () => {
screen.value = eval(screen.value);
});
clear_btn.addEventListener("click", () => {
screen.value = "0";
});