import "../Components/Section.css";
import document from "../images/document.png"

function Section(){
return (
  <div className="container">
    <div className="flex">
      <div>
        <img src={document} />
      </div>
      <div className="texts">
        <h1>
          Wakanda is an easy <br /> platform to find talent
        </h1>
        <div className="flex-document">
          <div className="bg-color">
            <p>1</p>
          </div>
          <p>Sign in to our website</p>
        </div>
        <div className="flex-document">
          <div className="bg-color">
            <p>2</p>
          </div>
          <p>Fill out neccesary information</p>
        </div>
        <div className="flex-document">
          <div className="bg-color">
            <p>3</p>
          </div>
          <p>Discover thoudsands of freelancers</p>
        </div>
        <div className="flex-document">
          <div className="bg-color">
            <p>4</p>
          </div>
          <p>View freelancer’s profile and hire</p>
        </div>
        <div className="flex-document">
          <div className="bg-color">
            <p>5</p>
          </div>
          <p>Complete payment & it’s time to work!</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Section