import React, { useEffect } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SignInSignUp({currentUser}) {

  const navigate = useNavigate();

  useEffect(()=> {
    if(currentUser){
      navigate("/");
    }
  }, [currentUser]);
  
  return (
    <div className='signInSignUp'>
        <SignIn/>
        <SignUp/>
    </div>
  )
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(SignInSignUp)