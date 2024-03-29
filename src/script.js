const cardBtn = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardBtnClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");

  //grab image information
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;

  //populate modal with new info
  modalInner.innerHTML = `
<img width="600" height="600" src="${imgSrc.replace(
    "200",
    "600"
  )}" alt="${name}"/>
<p>${desc}</p>
`;

  //SHOW MODAL
  modalOuter.classList.add("open");
}

function closeModal() {
  modalOuter.classList.remove("open");
}

cardBtn.forEach((button) =>
  button.addEventListener("click", handleCardBtnClick)
);

modalOuter.addEventListener("click", function (event) {
  const isOutside = !event.target.closest("modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "escape") {
    closeModal();
  }
});
