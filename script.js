// import brightBtn from "./Image/brightBtn";

const btnImage = document.querySelectorAll(".btn");
var hideButton = document.querySelector(".hide-button");
var navId = document.querySelector("#nav-id");
var showButton = document.querySelector(".show-button");

// for (let i = 0; i < btnImage.length; i++) {
//   btnImage[i].addEventListener("mouseover", function () {
//     this.style.backgroundImage = "url(image/brightBtn.png)";
//   });

//   btnImage[i].addEventListener("mouseout", function () {
//     this.style.backgroundImage = "url(image/lowBtn.png)";
//   });
// }

hideButton.addEventListener("click", () => {
  hideButton.style = "right: 50%";
  setTimeout(() => {
    navId.style = "left: -100%";
    showButton.style = "display: block";
  }, 100);
});

showButton.addEventListener("click", () => {
  navId.style = "left: 0";
  showButton.style = "display: none";
  hideButton.style = "right: 20px";
});

// Get the button:
let topButton = document.querySelector(".top-button");
topButton.addEventListener("click", topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
