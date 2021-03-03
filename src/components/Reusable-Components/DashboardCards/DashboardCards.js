import React from 'react'

const DashboardCards = () => {
    return (
        <div className="row gy-3 pt-2">
            <div className="col-lg-4">
                <div className="card text-white bg-success">
                    <div class="card-header bg-transparent fw-bolder">Money</div>
                    <div class="card-body row">
                        <div className="col-6">
                            <i class="fas fa-funnel-dollar dashboard-home__icon"></i>
                        </div>
                        <div className="col-6 fw-bolder fs-3 pt-3 text-center">
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
    )
}

export default DashboardCards
