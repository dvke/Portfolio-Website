import useIntersect from "../../hooks/useIntersect";

const Info = () => {
  //Custom hook
  const { ref, isIntersecting } = useIntersect("-100px");

  return (
    <div className="about__info grid" ref={ref}>
      <div className={isIntersecting ? "about__box show" : "about__box hidden"}>
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Professional Experience</h3>
        <span className="about__subtitle">5 + Years</span>
      </div>

      <div className={isIntersecting ? "about__box show" : "about__box hidden"}>
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Team player</h3>
        {/* <span className="about__subtitle">10 + Projects</span> */}
      </div>

      {/* <div className={isIntersecting ? "about__box show" : "about__box hidden"}>
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div> */}
    </div>
  );
};

export default Info;
