let toggle = document.querySelector(".toggle");

let range_input = document.querySelector(`input[type="range"]`);

let clicked = false;
toggle.addEventListener("click", () => {
  clicked = !clicked;
  if (clicked == true) {
    toggle.style.backgroundColor = `${"#7AEADF"}`;
  } else {
    toggle.style.backgroundColor = `${"#CFD8EF"}`;
  }
  console.log(clicked);
});

range_input.addEventListener("input", (e) => {
  let val = parseInt(e.target.value);
  let target = e.target;

  target.style.backgroundSize = `${val}% 100%`;
});
