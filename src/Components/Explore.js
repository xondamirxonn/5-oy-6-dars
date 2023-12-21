import "../Components/Explore.css";
import explore_img from "../images/explore-person.png";

function Explore() {
  return (
    <div className="bg-info">
      <div className="container">
        <div className="flex">
          <div className="feature-text">
            <h1>Explore and hire talent <br /> from our platform</h1>
            <p>
              We've got experts for every industry - all under one roof! You can <br />
              find everything from WordPress developers to Graphic designers to <br />
              copywriters and many more at Wakanda.
            </p>
            <a href="#">Explore now</a>
          </div>
          <img className="feature-img" src={explore_img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
