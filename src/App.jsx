import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop'
import SignInSignUp from './pages/SignInSignUp'

import {Routes,Route} from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import Header from './components/Header'



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
        <Route path='/' Component={HomePage}/>
          <Route path='/shop' Component={ShopPage}/>
          <Route path='/sign-in' Component={SignInSignUp}/>
      </Routes>
      </>
  )
  }

  
}

export default App
