import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Route, Router } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <header>

                {/* navbar */}

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">CarbX</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">Login/Sign Up</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/fooditems">Food Items</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/addfooditems">Add Food Item</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/bmi">BMI Calculator</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/profile">My Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Header

