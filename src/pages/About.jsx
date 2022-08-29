

import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import sectionImage from '../assets/images/section__img.png'
import sectionImageSecond from '../assets/images/section__img-second.png'

const About = () => {
  return (
    <Container>

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
  </Container>

  )
}

export default About