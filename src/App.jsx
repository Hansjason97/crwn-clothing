import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop'

import {Routes,Route} from 'react-router-dom'


function App() {


  return (
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/shop' Component={ShopPage}/>
      </Routes>
  )
}

export default App
