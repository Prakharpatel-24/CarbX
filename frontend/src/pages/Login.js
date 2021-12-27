import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";

const Login = () => {
  // SignIn Method
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();
  const handleSubmit = async (e) => {
    console.log("handle submit", credentials.email, credentials.password);
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log("JSON", json);
    if (json.success) {
      //save auth token and redirect
      localStorage.setItem("cToken", json.token);
      localStorage.setItem("name", json.user.name);
      localStorage.setItem("email", json.user.email);
      history.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Signup method

  const [signupCredentials, setSignupCredentials] = useState({
    name: "",
    cpassword: "",
    email: "",
    password: "",
  });

  const signupHandleSubmit = async (e) => {
    console.log(
      "sign up handle submit",
      signupCredentials.name,
      signupCredentials.email,
      signupCredentials.password
    );
    e.preventDefault();
    const { name, email, password } = signupCredentials;
    const response = await fetch("http://localhost:6969/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log("json", json);
    if (json.success) {
      //save auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onSignupCredentialChange = (e) => {
    setSignupCredentials({
      ...signupCredentials,
      [e.target.name]: e.target.value,
    });
  };

  // sliding
  const activateLasers = () => {
    console.log("Active lasers");
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  };

  useEffect(() => {
    activateLasers();
  }, []);
  //

  return (
    <>
      <div className="bmiCard">
        <Container className=" d-flex justify-content-center ">
          <div class="ccontainer container" id="container">
            <div class="form-container sign-up-container">
              <form onSubmit={signupHandleSubmit}>
                <h1>Sign Up</h1>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={onSignupCredentialChange}
                  aria-describedby="emailHelp"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={onSignupCredentialChange}
                  aria-describedby="emailHelp"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={onSignupCredentialChange}
                  minLength={5}
                  required
                />
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  onChange={onSignupCredentialChange}
                  minLength={5}
                  required
                />
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <input
                  type="email"
                  className="form-control"
                  value={credentials.email}
                  onChange={onChange}
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="form-control"
                  value={credentials.password}
                  onChange={onChange}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <a>Forgot your password?</a>
                <button type="submit">Sign In</button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button class="ghost" id="signIn">
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button class="ghost" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Login;

// <div>
//     <h1 className="text-center">Sign In</h1>

//     <div className="card mx-3 " style={{ width: "18rem" }}>
//         <div className="card-body ">

//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" aria-describedby="emailHelp" name="email" placeholder="Enter email" />
//                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" />
//                 </div>
//                 <button type="submit" className="btn btn-primary" >Submit</button>
//                 <p className="forgot-password text-right">
//                     <a href="/signup">Sign Up</a>
//                 </p>
//             </form>
//             {/* ---- */}
//         </div>
//     </div>
// </div>
