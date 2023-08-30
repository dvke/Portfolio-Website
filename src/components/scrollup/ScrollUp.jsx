import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");
    // display scroll icon when scroll is greater than 560  viewport height
    if (window.scrollY > 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
