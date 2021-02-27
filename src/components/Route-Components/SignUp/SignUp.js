import React from 'react'
import Footer from '../../Reusable-Components/Footer/Footer'
import NavBar from '../../Reusable-Components/NavBar/NavBar'
import TopNavBar from '../../Reusable-Components/TopNavBar/TopNavBar'
import UserForm from '../../Reusable-Components/UserForm/UserForm'

const SignUp = () => {
    return (
        <div className="sign-up">
            <TopNavBar />
            <NavBar />
            <UserForm heading="Create an account" type="signUp"/>
            <Footer />
        </div>
    )
}

export default SignUp
