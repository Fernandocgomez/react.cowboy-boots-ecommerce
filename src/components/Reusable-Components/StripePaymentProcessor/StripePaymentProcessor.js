import React from 'react'

const StripePaymentProcessor = () => {
    return (
        <div className="mb-5">
            <h5 className="h5">Payment</h5>
            <p className="text-secondary">All transactions are secure and encrypted</p>
            <div className="row border gx-0 pt-2 pb-2">
                <div className="border-bottom border-1 d-flex justify-content-between">
                    <p className="text-secondary ps-3 mb-0 pb-3 pt-2">
                        Credit Card
                    </p>
                    <div className="d-flex justify-content-between pt-xl-1 pt-2">
                        <i class="fab fa-cc-visa fs-2 pe-2 text-secondary"></i>
                        <i class="fab fa-cc-amex fs-2 pe-2 text-secondary"></i>
                        <i class="fab fa-cc-mastercard fs-2 pe-2 text-secondary"></i>
                        <i class="fab fa-cc-discover fs-2 pe-3 text-secondary"></i>
                    </div>
                </div>
                <div className="row pt-3 ms-0">
                    <div className="col-xl-12">
                        <input type="number" class="form-control rounded-0 pt-2 pb-2 text-secondary fw-bold" placeholder="Card Number" />
                    </div>
                </div>
                <div className="row pt-3 ms-0">
                    <div className="col-xl-12">
                        <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary fw-bold" placeholder="Name on card" />
                    </div>
                </div>
                <div className="row pt-3 pb-3 ms-0">
                    <div className="col-xl-6 pb-3">
                        <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary fw-bold" placeholder="Expiration date (MM/YY" />
                    </div>
                    <div className="col-xl-6">
                        <input type="number" class="form-control rounded-0 pt-2 pb-2 text-secondary fw-bold" placeholder="Security code" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StripePaymentProcessor
