import React from 'react'

const CartProduct = () => {
    return (
        <div className="row">
            <div className="col-md-6 text-center">
                <img src="https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw6f6c491c/images/zoom/10002227_3-4_front.jpg?sw=800&sh=800" alt="" srcset="" className="img-fluid pb-3" />
            </div>
            <div className="col-md-6">
                <h5 className="h5 pt-3 fw-light">Heritage Roughstock Western Boot</h5>
                <div className="d-flex flex-center pt-3">
                    <p className="m-0 pe-2">Quantity:</p>
                    <input type="number" className="w-15 rounded-0 border-1 border-secondary" value="1" />
                </div>
                <p className="pt-3 text-danger text-decoration-underline">Remove</p>
            </div>
        </div>
    )
}

export default CartProduct
