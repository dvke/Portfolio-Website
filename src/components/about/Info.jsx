import useIntersect from "../../hooks/useIntersect";

const Info = () => {
  //Custom hook
  const { ref, isIntersecting } = useIntersect("-100px");

  return (
    <div className="about__info grid" ref={ref}>
      <div className={isIntersecting ? "about__box show" : "about__box hidden"}>
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>

      <div className={isIntersecting ? "about__box show" : "about__box hidden"}>
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>

      <div className={isIntersecting ? "about__box show" : "about__box hidden"}>
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
