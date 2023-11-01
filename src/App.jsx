import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

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
  const token = localStorage.getItem("token");
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
