import React from 'react'
import CheckoutFooter from '../../Reusable-Components/CheckoutFooter/CheckoutFooter'
import CheckoutNavBar from '../../Reusable-Components/CheckoutNavBar/CheckoutNavBar'
import CheckoutNavigationBtns from '../../Reusable-Components/CheckoutNavigationBtns/CheckoutNavigationBtns'
import CheckoutSummary from '../../Reusable-Components/CheckoutSummary/CheckoutSummary'

const Shipping = () => {
    return (
        <div className="shipping">
            <CheckoutNavBar />
            <section className="container mb-3 mt-4 shipping__body">
                <div className="row gx-xl-5">
                    <div className="col-xl-7 pe-xl-5 checkout__shipping order-xl-first order-last">
                        <div className="row border gx-0">
                            <div className="col-xl-4 d-flex justify-content-between">
                                <p>Contact</p>
                                <p className="d-xl-none">Change</p>
                            </div>
                            <div className="col-xl-4">
                                <p>fernandocgomez@live.com</p>
                            </div>
                            <div className="col-xl-4">
                                <p className="d-none d-xl-block">Change</p>
                            </div>
                        </div>
                        <CheckoutNavigationBtns />
                    </div>
                    <div className="col-xl-5 checkout__summary mb-4">
                        <CheckoutSummary />
                    </div>
                </div>
            </section>
            <CheckoutFooter />
        </div>
    )
}

export default Shipping

// CheckoutNavBar
// CheckoutInfoSummary
// CheckoutShippingOptions
// CheckoutNavigationBtns
// CheckoutSummary
// CheckoutFooter