import React from 'react'
import CheckoutShippingOptions from '../../CheckoutShippingOptions/CheckoutShippingOptions'
import CheckoutFooter from '../../Reusable-Components/CheckoutFooter/CheckoutFooter'
import CheckoutInfoSummary from '../../Reusable-Components/CheckoutInfoSummary/CheckoutInfoSummary'
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
                        <CheckoutInfoSummary />
                        <CheckoutShippingOptions />
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