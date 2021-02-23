import React from 'react'

const CheckoutShippingOptions = () => {
    return (
        <div className="mb-5">
            <div className="row gx-0 pt-2 pb-2">
                <h5 className="h5 mb-3">Shipping method</h5>
                <div className="col-12 border d-flex justify-content-between pt-4 pb-4 pe-3 ps-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label class="form-check-label" for="exampleRadios1">
                            Faster Shipping (Delivered in 2 Business Days if Ordered by 12:30pm EST)
                        </label>
                    </div>
                    <p className="text-secondary mb-0">Free</p>
                </div>
                <div className="col-12 border d-flex justify-content-between pt-4 pb-4 pe-3 ps-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label class="form-check-label" for="exampleRadios1">
                            Faster Shipping (Delivered in 2 Business Days if Ordered by 12:30pm EST)
                        </label>
                    </div>
                    <p className="text-secondary mb-0">Free</p>
                </div>
                <div className="col-12 border d-flex justify-content-between pt-4 pb-4 pe-3 ps-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label class="form-check-label" for="exampleRadios1">
                            Faster Shipping (Delivered in 2 Business Days if Ordered by 12:30pm EST)
                        </label>
                    </div>
                    <p className="text-secondary mb-0">Free</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutShippingOptions
