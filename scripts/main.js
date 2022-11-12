var open = document.querySelector(".hamburgiy");
var close = document.querySelector(".header__clos");
var wrapper = document.querySelector(".wrapper");

open.addEventListener("click", function () {
  wrapper.classList.toggle("wrapper-active");
});

close.addEventListener("click", function () {
  wrapper.classList.toggle("wrapper-active");
});
