import React from 'react';
import './fetured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItems">
            <img src="https://picsum.photos/id/288/400/400" alt=""  className='feturedImg'/>
            <div className="fetureTitels">
                <h1>Dubling</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://picsum.photos/id/289/400/400" alt=""  className='feturedImg'/>
            <div className="fetureTitels">
                <h1>Dubling</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://picsum.photos/id/299/400/400" alt=""  className='feturedImg'/>
            <div className="fetureTitels">
                <h1>Dubling</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured