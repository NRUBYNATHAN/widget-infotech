import "./Footer.css";
import arrow from "../images/Arrow.png";
import logo from "../images/LOGO2.png";
import location from "../images/location.png";
import call from "../images/call.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={logo} />
        <p className="footer_p">
          Enter your email and we’ll send you more information
          <span className="footer_span"> Widget infotech</span>
        </p>
        <input className="input" type="text" placeholder="enter your email" />
        <img className="arrow" src={arrow} />
      </div>
      <div>
        <p className="link_foo">Links</p>
        <p className="link_foo">About Us</p>
        <p className="link_foo">Services</p>
        <p className="link_foo">Case Studies</p>
        <p className="link_foo">Portfolio</p>
        <p className="link_foo">Blog</p>
        <p className="link_foo">Careers</p>
      </div>
      <div>
        <h3 className="contect">Contact Us</h3>
        <div className="address">
          <img src={location} />
          <p className="add">508, Amby Valley Arcade,Utaran, Surat. 394105</p>
        </div>
        <div className="address">
          <img src={call} />
          <p className="add">+91 843984347878 </p>
        </div>
        <div className="social">
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
          <img src={linkedin} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
