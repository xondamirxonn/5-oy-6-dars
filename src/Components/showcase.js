import "../Components/showcase.css"
import bg_img from "../images/showcase-bg-img.png"
import person from "../images/showcase-person.svg"
import brand1 from "../images/brand-1.svg";
import brand2 from "../images/brand-2.svg";
import brand3 from "../images/brand-3.svg";
import brand4 from "../images/brand-4.svg";
import brand5 from "../images/brand-5.svg";

function Showcase(){
  return (
    <div className="container">
      <div className="flex">
        <div className="text-div">
          <h1>Recruit top talented freelancer for your business</h1>
          <p>
            Connect you to thoudsands of talented freelancer from any industry.
            You can have the best people in just few simple steps.
          </p>
          <a href="#">Get Started</a>
        </div>
        <div>
<img className="bg-img" src={bg_img} alt="" />
<img className="person-img" src={person} alt="" />
        </div>
      </div>
      <div className="flex brand-imgs">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
    </div>
  );
}

export default Showcase