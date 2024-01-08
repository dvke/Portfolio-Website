const Fontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5" style={{ color: "rgb(255,92,41)" }}></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-css3" style={{ color: "rgb(35,141,197)" }}></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i
              className="bx bxl-javascript"
              style={{ color: "rgb(247,223,30)" }}
            ></i>

            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i
              className="bx bxl-react"
              style={{ color: "rgb(102,219,251)" }}
            ></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-git" style={{ color: "rgb(223,82,60)" }}></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i
              className="bx bxl-bootstrap"
              style={{ color: "rgb(115,24,245)" }}
            ></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fontend;
