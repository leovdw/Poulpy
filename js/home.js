loader();
tabs();
breadcrumb();

// LAODER
function loader() {
  const enseigner = document.querySelector(".top-loader");
  const former = document.querySelector(".bot-loader");

  let loaderValue;

  enseigner.addEventListener("click", function() {
    loaderValue = "enseigner";
    moveLoader();
    tabs(loaderValue);
  });

  former.addEventListener("click", function() {
    loaderValue = "former";
    moveLoader();
    tabs(loaderValue);
  });
}

function moveLoader() {
  const topLoader = document.querySelector(".top-loader");
  const botLoader = document.querySelector(".bot-loader");
  const sectionLoader = document.querySelector(".loader");

  topLoader.style.transform = "translateY(-100%)";
  botLoader.style.transform = "translateY(150%)";

  botLoader.addEventListener("transitionend", function() {
    sectionLoader.style.display = "none";
  });
}

// Change flag
const flag = document.querySelector(".right-link > img");

flag.addEventListener('click', function () {
  if (flag.className == 'mg') {
    flag.src = "img/fr.png";

    flag.classList.remove("mg");
    flag.classList.add('fr')
  } else {
    flag.src = "img/mg.png";
    
    flag.classList.remove("fr");
    flag.classList.add("mg");
  }
})

// TABS
function tabs (value) {
  const leftLink = document.querySelector(".left-link");
  const rightLink = document.querySelector(".right-link");
  const step = document.getElementById("progressbar");


  if (value) {
    if (value === "enseigner") {
      rightLink.classList.add("is-active");
      leftLink.classList.add("is-inactive");

      step.dataset.step = 2;
      breadcrumb();
    } else {
      leftLink.classList.add("is-active");
      rightLink.classList.add("is-inactive");

      step.dataset.step = 1;
      breadcrumb();
    }
  }

  leftLink.addEventListener('click', function () {
    leftLink.classList.remove('is-active');
    leftLink.classList.remove('is-inactive');
    rightLink.classList.remove("is-inactive");
    rightLink.classList.remove("is-inactive");

    leftLink.classList.add("is-active");
    rightLink.classList.add("is-inactive");
    step.dataset.step = 1;
    breadcrumb();

    document.querySelector('.progress').style.display = 'none';
  });

  rightLink.addEventListener('click', function () {
    leftLink.classList.remove("is-active");
    leftLink.classList.remove("is-inactive");
    rightLink.classList.remove("is-inactive");
    rightLink.classList.remove("is-inactive");

    leftLink.classList.add("is-inactive");
    rightLink.classList.add("is-active");
    step.dataset.step = 2;
    breadcrumb();

    document.querySelector(".progress").style.display = "block";
  })
}

// Breadcrumb
function breadcrumb () {
  const step = document.getElementById("progressbar");
  const bullets = document.querySelectorAll('.bullet');
  const links = document.querySelectorAll('.bullet a');

  if (step.dataset.step == 1) {
    step.style.width = "0" + "%";

    bullets[0].style.backgroundColor = "#2E95A7";
    bullets[1].style.backgroundColor = "#D5D5D5";
    links[0].style.color = "#2E95A7";
    links[0].style.opacity = 1;

    links[1].style.color = "#D5D5D5";
    links[1].style.opacity = 0.5;

  } else if (step.dataset.step == 2) {
    step.style.width = "33" + "%";

    bullets[0].style.backgroundColor = "#2E95A7";
    links[0].style.color = "#2E95A7";
    links[0].style.opacity = 1;

    bullets[1].style.backgroundColor = "#2E95A7";
    links[1].style.color = "#2E95A7";
    links[1].style.opacity = 1;
  } else if (step.dataset.step == 3) {
    links[0].style.color = "#2E95A7";
    links[0].style.opacity = 1;

    bullets[1].style.backgroundColor = "#2E95A7";
    links[1].style.color = "#2E95A7";
    links[1].style.opacity = 1;

    step.style.width = "66" + "%";
    bullets[2].style.backgroundColor = "#2E95A7";
    links[2].style.color = "#2E95A7";
    links[2].style.opacity = 1;
  } else if (step.dataset.step == 4) {
    links[0].style.color = "#2E95A7";
    links[0].style.opacity = 1;

    step.style.width = "100" + "%";
    bullets[1].style.backgroundColor = "#2E95A7";
    links[1].style.color = "#2E95A7";
    links[1].style.opacity = 1;

    bullets[2].style.backgroundColor = "#2E95A7";
    links[2].style.color = "#2E95A7";
    links[2].style.opacity = 1;

    bullets[3].style.backgroundColor = "#2E95A7";
    links[3].style.color = "#2E95A7";
    links[3].style.opacity = 1;
  }
}