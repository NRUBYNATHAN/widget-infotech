import logo from "../images/LOGO.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <img className="navbar_logo" src={logo} />
      <div className="navbar_text">
        <p>Home</p>
        <p>Services</p>
        <p>Portfolio </p>
        <p>Career </p>
        <p>Blog</p>
        <p>About Us</p>
      </div>
      <p className="navbar_btn">Book Consultation</p>
    </div>
  );
}

export default Navbar;
