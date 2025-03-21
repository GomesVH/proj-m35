import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Proof from './pages/Proof'

const RoutesProv = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/proof" element={<Proof />} />
  </Routes>
)

export default RoutesProv