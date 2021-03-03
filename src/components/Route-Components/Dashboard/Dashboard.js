import React from 'react'
import DashboardCards from '../../Reusable-Components/DashboardCards/DashboardCards'
import DashboardLeftNavigation from '../../Reusable-Components/DashboardLeftNavigation/DashboardLeftNavigation'
import DashboardNavbar from '../../Reusable-Components/DashboardNavbar/DashboardNavbar'
import DashboardOrderTable from '../../Reusable-Components/DashboardOrderTable/DashboardOrderTable'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="container-fluid">
        <div className="row min-vh-100">
          <DashboardLeftNavigation />
          <div className="col-12 col-lg-10 bg-white pt-3">
            <h1 className="h1">Dashboard</h1>
            <hr />
            <DashboardCards />
            <DashboardOrderTable classNames="h3" heading="Recent Orders" ordersDisplayed={10}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
