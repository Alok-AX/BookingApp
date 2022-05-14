import React from 'react';
import Navbar from '../../Components/navbar/Navbar'
import Headers from '../../Components/header/Header'
import Featured from '../../Components/featured/Featured';
import './home.css';
import PropertyList from '../../Components/PropertyList/PropertyList';
import Fetureproperties from '../../Components/feturedproperties/Fetureproperties';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Headers/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitel'>Browser By Property Type</h1>
        <PropertyList/>
        <h1 className='homeTitel'>Homes Guests love</h1>
        <Fetureproperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home