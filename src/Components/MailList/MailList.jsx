import React from 'react';
import './maillist.css';

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitel'>Save, time,Save Money</h1>
        <span className="mailDesc">
            Sign up and we'll send the  best deals to you
        </span>
        <div className="mailContainerInput">
            <input type="text"placeholder='Your Mail' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList