import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop'
import SignInSignUp from './pages/SignInSignUp'

import {Routes,Route} from 'react-router-dom'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import { onSnapshot } from 'firebase/firestore'
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        onSnapshot(userRef, snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      else {
        this.setState({currentUser: userAuth});
      }

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
