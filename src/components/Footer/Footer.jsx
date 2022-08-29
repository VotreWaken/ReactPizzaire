import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import '../../styles/footer.css'

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
        <div className="footer__logo text-start">
        <img src={logo} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sequi temporibus</p>
        </div>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <h4 className='delivery__title'>Delivery Time</h4>

          <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0'>
              <span>Monday - Friday</span> 
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0'>
              <span>Saturday - Sunday</span> 
              <p>Off Day</p>
            </ListGroupItem>

          </ListGroup>
        </Col>
        <Col lg='3' md='4' sm='6'>
        <h4 className='delivery__title'>Contact</h4>

      <ListGroup className='delivery__time-list'>

      
        <ListGroupItem className='delivery__time-item border-0'>
          <span>Location: LA</span> 
        </ListGroupItem>

        <ListGroupItem className='delivery__time-item border-0'>
          <span>Phone: +965604375</span> 
        </ListGroupItem>

        <ListGroupItem className='delivery__time-item border-0'>
          <span>Email: pizzaire@gmail.com</span> 
        </ListGroupItem>

      </ListGroup>
        </Col>
        <Col lg='3' md='4' sm='6'>
        <h4 className='delivery__title'>Follow Us</h4>
          <div className="social__media">
            <span><i class="ri-instagram-line"> Instagramm</i></span>
            <span><i class="ri-facebook-fill"> Facebook</i></span>
            <span><i class="ri-twitter-line"> Twitter</i></span>
          </div>

        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer