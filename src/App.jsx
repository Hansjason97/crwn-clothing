import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop'

import {Routes,Route} from 'react-router-dom'
import Layout from './Layout'


function App() {


  return (
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={HomePage} />
          <Route path='/shop' Component={ShopPage}/>
        </Route>
      </Routes>
  )
}

export default App
