let toggle = document.querySelector(".toggle");
let price = document.querySelector(".changing-price");
let views = document.querySelector(".views");
let toggle_handle = document.querySelector(".toggle-handle");

let range_input = document.querySelector(`input[type="range"]`);

let clicked = false;

changePricing();

function changePricing() {
  var currentPrice = 16;
  var previousPrice = 16;
  toggle.addEventListener("click", () => {
    clicked = !clicked;

    if (clicked) {
      toggle.style.backgroundColor = `${"#7AEADF"}`;
      toggle_handle.style.transform = "translateX(20px)";
      currentPrice *= 0.25;
      price.innerText = `$${currentPrice}.00`;
    } else {
      toggle.style.backgroundColor = `${"#CFD8EF"}`;
      toggle_handle.style.transform = "translateX(0px)";
      currentPrice = previousPrice;
      price.innerText = `$${currentPrice}.00`;
    }
  });
  range_input.addEventListener("input", (e) => {
    let val = parseInt(e.target.value);
    let target = e.target;

    target.style.backgroundSize = `${val}% 100%`;

    if (val <= 20) {
      views.innerText = "10K pageviews";
      currentPrice = 8;
      previousPrice = currentPrice;

      if (clicked) {
        currentPrice = currentPrice * 0.25;
        price.innerText = `$${currentPrice}.00`;
      } else {
        price.innerText = `$${previousPrice}.00`;
      }
    } else if (val > 20 && val <= 40) {
      currentPrice = 12;
      previousPrice = currentPrice;
      views.innerText = "50K pageviews";
      if (clicked) {
        currentPrice = currentPrice * 0.25;
        price.innerText = `$${currentPrice}.00`;
      } else {
        price.innerText = `$${previousPrice}.00`;
      }
    } else if (val > 40 && val <= 60) {
      views.innerText = "100K pageviews";
      currentPrice = 16;
      previousPrice = currentPrice;
      if (clicked) {
        currentPrice = currentPrice * 0.25;
        price.innerText = `$${currentPrice}.00`;
      } else {
        price.innerText = `$${previousPrice}.00`;
      }
    } else if (val > 60 && val <= 80) {
      views.innerText = "500K pageviews";
      currentPrice = 24;
      previousPrice = currentPrice;
      if (clicked) {
        currentPrice = currentPrice * 0.25;
        price.innerText = `$${currentPrice}.00`;
      } else {
        price.innerText = `$${previousPrice}.00`;
      }
    } else if (val > 80 && val <= 100) {
      views.innerText = "1M pageviews";
      currentPrice = 36;
      previousPrice = currentPrice;
      if (clicked) {
        currentPrice = currentPrice * 0.25;
        price.innerText = `$${currentPrice}.00`;
      } else {
        price.innerText = `$${previousPrice}.00`;
      }
    }
  });
}
