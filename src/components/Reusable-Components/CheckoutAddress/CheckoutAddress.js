import React from 'react'

const CheckoutAddress = () => {
    return (
        <div>
            <h5 className="h5 mb-3 mt-5">Shipping address</h5>
            <div class="row gy-3 gx-2 mb-3">
                <div className="col-md-6">
                    <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary" placeholder="First name" />
                </div>
                <div className="col-md-6">
                    <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary" placeholder="Last name" />
                </div>
            </div>
            <div class="row mb-3">
                <div className="col-md-12">
                    <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary" placeholder="Address" />
                </div>
            </div>
            <div class="row mb-3">
                <div className="col-md-12">
                    <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary" placeholder="Apartment, suite, etc. (optional)" />
                </div>
            </div>
            <div class="row mb-3">
                <div className="col-md-12">
                    <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary" placeholder="City" />
                </div>
            </div>
            <div class="row mb-3 gy-3 gx-2">
                <div className="col-md-4">
                    <select class="form-select rounded-0 pt-2 pb-2 text-secondary">
                        <option selected>Country/Region</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <select class="form-select rounded-0 pt-2 pb-2 text-secondary">
                        <option selected>State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary" placeholder="Zip code" />
                </div>
            </div>
            <div class="row mb-3">
                <div className="col-md-12">
                    <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary" placeholder="Phone (optional)" />
                </div>
            </div>
        </div>
    )
}

export default CheckoutAddress
