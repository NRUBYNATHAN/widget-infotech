import { useNavigate } from "react-router-dom";
import logo from "../images/LOGO.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("login");
  const logout = async () => {
    await localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="nav">
      <img className="navbar_logo" src={logo} />
      <div className="navbar_text">
        <p>Home</p>
        <p>Services</p>
        <p>Portfolio </p>
        <p>Career </p>
        <p>Blog</p>
        <p>AboutUs</p>
        {user ? <p onClick={logout}>Logout</p> : null}
      </div>
      <p className="navbar_btn">Book Consultation</p>
    </div>
  );
}

export default Navbar;
