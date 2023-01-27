// Change Nav ON Scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})
// Show/hid faq Anwser
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
  })
})
// Show/hid nav
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");
menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
});
// close Nav
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
}
closeBtn.addEventListener('click', closeNav)
// FORM

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// Scroll Reveal
const ravealeElement = document.querySelectorAll("[data-reveal]");
const scrollReaveal = () => {
  for (let i = 0, len = ravealeElement.length; i < len; i++) {
    const isElementOnScreen =
      ravealeElement[i].getBoundingClientRect().top < window.innerHeight;
    if (isElementOnScreen) {
      ravealeElement[i].classList.add("revealed");
    } else {
      ravealeElement[i].classList.remove("revealed");
    }
  }
};
window.addEventListener("scroll", scrollReaveal);
window.addEventListener("load", scrollReaveal);
// Scroll Reveal
// Scroll top
let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};