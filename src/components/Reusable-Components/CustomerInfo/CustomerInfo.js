import React from 'react'
import CheckoutAddress from '../CheckoutAddress/CheckoutAddress'

const CustomerInfo = () => {
    return (
        <div>
            <form>
                <h5 className="h5 mb-3">Contact  information</h5>
                <input type="email" class="form-control rounded-0 pt-2 pb-2 text-secondary mb-2" placeholder="Email" />
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label text-secondary small" for="flexCheckDefault">
                        Keep me up to date on news and exclusive offers
                    </label>
                </div>
                <CheckoutAddress />
            </form>
        </div>
    )
}

export default CustomerInfo
