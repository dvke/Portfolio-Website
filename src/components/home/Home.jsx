import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <img className="home__img"></img>

          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
