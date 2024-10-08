const card = document.querySelector(".card");
const container = document.querySelector(".container");

/// items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const circle = document.querySelector(".circle");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;

  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

//animate In

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  title.style.transform = "translateZ(120px)";
  sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(90px)";
});

//animate oUT

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease"; // Smooth transition back to original state
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
