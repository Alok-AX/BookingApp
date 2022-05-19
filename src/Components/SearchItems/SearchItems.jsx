import React from 'react';
import './Search.css'

const SearchItems = () => {
  return (
    <div className='searchItem'>
        <img src="https://picsum.photos/id/989/200/300" alt="" className="siImg" />
      <div className="siDesc">
          <h1 className="sititel">Tower Street Aparaments</h1>
          <span className='siDistance'>500m from Center</span>
          <span className='siTaxiop'>Free Airport Taxi</span>
          <span className='siSubTitle'>
              Studio Apartment with Air Conditioning
          </span>
          <span className='siFeatures'>
              Entire Studio . 1 Bathroom .21m 1 full bed
          </span>
          <span className='siCancelop'>Free Cancelation</span>
          <span className='siCancelopSubtitel'>
              You Can cancel later, so lock in this great price today!
          </span>
      </div>
      <div className="siDeatils">
          <div className="siRating">
              <span>Exilent</span>
              <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
              <span className='siPrice'>$123</span>
              <span className='siTaxop'>Includes taxes and fees</span>
<button className='siCheckBtn'>See availability</button>
          </div>
      </div>
    </div>
  )
}

export default SearchItems