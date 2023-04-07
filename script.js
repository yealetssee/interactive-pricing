let toggle = document.querySelector(".toggle");
let price = document.querySelector(".changing-price");
let views = document.querySelector(".views");

let range_input = document.querySelector(`input[type="range"]`);

let clicked = false;
toggle.addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    toggle.style.backgroundColor = `${"#7AEADF"}`;
  } else {
    toggle.style.backgroundColor = `${"#CFD8EF"}`;
  }
});

range_input.addEventListener("input", (e) => {
  let val = parseInt(e.target.value);
  let target = e.target;

  target.style.backgroundSize = `${val}% 100%`;

  if (val <= 20) {
    views.innerText = "10K pageviews";
    price.innerText = "$8 ";
  } else if (val > 20 && val <= 40) {
    views.innerText = "50K pageviews";
    price.innerText = "$12 ";
  } else if (val > 40 && val <= 60) {
    views.innerText = "100K pageviews";
    price.innerText = "$16 ";
  } else if (val > 60 && val <= 80) {
    views.innerText = "500K pageviews";
    price.innerText = "$24 ";
  } else if (val > 80 && val <= 100) {
    views.innerText = "1M pageviews";
    price.innerText = "$36 ";
  }
});
