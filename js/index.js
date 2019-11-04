// Your code goes here

// const navA = document.getElementsByTagName("a");

// function firstFunction(e) {
//   e.preventDefault();
// }

// function secondFunction() {
//   navA.style.color = "red";
// }

// navA.forEach(a => a.addEventListener("click", firstFunction));
// navA.forEach(a => a.addEventListener("click", secondFunction));

const navA = document.querySelectorAll("a").forEach(e => {
  e.addEventListener("click", event => {
    event.preventDefault();
  });
});

const welcome = document.querySelector(".logo-heading");
welcome.addEventListener("mouseover", () => {
  welcome.style.color = "red";
});

const h2E = document.querySelectorAll("h2").forEach(h2E => {
  h2E.addEventListener("mouseenter", () => {
    h2E.style.background = "yellow";
  });
});

const h2E2 = document.querySelectorAll("h2").forEach(h2E2 => {
  h2E2.addEventListener("mouseleave", () => {
    h2E2.style.background = "white";
  });
});

const pE = document.querySelectorAll("p").forEach(pE => {
  pE.addEventListener("mousedown", () => {
    pE.style.background = "lightblue";
  });
});

const pE2 = document.querySelectorAll("p").forEach(pE2 => {
  pE2.addEventListener("mouseup", () => {
    pE2.style.background = "pink";
  });
});

const h4E = document.querySelectorAll("h4").forEach(h4E => {
  h4E.addEventListener("dblclick", () => {
    h4E.style.background = "pink";
  });
});

const h4E2 = document.querySelectorAll("h4").forEach(h4E2 => {
  h4E2.addEventListener("auxclick", () => {
    h4E2.style.background = "blue";
  });
});

const E2 = document.querySelectorAll("a").forEach(e => {
  e.addEventListener("contextmenu", event => {
    event.preventDefault();
  });
});

const btn = document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("wheel", () => {
    btn.style.background = "pink";
  });
});

const dest = document.querySelector(".destination");
dest.addEventListener("click", event => {
  event.stopPropagation();
});
