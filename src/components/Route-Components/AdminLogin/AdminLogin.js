import React from 'react'
import Footer from '../../Reusable-Components/Footer/Footer'
import NavBar from '../../Reusable-Components/NavBar/NavBar'
import TopNavBar from '../../Reusable-Components/TopNavBar/TopNavBar'
import UserForm from '../../Reusable-Components/UserForm/UserForm'

const AdminLogin = () => {
    return (
        <div className="admin-login">
            <TopNavBar /> 
            <NavBar />
            <UserForm heading="User Login" type="adminLogin" />
            <Footer />
        </div>
    )
}

export default AdminLogin
