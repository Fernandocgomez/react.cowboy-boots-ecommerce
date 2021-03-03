import React from 'react'
import DashboardLeftNavigation from '../../Reusable-Components/DashboardLeftNavigation/DashboardLeftNavigation'
import DashboardNavbar from '../../Reusable-Components/DashboardNavbar/DashboardNavbar'
import OrderCustomerInfoSummary from '../../Reusable-Components/OrderCustomerInfoSummary/OrderCustomerInfoSummary'
import OrderHeader from '../../Reusable-Components/OrderHeader/OrderHeader'
import OrderProductSummaryItem from '../../Reusable-Components/OrderProductSummaryItem/OrderProductSummaryItem'
import OrderTransactionSummary from '../../Reusable-Components/OrderTransactionSummary/OrderTransactionSummary'

const Order = () => {
    return (
        <div className="order">
            <DashboardNavbar />
            <div className="container-fluid mb-3">
                <div className="row min-vh-100">
                    <DashboardLeftNavigation />
                    <div className="col-12 col-lg-10 bg-white pt-3">
                        <OrderHeader />
                        <div className="container">
                            <div className="row gy-3">
                                <div className="col-lg-8">
                                    <div className="col-12 border rounded-2 shadow-sm p-3 mb-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <i class="fas fa-exclamation-circle text-warning fs-4 me-2"></i>
                                                <h5 className="m-0">Unfulfilled</h5>
                                            </div>
                                        </div>
                                        <OrderProductSummaryItem />
                                        <hr />
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-success">Mark as fulfilled</button>
                                        </div>
                                    </div>
                                    <div className="col-12 border rounded-2 shadow-sm p-3">
                                        <OrderTransactionSummary />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="col-12 border rounded-2 shadow-sm p-3">
                                        <OrderCustomerInfoSummary />
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

export default Order;