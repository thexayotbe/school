let navbar = document.querySelector(`.navbar`);

let menuBtn = document.querySelector(`.icon`);
let menuOpen = false;
let body = document.querySelector(`body`).style.width;
console.log(body);
if (body < "968px") {
  let lin = document.getElementsByClassName(`header-link`);
  menuBtn.addEventListener(`click`, function () {
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
