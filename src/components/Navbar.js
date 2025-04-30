import React from 'react';
import './Navbar.css';
import logo from '../logo.svg';

<a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">Smart cart icons created by Freepik - Flaticon</a>

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src='public/Comp Logo.svg' alt='Store Logo' className='navbar-logo' />
                </div>

                <div className='navbar-center'>
                    <a href='/' className='nav-item'>Products</a>
                    <a href='/' className='nav-item'>News</a>
                    <a href='/' className='nav-item'>Contact</a>
                </div>

                <div>
                    <img src='public\Search Logo.svg' alt='Search Logo' className='nav-logo'/>
                    <a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">
                        <img src='public\shopping-cart.png' alt='Cart Logo' className='nav-logo'/>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;