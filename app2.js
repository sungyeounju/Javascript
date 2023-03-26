const title = document.querySelector("h2");
console.log(title)
const superEventHandler = {
  handleMouseEnter: () => {
    title.innerText = "The mouse is here!";
  },
  handleMouseLeave: () => {
    title.innerText = "The mouse is gone!";
  },
  handleMouseResize: () => {
    title.innerText = "You juse resized!";
  },
  handleRightClick: () => {
    title.innerText = "Than was right click!";
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleMouseResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);