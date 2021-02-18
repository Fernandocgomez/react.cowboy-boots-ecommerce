// Modules
import React from 'react'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white border-bottom border-light border-1">
            <div class="container">
                <a class="navbar-brand" href="#">Brand</a>
                <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-lg-grow-0 bg-white" id="navbarToggler">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cart ($299.00)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar