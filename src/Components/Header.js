import "../Components/Header.css";
import headerLogo from "../images/header-logo.svg";

function Header() {
  return (
    <div className="container">
      <div className="header-flex">
        <a href="#">
          <img src={headerLogo} alt="" />
        </a>
        <ul className="header-ul">
          <li>
            <a className="header-a" href="#">
              Home
            </a>
            <a className="header-a" href="#">
              About us
            </a>
            <a className="header-a" href="#">
              How it works
            </a>
            <a className="header-a" href="#">
              For Freelancer
            </a>
            <a className="header-a header-started" href="#">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
