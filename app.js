"use strict";

const featuresCard = document.querySelectorAll(".features__card");

featuresCard.forEach((card) => {
  const featuresBtn = document.querySelectorAll(".features__card-btn");

  card.addEventListener("mouseover", (e) => {
    const btn = document.querySelector(`.btn-${e.target.id}`);
    btn.classList.add("show-btn");

    btn.addEventListener("mouseover", () => {
      btn.classList.add("show-btn");
    });
  });

  card.addEventListener("mouseout", () => {
    featuresBtn.forEach((button) => {
      button.classList.remove("show-btn");
    });
  });
});
