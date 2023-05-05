import "./style.css";
import gsap from "gsap";

const menuButton = document.getElementById("dropbtn");
menuButton.addEventListener("click", menuOpen);
const menuItems = document.getElementById("menuItems");

function menuOpen() {
  menuItems.classList.toggle("hidden");
  gsap.fromTo(
    menuItems,
    {
      opacity: 0,
      y: -100,
    },
    { opacity: 1, y: 0 }
  );
}

window.onclick = function (event) {
  if (!event.target.closest(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];

      if (!openDropdown.classList.contains("hidden")) {
        openDropdown.classList.add("hidden");
      }
    }
  }
};
