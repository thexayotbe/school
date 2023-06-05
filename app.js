let image = document.querySelector(`.rooms-image`);
let links = document.querySelectorAll(`.link`);

let src = image.getAttribute(`src`);

links[0].addEventListener(`click`, function () {
  image.setAttribute(`src`, `0.jpg`);
});

links[1].addEventListener(`click`, function () {
  image.setAttribute(`src`, `1.jpg`);
});

links[2].addEventListener(`click`, function () {
  image.setAttribute(`src`, `2.jpg`);
});

links[3].addEventListener(`click`, function () {
  image.setAttribute(`src`, `3.jpg`);
});
links[4].addEventListener(`click`, function () {
  image.setAttribute(`src`, `4.jpg`);
});

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
