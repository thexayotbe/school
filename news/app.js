let navbar = document.querySelector(`.navbar`);

let menuBtn = document.querySelector(`.icon`);
let menuOpen = false;

let body = document.querySelector(`body`).style.width;

if (body < "968px") {
  let lin = document.getElementsByClassName(`header-link`);
  menuBtn.addEventListener(`click`, function () {
    if (!menuOpen) {
      menuBtn.classList.add(`open`);
      menuOpen = true;
      navbar.classList.add("active");
    } else {
      menuBtn.classList.remove(`open`);
      menuOpen = false;
      navbar.classList.remove("active");
    }
  });
  for (i = 0; i <= lin.length; i++) {
    lin[i].addEventListener(`click`, function () {
      if (!menuOpen) {
        menuBtn.classList.add(`open`);
        menuOpen = true;
        navbar.setAttribute(`class`, `active`);
      } else {
        menuBtn.classList.remove(`open`);
        menuOpen = false;
        navbar.removeAttribute(`class`, `active`);
        navbar.setAttribute(`class`, `navbar`);
      }
    });
  }
}
