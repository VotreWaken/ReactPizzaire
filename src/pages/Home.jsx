import React from 'react'

import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'

import heroImg from '../assets/images/hero__img.png'
import heroImgSecond from '../assets/images/apple__hero__img.png'

import { Link } from 'react-router-dom'

import '../styles/hero-section.css'

import '../styles/home.css'

import sectionImage from '../assets/images/section__img.png'
import sectionImageSecond from '../assets/images/section__img-second.png'

import Menu from '../pages/Menu'

import FoodGallery from './FoodGallery'

import featuresImg from '../assets/images/futures__footer.png'

const Home = () => {
  return <Helmet title =' Home'>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <h1 className='mb-3 hero__title'>Welcome to <span>Pizzaire</span></h1>
                <h2 className='mb-4 hero__subtitle'>In order to remain true to our dedication of serving 
                  you the highest quality pizza and other Italian dishes,
                  we only use the finest, freshest ingredients. Our dough is made fresh and hand tossed everyday.
                  We bake our own bread in-house. Our delicious sauces and dressings are home-made, fresh from scratch.
                  Our secret cheese combination is hand-grated everyday for perfect flavor and that all important 
                  stretch. </h2>

                  <div className="hero__btns d-flex align-items-center gap-4">
                    <button className='order__btn'>Order Now</button>
                    <button className='allfood__btn'><Link to='/food'>See All Food</Link></button>
                  </div>
            </div>

          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="hero-img" className='w-100' />
              <img src={heroImgSecond} alt="hero-img-second" className='hero-img-second' />
            </div>
          </Col>

        </Row>


        <Row>
          <Col lg='12'>
            <h3 className='home__about d-flex justify-content-center mb-5'>About Us</h3>
          </Col>
        </Row>

          <Row>
            <Col lg='12' className='About__section'>
              <img className='sectionImage' src={sectionImage} alt="" />
              <p className='section__text'>General Pizzaire opened in 2017, on a mission to bring better pizza to the people.
                 What`s better anyways? For starters, you rarely see hand-picked, fresh basil on a frozen pizza.
                Nor do you see nitrate-free pepperonis atop your kid’s favorite pie. You definitely can’t find
                100% naturally leavened dough in the freezer aisle (until now). Because for us that’s what it’s
                all about. Raising the bar on frozen pizzas by making real food that tastes better.</p>
              <img className='sectionImageSecond' src={sectionImageSecond} alt="" />
            </Col>
          </Row>


        <div className="menu__food mt-5">
        <Menu />
        </div>


        
        <FoodGallery />

        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <h1 className='mb-3 hero__title'>Our bestsaller</h1>
                <h2 className='mb-4 hero__subtitle'>Peporroni Hawaian</h2>
                    <h3 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo elit, enim viverra porttitor tortor.</h3>
                  <div className="hero__btns d-flex align-items-center gap-4">
                    <button className='order__btn'>Order Now</button>
                  </div>
            </div>

          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={featuresImg} alt="feauters-img height 1400px" className='w-100' />
            </div>
          </Col>

        </Row>


      </Container>

    </section>
  </Helmet>
}

export default Home