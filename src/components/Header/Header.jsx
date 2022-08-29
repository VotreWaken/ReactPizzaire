import React, {useRef} from 'react'


import { Container } from 'reactstrap'
import logo from '../../assets/images/logo.svg'
import { NavLink, Link } from 'react-router-dom'

import '../../styles/header.css'

const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'About',
    path: '/about'
  },
  {
    display: 'Menu',
    path: '/menu'
  },
  {
    display: 'Food',
    path: '/food'
  },
]

const Header = () => {

  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  return <header className="header">

  <Container>
    <div className="nav__wrapper d-flex align-items-center justify-content-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

                  {/* Navigation menu  */}

      <div className="navigation" ref={menuRef}>
        <div className="menu d-flex align-items-center gap-5">

          {
            nav__links.map((item,index) => (
              <NavLink onClick={toggleMenu}
               to={item.path} key={index} 
              className={navClass => navClass.isActive ? 'active__menu' : ''}
              >{item.display}</NavLink>
            ))
          }

        </div>
      </div>

          {/* Navigation right icons */}

          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon">
            <i class="ri-shopping-basket-line"></i>
            <span className="shopping__basket-item">2</span>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
            </span>
          </div>

    </div>
  </Container>

  </header>
}

export default Header