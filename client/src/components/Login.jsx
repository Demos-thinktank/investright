import React, { useState } from "react";
import axios from "axios";
import { setInStorage } from "../utils/storage";
// import { AuthContext } from "../store/AuthProvider";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  // const { auth } = useContext(AuthContext);

  // console.log("authcontext", auth.isAuthenticated);

  function handleLoginChange(e) {
    let { name, value } = e.target;
    setLogin((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  }

  async function handleLogin() {
    axios
      .post("/api/account/login", login)
      .then((res) => {
        console.log("login response", res);
        setInStorage("Investright", res.data.token);
      })
      .catch(() => setError("Please try again"));
  }

  return (
    <div>
      {/* Redirect for login/signup component */}
      {/* {auth && auth.isAuthenticated && <Redirect to="/select" />} */}
      <p>Login</p>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={login.email}
        required
        onChange={handleLoginChange}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={login.password}
        required
        onChange={handleLoginChange}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      {error && error}
    </div>
  );
};

export default Login;
