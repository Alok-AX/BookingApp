import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import {useLocation} from 'react-router-dom'
import './list.css';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

const List = () => {
  const location = useLocation()
  console.log(location)

  const [destination,setDestination]=useState(location.state.destination)
  const [date,setDate]=useState(location.state.date)
  const [openDate,setOpenDate]=useState(false)

  const [options,setOptions]=useState(location.state.options)

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
          <h1 className='listTitle'> search</h1>
             <div className="listItem">
               <label htmlFor="">Destination</label>
               <input type="text" placeholder={destination} />
             </div>
             <div className="lsItem">
               <label htmlFor="">Check-in Date</label>
               <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,'MM/dd/yyyy')}to ${format(
                 date[0].endDate,"MM/dd/yyyy"
               )}`}</span>
                      {    openDate && <DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()}  ranges={date}/>
                      }               
             </div>

          <div className="lsItem">
            <label htmlFor="">option</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
              <span className='lsOptionText'>Min Price <small>perNight</small></span>
              <input type="number" className="lsOptionInput" />
            </div>
          </div>
          <div className="lsItem">
            <label htmlFor="">option</label>
            <div className="lsOptionItem">
              <span className='lsOptionText'>Max Price <small>perNight</small></span>
              <input type="number" className="lsOptionInput" />
            </div>
          </div>   
                 <div className="lsItem">
            <label htmlFor="">option</label>
            <div className="lsOptionItem">
              <span className='lsOptionText'>Adult </span>
              <input type="number" min={1}className="lsOptionInput" placeholder={options.adult} />
            </div>
          </div>
          <div className="lsItem">
            <label htmlFor="">option</label>
            <div className="lsOptionItem">
              <span className='lsOptionText'>Children</span>
              <input type="number" min ={0}className="lsOptionInput"  placeholder={options.children} />
            </div>
          </div>   
                 <div className="lsItem">
            <label htmlFor="">option</label>
            <div className="lsOptionItem">
              <span className='lsOptionText'>Room</span>
              <input type="number"min={1} className="lsOptionInput"  placeholder={options.room}/>
            </div>
          </div>
          </div>
          <button>Search</button>
          </div>
          <div className="listResult">
        
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default List