import React from 'react'

const CartSubtotal = () => {
    return (
        <div className="row">
            <h5 className="h5 pt-3 pb-2">$52.00</h5>
            <small className="text-secondary pb-3">Excluding Taxes & Shipping</small>
            <div className="d-grid gap-2">
                <button
                    class="btn btn-dark rounded-0 pt-2 pb-2 text-capitalize"
                    type="button"
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartSubtotal
