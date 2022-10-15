let mySpans = document.querySelectorAll(".colors span");
let a = document.querySelector("link[href*='theme']");
mySpans.forEach((span) => {
  span.addEventListener("click", check);
});
function check() {
  a.setAttribute("href", `${this.dataset.color}`);
}

// **************** start **************

let myLis = document.querySelectorAll(
  ".portfolio-home .container .atlas ul li"
);
let allLinks = document.querySelectorAll(
  ".portfolio-home .container .atlas ul li a"
);

allLinks.forEach((ele) => {
  ele.addEventListener("click", remove);
});

function remove() {
  allLinks.forEach((ele) => {
    ele.classList.remove("active");
  });
  myLis.forEach((ele) => {
    ele.classList.remove("active");
  });
  this.classList.add("active");
  this.parentElement.classList.add("active");
}

let myPages = document.querySelectorAll(".content-one");

allLinks.forEach((ele) => {
  ele.addEventListener("click", change);
});

function change() {
  myPages.forEach((ele) => {
    ele.classList.remove("active");
  });
  document.querySelector(this.dataset.web).classList.add("active");
}

//************ */ start control *****************
let control = document.querySelector(".control");
let iconSething = document.querySelector(".icon.para");
let iconSun = document.querySelector(".icon.sun");
let iconbar = document.querySelector(".icon.bars");

iconSething.classList.add("anime");
iconSething.addEventListener("click", function () {
  // control.classList.add("change");
  control.classList.contains("change")
    ? control.classList.remove("change")
    : control.classList.add("change");
});

let b = document.querySelector("link[href*='site']");
iconSun.addEventListener("click", move);
function move() {
  if (iconSun.classList.contains("done")) {
    iconSun.children[0].style.color = "white";
    iconSething.children[0].style.color = "white";
    iconbar.children[0].style.color = "white";
    iconSun.classList.remove("done");
    iconSun.children[0].classList.replace("fa-moon", "fa-sun");
    iconSun.setAttribute("data-site", `css/background-dark-site.css`);
    b.setAttribute("href", `${this.dataset.site}`);
  } else {
    iconSun.classList.add("done");
    iconSun.children[0].classList.replace("fa-sun", "fa-moon");
    iconSun.setAttribute("data-site", `css/background-light-site.css`);
    b.setAttribute("href", `${this.dataset.site}`);
    iconSun.children[0].style.color = "black";
    iconSething.children[0].style.color = "black";
    iconbar.children[0].style.color = "black";
  }
}
//************ */ end control *****************
//************ */ start bars *****************
let menu = document.querySelector(".icon.bars");
let atlasSection = document.querySelector(".atlas");
menu.addEventListener("click", function () {
  atlasSection.classList.add("left");
  allLinks.forEach((ele) => {
    ele.onclick = function () {
      atlasSection.classList.remove("left");
    };
  });
});
//************ */ end bars *****************
//************ */ start work *****************
let myFirstWork = document.querySelector(".work.one");
myFirstWork.onclick = function () {};
//************ */ end work *****************
