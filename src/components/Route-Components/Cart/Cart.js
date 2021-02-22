// Modules
import React from 'react'
// Components
import CartProduct from '../../Reusable-Components/CartProduct/CartProduct'
import CartSubtotal from '../../Reusable-Components/CartSubtotal/CartSubtotal'
import Footer from '../../Reusable-Components/Footer/Footer'
import NavBar from '../../Reusable-Components/NavBar/NavBar'
import TopNavBar from '../../Reusable-Components/TopNavBar/TopNavBar'

const Cart = () => {
    return (
        <div>
            <TopNavBar />
            <NavBar />
            <div className="container pt-4">
                <h2 className="h2 text-center">
                    Cart
                </h2>
                <a className="d-block text-decoration-none text-dark text-end">Continue Shopping &#8594;</a>
                <div className="row gx-md-5 pt-4">
                    <div className="col-md-8">
                        <h4 className="h4 fw-light border-top border-bottom border-1 pt-2 pb-2 border-dark">Products</h4>
                        <CartProduct />
                    </div>
                    <div className="col-md-4">
                        <h4 className="h4 fw-light border-top border-bottom border-1 pt-2 pb-2 border-dark">Subtotal</h4>
                        <CartSubtotal />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
