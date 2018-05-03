loader();

// LAODER
function loader() {
  const enseigner = document.querySelector("#enseigner");
  const former = document.querySelector("#former");

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

// TABS
function tabs (value) {
  if (value) {
    const leftLink = document.querySelector(".left-link");
    const rightLink = document.querySelector(".right-link");

    if (value === "enseigner") {
      rightLink.classList.add("is-active");
      leftLink.classList.add("is-inactive");
    } else {
      leftLink.classList.add("is-active");
      rightLink.classList.add("is-inactive");
    }
  }

}