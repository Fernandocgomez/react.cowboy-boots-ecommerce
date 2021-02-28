import React from 'react'
import DashboardLeftNavigation from '../../Reusable-Components/DashboardLeftNavigation/DashboardLeftNavigation'
import DashboardNavbar from '../../Reusable-Components/DashboardNavbar/DashboardNavbar'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardNavbar />
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <DashboardLeftNavigation />
                    {/* DashboardHome */}
                    <div className="col-12 col-lg-10 bg-white pt-3">
                        <h1 className="h1">Dashboard</h1>
                        <hr />
                        <div className="row gy-3 pt-2">
                            <div className="col-lg-4">
                                <div className="card text-white bg-success">
                                    <div class="card-header bg-transparent fw-bolder">
                                        <div class="row">
                                            <div className="col-3">Money</div>
                                            <div className="col-9 justify-content-evenly d-none d-md-flex">
                                                <div className="btn btn-light pt-0 pb-0">Today</div>
                                                <div className="btn btn-light pt-0 pb-0">Yesterday</div>
                                                <div className="btn btn-light pt-0 pb-0">Month</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body row">
                                        <div className="col-6">
                                            <i class="fas fa-funnel-dollar dashboard-home__icon"></i>
                                        </div>
                                        <div className="col-6 fw-bolder fs-2 pt-3 text-center">
                                            <p>$2,506.65</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card text-white bg-secondary">
                                    <div class="card-header bg-transparent fw-bolder">Orders</div>
                                    <div class="card-body row">
                                        <div className="col-6">
                                            <i class="fas fa-shopping-cart dashboard-home__icon"></i>
                                        </div>
                                        <div className="col-6 fw-bolder fs-2 pt-3 text-center">
                                            <p>37</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card text-white bg-primary">
                                    <div class="card-header bg-transparent fw-bolder">Products</div>
                                    <div class="card-body row">
                                        <div className="col-6">
                                            <i class="fas fa-tags dashboard-home__icon"></i>
                                        </div>
                                        <div className="col-6 fw-bolder fs-2 pt-3 text-center">
                                            <p>54</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
