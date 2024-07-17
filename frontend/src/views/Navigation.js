import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import MyEvents from './MyEvents';
import Signup from './Signup';
import Profile from './Profile';

const Navigation = () => {
    const [userId, setUserId] = useState('-1')

    const handleLogIn = (currentId) => {
        setUserId(currentId)
    }

    const handleLogOut = () => {
        setUserId('-1')
    }

    return (
        <Router>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">
                        <span className="logo-top">EMS</span>
                        <span className="logo-bottom">Event Management System</span>
                    </a>

                </div>
                <div className="navbar-center">
                    <ul className="nav-links">   
                        <li>
                            <Link to="/MyEvents">MyEvents</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li> 
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul className="nav-links">
                        <li>
                            <Link to="/Profile">My profile</Link>
                        </li>
                    </ul>
                </div>
                </nav>

            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" element={<Login onLogin={handleLogIn} />} />
                <Route path="*" element={<Login onLogin={handleLogIn} />} />
                <Route path="Login" element={<Login onLogin={handleLogIn} />} />
                <Route path="MyEvents" element={<MyEvents userId={userId} />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Profile" element={<Profile userId = {userId} onLogout = { handleLogOut } />} />
            </Routes>
        </Router>
    );
};

export default Navigation;