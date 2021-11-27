import React from 'react'

const OrderCustomerInfoSummary = () => {
    return (
        <div class="row gy-3">
            <div className="col-12 border-bottom">
                <h5>Customer</h5>
                <p className="text-secondary">Fernando Gomez</p>
            </div>
            <div className="col-12 border-bottom">
                <h5>Contact Information</h5>
                <p className="text-secondary">fernandocgomez@live.com</p>
                <p className="text-secondary">346-260-0832</p>
            </div>
            <div className="col-12">
                <h5>Shipping Address</h5>
                <p className="text-secondary">5510 South Rice Ave, 618, Houston, TX, 77047</p>
            </div>
        </div>
    )
}

export default OrderCustomerInfoSummary
