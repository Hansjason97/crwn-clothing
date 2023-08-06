import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop'
import SignInSignUp from './pages/SignInSignUp'

import {Routes,Route} from 'react-router-dom'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import { onSnapshot } from 'firebase/firestore'
import Header from './components/Header'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'




class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        onSnapshot(userRef, snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      else {
        setCurrentUser(userAuth);
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
      <Header />
      <Routes>
        <Route path='/' Component={HomePage}/>
          <Route path='/shop' Component={ShopPage}/>
          <Route path='/sign-in' Component={SignInSignUp}/>
      </Routes>
      </>
  )
  }

  
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App) 
