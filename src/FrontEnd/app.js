"use strict";
const ACTIVATION_BUTTON = document.querySelector("#party-on");

if (ACTIVATION_BUTTON) {
  ACTIVATION_BUTTON.textContent = ACTIVATION_BUTTON.textContent
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function initiatePartyMode() {
  // Do a little changes with the JS here, mostly things will be done with CSS I guess ? If not this function is here for a reason
  console.log("Party yay!");
}

document.addEventListener("keydown", (key) => {
  if (key.code === "Space") initiatePartyMode();
});

ACTIVATION_BUTTON?.addEventListener("click", (_) => {
  initiatePartyMode();
});
