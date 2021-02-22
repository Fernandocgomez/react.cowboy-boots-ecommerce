import React from 'react'

const CheckoutNavigationBtns = () => {
    return (
        <div>
            <div className="row mb-3 gy-3">
                <div className="col-md-6 text-center text-md-start d-md-flex align-items-center order-md-first order-last">
                    <a href="#" className="text-dark text-decoration-none">&#60; Return to cart</a>
                </div>
                <div className="col-md-6">
                    <div class="d-grid gap-2">
                        <button
                            class="btn btn-dark rounded-0 pt-3 pb-3 text-uppercase"
                            type="button"
                        >
                            Continue To Shipping
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutNavigationBtns
