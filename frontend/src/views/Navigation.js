import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import MyEvents from './MyEvents';

const Navigation = () => {
    return (
        <Router>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">
                        <span className="logo-top">Event</span>
                        <span className="logo-bottom">Management System</span>
                    </a>

                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/MyEvents">MyEvents</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <a href="/account" className="user-icon">
                        <i className="fas fa-user"></i>
                    </a>
                </div>
                </nav>

            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="MyEvents" element={<MyEvents />} />
            </Routes>
        </Router>
    );
};

export default Navigation;