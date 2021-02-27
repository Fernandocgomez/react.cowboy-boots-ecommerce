import React from 'react'
import Footer from '../../Reusable-Components/Footer/Footer'
import NavBar from '../../Reusable-Components/NavBar/NavBar'
import TopNavBar from '../../Reusable-Components/TopNavBar/TopNavBar'
import UserForm from '../../Reusable-Components/UserForm/UserForm'

const Login = () => {
    return (
        <div className="login">
           <TopNavBar />
           <NavBar />
           <UserForm heading="Login" type="login"/>
           <Footer />
        </div>
    )
}

export default Login
