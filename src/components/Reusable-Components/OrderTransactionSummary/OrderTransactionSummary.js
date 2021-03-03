import React from 'react'

const OrderTransactionSummary = () => {
    return (
        <div className="row">
            <div className="col-12 d-flex">
                <i class="fas fa-check text-success fs-4 me-2"></i>
                <h5 className="m-0">Paid</h5>
            </div>
            <div className="row pt-3 fw-bold pb-3">
                <p className="m-0 d-lg-none d-block">Subtotal</p>
                <div className="col-4">
                    <p className="m-0 d-lg-block d-none">Subtotal</p>
                    <p className="m-0 d-lg-none d-block text-secondary">1 item</p>
                    <p className="m-0">Total</p>
                </div>
                <div className="col-5">
                    <p className="m-0 text-secondary d-lg-block d-none">1 item</p>
                </div>
                <div className="col-3 text-end">
                    <p className="m-0">$0.00</p>
                    <p className="m-0">$0.00</p>
                </div>
            </div>
            <hr />
            <div className="row fw-bold">
                <div className="col-8">
                    <p className="m-0">
                        Paid by customer
                    </p>
                </div>
                <div className="col-4">
                    <p className="m-0 text-end">
                        $0.00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderTransactionSummary
