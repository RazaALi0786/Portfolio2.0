var typed = new Typed("#element", {
  strings: ["FrontEnd Developer", "Gamer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
