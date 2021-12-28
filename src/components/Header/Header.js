import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="custom-navbar">
           <nav className="container">
               <div className="nav-container">
                    <div className="l-side">
                        <h4>E-COM</h4>
                    </div>
                    <div className="r-side">
                        <ul className="custom-ul">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/category">Category</Link>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                            </li>
                        </ul>
                    </div>
               </div>
           </nav>
        </div>
    );
};

export default Header;