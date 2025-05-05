import React from 'react';
import './Navbar.css';
import logo from '../logo.svg';

<a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">Smart cart icons created by Freepik - Flaticon</a>

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src='/computar.svg' alt='Store Logo' className='nav-main-logo' />
                </div>

                <div className='navbar-center'>
                    <a href='/' className='nav-item'>Products</a>
                    <a href='/' className='nav-item'>News</a>
                    <a href='/' className='nav-item'>Contact</a>
                </div>

                <div className="navbar-right">
                    <img src='/Search Logo.svg' alt='Search Logo' className='nav-logo'/>
                    <a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">
                        <img src='/shopping-cart.png' alt='Cart Logo' className='nav-logo'/>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;