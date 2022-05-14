import React, { useState } from 'react';
import { FaHotel, FaPlane, FaTaxi, FaCarSide, FaBed, FaCalendarWeek, FaPersonBooth } from "react-icons/fa";
import './header.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom'


const Header = ({ type }) => {
    const [destination, setDestination] = useState(false)

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    // counter

    const [openOpention, setOpenOption] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,

    })
    const navigate = useNavigate()

    const handleOption = (name, operations) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operations === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }


    const handelSearch = () => {
        navigate('/hotels', { state: { destination, date, options } });
    }

    return (
        <div className='header'>
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
                <div className="headerList">
                    <div className="headerListItems active">
                        <FaHotel />
                        <span>stays</span>
                    </div>
                    <div className="headerListItems">
                        <FaPlane />
                        <span>flights</span>
                    </div>
                    <div className="headerListItems">
                        <FaCarSide />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItems">
                        <FaTaxi />
                        <span>AirPort Taxi</span>

                    </div>
                    <div className="headerListItems">
                        <FaBed />
                        <span>Attractions</span>

                    </div>

                </div>
                {type !== "list" &&
                    <><h1 className='headerTitel'> Alife time of discount ? It's Genius</h1>
                        <p className='headDesc '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis rerum nobis sequi eos repellat optio reprehenderit quidem vitae, veritatis cupiditate quam sunt eligendi laboriosam commodi perspiciatis earum tenetur totam!</p>
                        <button className='headerBtn'>Sign in/Register</button>
                        <div className="headersearch">
                            <div className="headSearchItem">
                                <FaBed className='headerIcon' />
                                <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={e => setDestination(
                                    e.target.value)
                                } />
                            </div>
                            <div className="headSearchItem">
                                <FaCalendarWeek className='headerIcon' />
                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>

                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date} className='date' minDate={new Date()}
                                />}

                            </div>
                            <div className="headSearchItem">
                                <FaPersonBooth className='headerIcon' />
                                <span onClick={() => setOpenOption(!openOpention)} className='headerSearchText'>{`${options.adult} adult.${options.children}children. ${options.room}room`}</span>
                                {openOpention && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">
                                            Adult
                                        </span>
                                        <div className="optionCounter">
                                            <button disabled={options.adult <= 1} className='OptionCounterButton' onClick={() => handleOption("adult", "d")} >-</button>
                                            <span className="optionCounterNumber">{options.adult} </span>
                                            <button className='OptionCounterButton' onClick={() => handleOption("adult", "i")}>+</button></div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">
                                            Children
                                        </span>
                                        <div className="optionCounter">


                                            <button disabled={options.children <= 1} className='OptionCounterButton' onClick={() => handleOption("children", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className='OptionCounterButton' onClick={() => handleOption("children", "i")} >+</button>
                                        </div>

                                    </div> <div className="optionItem">
                                        <span className="optionText">
                                            Room
                                        </span>
                                        <div className="optionCounter">

                                            <button disabled={options.room <= 1} className='OptionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className='OptionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                                        </div>

                                    </div>

                                </div>}
                            </div>
                            <div className="headSearchItem">
                                <button className='headerBtn' onClick={handelSearch}>Search</button>
                            </div>
                        </div></>}
            </div>
        </div>
    )
}

export default Header