import React from 'react'

const CheckoutSummary = () => {
    return (
        <div>
            <div className="d-xl-block d-none">
                <div className="d-flex pt-5 pb-4 justify-content-between border-bottom border-1">
                    <img src="https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw6f6c491c/images/zoom/10002227_3-4_front.jpg?sw=800&sh=800" width="100" height="100" alt="" srcset="" />
                    <div className="ps-xl-0 ps-3">
                        <p className="fw-bold mb-0">Heritage Roughstock Western Boot</p>
                        <p className="text-secondary">S</p>
                    </div>
                    <p className="">$125.00</p>
                </div>
                <div className="d-flex justify-content-between pt-4">
                    <p className="fw-bold">Subtotal</p>
                    <p>125.00</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="fw-bold">Shipping</p>
                    <p>Free</p>
                </div>
                <div className="d-flex justify-content-between pb-2 border-bottom border-1">
                    <p className="fw-bold">Taxes</p>
                    <p>$10.31</p>
                </div>
                <div className="d-flex justify-content-between pt-3">
                    <p className="fw-bold">Total</p>
                    <p>$135.00</p>
                </div>
            </div>
            <div className="d-xl-none">
                <div className="d-flex justify-content-between border-top border-bottom border-1 pt-2" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <p className="text-secondary text-decoration-underline">Show order summary</p>
                    <p className="fw-bold">$135.31</p>
                </div>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="d-flex pt-5 pb-4 justify-content-between border-bottom border-1">
                        <img src="https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw6f6c491c/images/zoom/10002227_3-4_front.jpg?sw=800&sh=800" width="100" height="100" alt="" srcset="" />
                        <div className="ps-xl-0 ps-3">
                            <p className="fw-bold mb-0">Heritage Roughstock Western Boot</p>
                            <p className="text-secondary">S</p>
                        </div>
                        <p className="">$125.00</p>
                    </div>
                    <div className="d-flex justify-content-between pt-4">
                        <p className="fw-bold">Subtotal</p>
                        <p>125.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="fw-bold">Shipping</p>
                        <p>Free</p>
                    </div>
                    <div className="d-flex justify-content-between pb-2 border-bottom border-1">
                        <p className="fw-bold">Taxes</p>
                        <p>$10.31</p>
                    </div>
                    <div className="d-flex justify-content-between pt-3">
                        <p className="fw-bold">Total</p>
                        <p>$135.31</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSummary
