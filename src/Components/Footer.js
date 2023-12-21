import "../Components/Footer.css";
import logo from "../images/footer-logo.svg"
import icon_1 from "../images/logo-icon-1.svg";
import icon_2 from "../images/logo-icon-2.png";
import icon_3 from "../images/logo-icon-3.png";
import icon_4 from "../images/logo-icon-4.png";
import send from "../images/send.svg"

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="footer">
          <div className="footer-1">
            <img src={logo} alt="" />
            <div className="footer-icons">
              <img src={icon_1} alt="" />
              <img src={icon_2} alt="" />
              <img src={icon_3} alt="" />
              <img src={icon_4} alt="" />
            </div>
            <p className="footer-p1">
              Copyright © 2022 Wakanda. All rights reserved
            </p>
          </div>
          <div className="footer-2">
            <ul className="footer-ul">
              <h2>Company</h2>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">For freelancer</a>
              </li>
            </ul>
          </div>
          <div className="footer-3">
            <ul className="footer-ul">
              <h2>Support</h2>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Police</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>
          <div>
            <form>
              <h3 >Subscribe to our newsletter</h3>
              <br />
              <input type="email" placeholder="Your email address" required />
              <button className="send"><img src={send} alt="" /></button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
