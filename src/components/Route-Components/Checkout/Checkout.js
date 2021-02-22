// Module 
import React from 'react'
import CheckoutFooter from '../../Reusable-Components/CheckoutFooter/CheckoutFooter'
import CheckoutNavBar from '../../Reusable-Components/CheckoutNavBar/CheckoutNavBar'
import CheckoutNavigationBtns from '../../Reusable-Components/CheckoutNavigationBtns/CheckoutNavigationBtns'
import CheckoutSummary from '../../Reusable-Components/CheckoutSummary/CheckoutSummary'
import CustomerInfo from '../../Reusable-Components/CustomerInfo/CustomerInfo'

const Checkout = () => {
    return (
        <div className="checkout">
            <CheckoutNavBar />
            <section className="container mb-3 mt-4">
                <div className="row gx-md-5">
                    <div className="col-md-7 pe-md-5 checkout__customer-info order-md-first order-last">
                        <CustomerInfo />
                        <CheckoutNavigationBtns />
                    </div>
                    <div className="col-md-5 checkout__summary mb-4">
                        <CheckoutSummary />
                    </div>
                </div>
            </section>
            <CheckoutFooter />
        </div>
    )
}

export default Checkout