const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".primary-navigation");

const initMenu = () => {

  menuToggle.addEventListener("click", () => {
    const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  function openMenu() {
    console.log("Открытие меню");
    menuToggle.setAttribute("aria-expanded", "true");
    siteNavigation.setAttribute("data-state", "opened");
    siteNavigation.classList.add("open-animation");
    siteNavigation.classList.remove("close-animation");
  }

  function closeMenu() {
    console.log("Закрытие меню");
    menuToggle.setAttribute("aria-expanded", "false");
    siteNavigation.setAttribute("data-state", "closing");
    siteNavigation.classList.add("close-animation");
    siteNavigation.classList.remove("open-animation");

    function handleAnimationEnd(event) {
      if (event.animationName === "clipPathCircleClose") { // Убедитесь, что имя анимации совпадает
        console.log("Анимация завершена, установка состояния 'closed'");
        siteNavigation.setAttribute("data-state", "closed");
        siteNavigation.removeEventListener("animationend", handleAnimationEnd);
      }
    }

    siteNavigation.addEventListener("animationend", handleAnimationEnd);
  }
}

export default initMenu;
