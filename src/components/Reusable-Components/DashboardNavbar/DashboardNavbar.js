import React from 'react'

const DashboardNavbar = () => {
    return (
        <nav className="dashboard-navbar navbar navbar-expand-lg sticky-top navbar-dark bg-dark border-bottom border-secondary border-1">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Admin Area</a>
                <button className="navbar-toggler navbar-toggler-left border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-collapse-left flex-lg-grow-0 bg-dark" id="navbarToggler">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-2">
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                <i className="fas fa-user"></i><span className="ms-2">Fernando Gomez</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button className="dropdown-item" type="button"><i className="fas fa-power-off me-2"></i>Log out</button></li>
                            </ul>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="nav-link active" href="#"><i className="fas fa-layer-group me-2"></i>Dashboard</a>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="nav-link active" href="#"><i className="fas fa-book me-2"></i>Orders</a>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a className="nav-link active" href="#"><i className="fas fa-power-off me-2"></i>Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DashboardNavbar
