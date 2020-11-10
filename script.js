const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navlinks");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
	
navSlide();
