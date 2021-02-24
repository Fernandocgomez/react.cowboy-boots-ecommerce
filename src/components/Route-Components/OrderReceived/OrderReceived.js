import React from 'react'

const OrderReceived = () => {
    return (
        <div className="order-received container mt-4">
            <div class="row mb-2">
                <div className="col-xl-12 d-flex align-content-center">
                    <i class="far fa-check-circle fs-1 text-secondary me-xl-4 me-2 pt-xl-1 pt-2"></i>
                    <div>
                        <p className="text-secondary mb-0">Order #1537</p>
                        <h5 className="h5">Thank you Name!</h5>
                    </div>
                </div>
            </div>
            <div className="row border gx-0 mb-3">
                <h5 className="ps-2 pt-3 mb-0 fw-bold h5">Your order is confirmed</h5>
                <p className="ps-2 pb-3 mb-0 text-secondary ">We've accepted your order, and we're getting it ready.</p>
            </div>
            <div className="row mb-3 border gx-0">
                <h5 className="ps-2 pt-3 fw-bold mb-2 h5">
                    Customer information
                </h5>
                <div className="row gx-3 mb-3">
                    <div className="col-xl-6">
                        <p className="fw-bold mb-1">
                            Shipping address
                        </p>
                        <p className="text-secondary mb-0">Fernando Gomez</p>
                        <p className="text-secondary mb-0">1190 City Park Central Ln</p>
                        <p className="text-secondary mb-0">7210</p>
                        <p className="text-secondary mb-0">Houston</p>
                        <p className="text-secondary mb-0">Texas</p>
                        <p className="text-secondary mb-0">77047</p>
                        <p className="text-secondary mb-0">United Sates</p>
                    </div>
                    <div className="col-xl-6 pt-3 pt-xl-0">
                        <p className="fw-bold mb-1">
                            Payment method
                        </p>
                        <p className="text-secondary mb-0">Credit Card</p>
                    </div>
                </div>
                <div className="row gx-3 pb-3">
                    <div className="col-xl-6">
                        <p className="fw-bold mb-1">
                            Shipping method
                        </p>
                        <p className="text-secondary mb-0">Standard Shipping</p>
                    </div>
                </div>
            </div>
            <div className="row gx-0">
                <div className="col-xl-6 text-center text-xl-start d-xl-flex align-items-center order-xl-first order-last">
                    <p className="text-dark text-decoration-none pt-3 pt-xl-0">Need help? <span><a href="#" className="text-decoration-none">Contact us</a></span></p>
                </div>
                <div className="col-xl-6">
                    <div class="text-end d-xl-block d-grid gap-2">
                        <button
                            class="btn btn-dark rounded-0 pt-3 pb-3 text-uppercase"
                            type="button"
                        >
                            Continue Shopping
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderReceived

// 