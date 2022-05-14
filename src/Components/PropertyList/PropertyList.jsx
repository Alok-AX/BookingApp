import React from 'react'
import './propertylist.css';


const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItems">
            <img src="https://picsum.photos/id/500/400/400" alt="" className='pListImg' />
            <div className="pListTitel">
                <h1>Hotel</h1>
                <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItems">
            <img src="https://picsum.photos/id/378/400/400" alt="" className='pListImg'/>
            <div className="pListTitel">
                <h1>Apartments</h1>
                <h2>235 Hotels</h2>
            </div>
        </div>  <div className="pListItems">
            <img src="https://picsum.photos/id/389/400/400" alt=""className='pListImg' />
            <div className="pListTitel">
                <h1>Resorts</h1>
                <h2>256 Hotels</h2>
            </div>
        </div>  <div className="pListItems">
            <img src="https://picsum.photos/id/391/400/400" alt="" className='pListImg'/>
            <div className="pListTitel">
                <h1>Villas</h1>
                <h2>299 Hotels</h2>
            </div>
        </div>  <div className="pListItems">
            <img src="https://picsum.photos/id/345/400/400" alt=""  className='pListImg'/>
            <div className="pListTitel">
                <h1>Cabins</h1>
                <h2>233 Hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList