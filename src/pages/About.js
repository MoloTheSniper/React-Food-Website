import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style ={{backgroundImage:`url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Based in Cape Town South Africa, weve been making tasty pizzas since 1999</p>
        </div>
    </div>
  )
}

export default About