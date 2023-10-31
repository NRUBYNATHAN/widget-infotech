import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import "./SignUp.css";
function SignUp() {
  const [shows, setShows] = useState(false);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const signedUser = JSON.parse(localStorage.getItem("user"));
    if (input.email === signedUser?.email) {
      alert(" User already registerd ");
    } else {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/");
    }
  };
  return (
    <div className="register">
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="reg_log">
          <div className="reg_field">
            <p className="reg_head">Name</p>
            <TextField
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="namefield"
              type="text"
              label="type your name"
              variant="outlined"
            />
          </div>

          <div className="reg_field">
            <p className="reg_head">Email</p>
            <TextField
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="emailfield"
              type="email"
              label="type your email"
              variant="outlined"
            />
          </div>

          <div className="reg_field">
            <p className="reg_head">Password</p>
            <TextField
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="passwordfield"
              type={shows ? "text" : "password"}
              label="type your password"
              variant="outlined"
            />
            <IconButton
              color="primary"
              onClick={() => setShows(!shows)}
              aria-label="HIDE"
            >
              {shows ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </div>
        </div>
        <div className="reg_btn">
          <Button variant="contained" type="submit">
            Register Here
          </Button>
        </div>
        <p>
          Have already an account?
          <Link to="/">
            <u>Login Here</u>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
