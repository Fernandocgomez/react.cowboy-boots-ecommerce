// Modules
import React from 'react'

const TopNavBar = () => {
    return (
        <nav class="bg-dark top-nav-bar pt-1 pb-1">
            <div class="container top-nav-bar__container d-flex justify-content-end">
                <a class="text-white pe-2 text-decoration-none" href="#">Login</a>
                <a class="text-white pe-2 text-decoration-none" href="#">Create Account</a>
            </div>
        </nav>
    )
}

export default TopNavBar
