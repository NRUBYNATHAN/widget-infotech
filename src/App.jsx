import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <ProductedRoute>
              <Home />
            </ProductedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

function ProductedRoute({ children }) {
  const token = localStorage.getItem("login");
  return token ? (
    token ? (
      <div>{children}</div>
    ) : (
      <h1 className="product">you are unauthorised entry❌</h1>
    )
  ) : (
    <Navigate raplace to="/" />
  );
}
