import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);
  console.log(password);
  const handleLogin = async () => {
    try {
      if (username === "admin" && password === "admin") {
        const users = {
          username: username,
          password: password,
        };
        const response = await axios.post("/Login/", users);

        const token = await response.data.access;
        await localStorage.setItem("token", token);
        navigate("/home");
      } else {
        alert("unvalid username credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="main-login">
      <div className="login">
        <h1 className="lo">Login Form</h1>
        <TextField
          className="input"
          type="text"
          value={username}
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          color="secondary"
        />
        <TextField
          color="secondary"
          className="input"
          type="password"
          value={password}
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="input" variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
