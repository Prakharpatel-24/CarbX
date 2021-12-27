import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const SignUp = () => {
    const [credentials, setCredentials] = useState({ name: "", cpassword: "", email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        console.log("handle submit");
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:6969/Register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log("json", json);
        if (json.success) {
            //save auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");
        }
        else {
            alert("Invalid credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (

        /* <div className="bmiCard">
                <Container className=' d-flex justify-content-center '>
                    <div>
                        <h1 className="text-center">Sign Up</h1>
                        <div className="card mx-3 " style={{ width: "18rem" }}>
    
                            {/* Sign up form */

        /* <form style={{ padding: "15px" }}>
    
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
    
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
    
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>
    
                            <button type="submit" className="btn btn-primary btn-block my-2">Sign Up</button>
                            <p className="forgot-password text-right">
    
                                Already registered <a href="/login">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </div> */
        <div className="bmiCard">
            <Container className=' d-flex justify-content-center '>
                <div>
                    <h1 className="text-center">Sign Up</h1>

                    <div className="card mx-3 " style={{ width: "18rem" }}>
                        <div className="card-body ">
                            {/* <div className="container"> */}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <p className="forgot-password text-right">

                                    Already registered <a href="/login">sign in?</a>
                                </p>
                            </form>










                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SignUp