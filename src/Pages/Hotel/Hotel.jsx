import React from 'react';
import { FaLocationArrow } from "react-icons/fa";

import './hotel.css'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'



const Hotel = () => {
  const photos = [
    {
      src: "https://picsum.photos/id/337/200/300"
    },
    {
      src: "https://picsum.photos/id/347/200/300"
    },
    {
      src: "https://picsum.photos/id/357/200/300"
    },
    {
      src: "https://picsum.photos/id/207/200/300"
    },
    {
      src: "https://picsum.photos/id/277/200/300"
    }
  ]
  return (
    <div>
      <div className="hotelheadpart">
      <Navbar />
      <Header type="list" />
      </div>
    
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className='bookNow'>
            Resurve or Book Now!
          </button>

          <h1 className="hotelTitel">Grand Hotel</h1>
          <div className="hotelAddress">
            <FaLocationArrow />
            <span>Elton st 125 New York</span>

          </div>
          <span className='hotelDistanace'>
            Excillent location -500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelimg">
            {photos.map(photo => (
              <div className="hotelimgWrapper">
                <img src={photo.src} alt="" className='hotelImg' />
              </div>
            ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className='hotelTitel'>
                stay in the heart of Krakow
              </h1>
              <p className='hotelDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quae dolore dolorem dignissimos natus, ut id, hic error saepe alias assumenda impedit. Laboriosam facere ducimus velit? Sed libero fugiat optio eos officiis dolorum quod, sapiente repudiandae dolorem debitis eligendi ea aperiam numquam reprehenderit. Ut nobis voluptas hic quis laboriosam? Distinctio doloremque, maiores eius dolorem unde nam rem illum hic quaerat fugiat deleniti repellat sapiente vero modi perferendis, quia earum praesentium accusantium tempore itaque nulla. Commodi unde voluptatibus optio ipsum debitis nulla, itaque cupiditate saepe! Adipisci illum velit eum amet quia aperiam fugit ipsam repellat nostrum, totam, eos eius porro unde.

              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span>Located in the real heart of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nulla non id dignissimos doloribus et eveniet quaerat odit officia eaque hic mollitia delectus, obcaecati alias modi molestiae pariatur distinctio rem?</span>
              <h2>
                <b>#945</b>(9 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
      <Footer />
      </div>
    
    </div>
  )
}

export default Hotel 