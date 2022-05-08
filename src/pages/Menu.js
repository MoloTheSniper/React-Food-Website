import React from 'react';
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map(({name:pizzaName, image:pizzaImg, price:pizzaPrice} = MenuList, key) => {
                return (
                <MenuItem 
                    key ={key}
                    image= {pizzaImg}
                    name= {pizzaName} 
                    price={pizzaPrice} 
                />
                );
             })} 
        </div>
    </div>
  )
}

export default Menu