

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import FoodGallery from '../pages/FoodGallery'



const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path = '/home' element={<Home/>} />
    <Route path = '/about' element={<About/>} />
    <Route path = '/menu' element={<Menu/>} />
    <Route path = '/food' element={<FoodGallery/>} />
  </Routes>
}

export default Routers