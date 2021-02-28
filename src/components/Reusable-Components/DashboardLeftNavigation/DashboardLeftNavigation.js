import React from 'react'

const DashboardLeftNavigation = () => {
    return (
        <div className="col-lg-2 d-none d-lg-block border-1 border-secondary border-end bg-dark">
            <div className="position-fixed d-flex flex-column p-3">
                <a className="text-white text-decoration-none pb-3 lead" href="#"><i className="fas fa-layer-group me-2"></i>Dashboard</a>
                <a className="text-white text-decoration-none pb-3 lead" href="#"><i className="fas fa-book me-2"></i>Orders</a>
                <a className="text-white text-decoration-none pb-3 lead" href="#"><i className="fas fa-tags me-2"></i>Products</a>
                <a className="text-white text-decoration-none pb-3 lead" href="#"><i className="fas fa-cog me-2"></i>Settings</a>
                <a className="text-white text-decoration-none pb-3 lead" href="#"><i className="fas fa-power-off me-2"></i>Log out</a>
            </div>
        </div>
    )
}

export default DashboardLeftNavigation
