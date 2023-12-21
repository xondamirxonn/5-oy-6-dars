import "../Components/Feature.css";
import award from "../images/feature-award.svg";
import icon from "../images/feature-icon-2.svg";
import verify from "../images/feature-verifed.svg";


function Feature() {
  return (
      <div className="featureDiv">
    <div className="container">
        <p className="p">feature</p>
        <h1>
          The benefit of using <br /> our platform
        </h1>
        <div className="flex">
          <div>
            <div className="feature-bg">
              <img src={award} alt="" />
            </div>
            <div className="text-div">
              <h3>Professional & Fast</h3>
              <p className="text-p">
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </div>
          </div>
          <div>
            <div className="feature-bg">
              <img src={icon} alt="" />
            </div>
            <div className="text-div">
              <h3>Professional & Fast</h3>
              <p className="text-p">
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </div>
          </div>
          <div>
            <div className="feature-bg">
              <img src={verify} alt="" />
            </div>
            <div className="text-div">
              <h3>Professional & Fast</h3>
              <p className="text-p">
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
