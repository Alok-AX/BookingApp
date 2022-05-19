import React from 'react';
import './navbar.css';

const Navbar = () => {
  return ( 
    <div className='navbar'>
        <div className="navConatiner">
            <span className='logo'>
                Booking.io
            </span>
            <div className="navItems">
            <button className='navbutton'>Register</button>
            <button className='navbutton'>login</button>


            </div>
        </div>
    </div>

  )
}

export default Navbar