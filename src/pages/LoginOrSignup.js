import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { loginContext } from "../loginContext";
import { useNavigate } from "react-router-dom";
import "../css/LoginOrSignup.css";

function LoginOrSignup() {
  const login = useContext(loginContext);
  const navigate = useNavigate();
  const [loginWindow, setloginWindow] = useState(true);
  const { register, handleSubmit } = useForm();
  const openSignupWindow = () => {
    setloginWindow(!loginWindow);
  };

  const handleRegistration = (data) => {
    if (data.email && data.password) {
      login.loginChange(true);
      navigate("/");
    }
  };

  return (
    <>
      <div className="loginOrSignupContainer">
        <div className="signupSection">
          <img src={require("./signup.png")} alt="signupImg" />
          <p>
            Hello, new to our book store? you are in right direction to start
            your reading journey signup if you are a new user or login if
            already a user to get best deal on our best selling books!
          </p>
          <div className="newUserSignup" onClick={openSignupWindow}>
            {loginWindow ? <div>Signup</div> : <div>Login</div>}
          </div>
        </div>
        <div className="loginSection">
          {loginWindow ? <h2>Login</h2> : <h2>Signup</h2>}
          {loginWindow ? (
            <form onSubmit={handleSubmit(handleRegistration)}>
              <label for="email">Enter Email</label>
              <br></br>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="loginInputs"
                {...register("email")}
              />
              <br></br>
              <label for="password">Enter Password</label>
              <br></br>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="loginInputs"
                {...register("password")}
              />
              <br></br>
              <a href="#">Forgot password?</a>
              <input type="submit" className="submitBtn" value="Login" />
            </form>
          ) : (
            <form onSubmit={handleSubmit(handleRegistration)}>
              <label for="email">Enter Email</label>
              <br></br>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="loginInputs"
                {...register("email")}
              />
              <br></br>
              <label for="password">Enter Password</label>
              <br></br>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="loginInputs"
                {...register("password")}
              />
              <br></br>
              <label for="cnfPassword">Confirm Password</label>
              <br></br>
              <input
                type="password"
                name="cnfpassword"
                placeholder="confirm password"
                className="loginInputs"
                {...register("cnfpassword")}
              />
              <input type="submit" className="submitBtn" value="Signup" />
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginOrSignup;
