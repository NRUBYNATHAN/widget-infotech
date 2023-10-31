// import { useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       const data = {
//         email,
//         password,
//       };
//       console.log(data);
//       let result = await axios.post(
//         "https://fly-manager-dev-api.azurewebsites.net/api/Account/login"
//       );
//       //   let result = await fetch(
//       //     "https://fly-manager-dev-api.azurewebsites.net/api/Account/login",
//       //     {
//       //       method: "POST",
//       //       headers: {
//       //         "Content-Type": "application/json",
//       //         Accept: "application/json",
//       //       },
//       //       body: JSON.stringify(data),
//       //     }
//       //   )
//       //     .then((res) => res.json())
//       //     .then((r) => console.log(r));

//       console.log(result.data);
//       localStorage.setItem("user-info", JSON.stringify(result));
//       navigate("/home");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div>
//       <h2>Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input onChange={(e) => setEmail(e.target.value)} type="text" />
//         <input onChange={(e) => setPassword(e.target.value)} type="text" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const loginData = {
//       email: email,
//       password: password,
//       timeZone: "Asia/Kolkata",
//       deviceType: "ios",
//       deviceToken: "string",
//       rememberMe: true,
//     };

//     try {
//       const response = await fetch(
//         "https://fly-manager-dev-api.azurewebsites.net/api/Account/login",

//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             // Add any other necessary headers
//           },
//           body: JSON.stringify(loginData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       // If the request is successful, you can handle the response here
//       const data = await response.json();
//       console.log("Login successful", data);
//       // Perform actions with the received data, such as setting tokens, redirection, etc.
//     } catch (error) {
//       // Handle errors
//       setError("Login failed. Please try again.");
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <div>
//       <input onChange={(e) => setEmail(e.target.value)} type="text" />
//       <input onChange={(e) => setPassword(e.target.value)} type="text" />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const apiUrl =
      "https://fly-manager-dev-api.azurewebsites.net/api/Account/login";

    const payload = {
      email,
      password,
      timeZone: "Asia/Kolkata",
      deviceType: "ios",
      deviceToken: "string",
      rememberMe: true,
    };

    try {
      const response = await axios.post(apiUrl, payload);
      // Handle the response as needed
      console.log("Login successful:", response.data);
      // Example: store token in local storage
      localStorage.setItem("accessToken", response.data.token);
    } catch (error) {
      // Handle login errors
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
