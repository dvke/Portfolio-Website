import useIntersect from "../../hooks/useIntersect";

const Backend = () => {
  const { ref, isIntersecting } = useIntersect("-100px");

  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend skills</h3>
      <div
        className={isIntersecting ? "skills__box bounce" : "skills__box"}
        ref={ref}
      >
        <div className="skills__group">
          <div className="skills__data">
            <i
              className="bx bxl-nodejs"
              style={{ color: "rgb(88,161,73)" }}
            ></i>

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-data"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i
              className="bx bxl-firebase"
              style={{ color: "rgb(255,204,47)" }}
            ></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
        {/* <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Skill</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Backend;
