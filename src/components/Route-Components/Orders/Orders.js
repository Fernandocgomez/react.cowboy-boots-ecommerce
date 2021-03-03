import React from 'react'
import DashboardLeftNavigation from '../../Reusable-Components/DashboardLeftNavigation/DashboardLeftNavigation'
import DashboardNavbar from '../../Reusable-Components/DashboardNavbar/DashboardNavbar'
import DashboardOrderTable from '../../Reusable-Components/DashboardOrderTable/DashboardOrderTable'

const Orders = () => {
    return (
        <div className="orders">
            <DashboardNavbar />
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <DashboardLeftNavigation />
                    <div className="col-12 col-lg-10 bg-white">
                    <DashboardOrderTable classNames="h1" heading="All Orders" ordersDisplayed={"all"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
