import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/Home/HomePage'
import FoodPage from './page/Food/FoodPage'
import CartPage from './components/Cart/CartPage'
import LoginPage from './page/Login/LoginPage'

export default function AppRouter() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path='/serach/:searchTerm' element={<HomePage />} />
    <Route path='/tag/:tag' element={<HomePage />} />
    <Route path='/food/:id' element={<FoodPage />} />
    <Route path='/cart' element={<CartPage />} />
    <Route path='/login' element={<LoginPage/>} />

  </Routes>
}
