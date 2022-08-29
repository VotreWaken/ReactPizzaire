import React from 'react'
import { Container } from 'reactstrap'

import menu__item1 from '../assets/images/Peporoni__pizza.png'

import menu__item2 from '../assets/images/menu__pizza-second.png'
import menu__item3 from '../assets/images/menu__pizza-third.png'

import '../styles/menu.css'

const FoodGallery = () => {
  return (
    <Container>
      <div className='product__menu__items'>
    <div className='product__item'>
      <div className="product__img">
        <img className='product__img__src' src={menu__item1} alt="" />

      </div>
      <div className="product__content">

        <h5 className='product__title'>Peporoni Pizza</h5>
        <div className="product__description">House-Made Red Sauce, Mozzarella,
            Sausage,Pepperoni, Mushroom,Green Pepper, Olives.</div>


      </div>
    </div>


    <div className='product__item'>
      <div className="product__img">
        <img className='product__img__src2' src={menu__item2} alt="" />

      </div>
      <div className="product__content">

        <h5 className='product__title'>Peporoni Pizza</h5>
        <div className="product__description">House-Made Red Sauce, Mozzarella,
            Sausage,Pepperoni, Mushroom,Green Pepper, Olives.</div>


      </div>
    </div>

    <div className='product__item'>
      <div className="product__img">
        <img className='product__img__src' src={menu__item3} alt="" />

      </div>
      <div className="product__content">

        <h5 className='product__title'>Peporoni Pizza</h5>
        <div className="product__description">House-Made Red Sauce, Mozzarella,
            Sausage,Pepperoni, Mushroom,Green Pepper, Olives.</div>


      </div>
    </div>
    </div>
    </Container>
  )
}

export default FoodGallery