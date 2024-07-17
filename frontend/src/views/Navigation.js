import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './Navbar.css';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import MyEvents from './MyEvents';
import Signup from './Signup';
import Profile from './Profile';

const Navigation = () => {
    const [userId, setUserId] = useState('-1');

    const handleLogIn = (currentId) => {
        setUserId(currentId);
    };

    const handleLogOut = () => {
        setUserId('-1');
    };

    const logout = () => {
        handleLogOut();
        return <Navigate to="/Login" />;
    };

    const PrivateRoute = ({ element, ...rest }) => {
        if (userId === '-1') {
            return <Navigate to="/Login" />;
        } else {
            return element;
        }
    };

    return (
        <Router>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/" className="logo">
                        <span className="logo-top">EMS</span>
                        <span className="logo-bottom">Event Management System</span>
                    </Link>
                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <Link to="/MyEvents">My Events</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul className="nav-links">
                        {userId !== '-1' ? (
                            <>
                                <li>
                                    <Link to="/Profile">My Profile</Link>
                                </li>
                                <li>
                                    <button onClick={logout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/" element={<Login onLogin={handleLogIn} />} />
                <Route path="/Login" element={<Login onLogin={handleLogIn} />} />
                <Route path="/MyEvents" element={<PrivateRoute element={<MyEvents userId={userId} />} />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile userId={userId} onLogout={handleLogOut} />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
