import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'  style ={{backgroundImage:`url(${BannerImage})`}}>
       <div className='headerContainer'>
         <h1>Moloko's Pizzaria</h1>
         <h>Pizza to fit any taste</h><br></br>
         <Link to ='/menu'>
           <button>ORDER NOW</button>
         </Link>
       </div>
    </div>
  )
}

export default Home