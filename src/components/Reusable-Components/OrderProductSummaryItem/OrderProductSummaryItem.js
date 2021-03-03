import React from 'react'

const OrderProductSummaryItem = () => {
    return (
        <div className="row pt-3 fw-bold">
            <div className="col-3">
                <img src="https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw6f6c491c/images/zoom/10002227_3-4_front.jpg?sw=800&sh=800" alt="" srcset="" className="border rounded-1 mt-2 ms-2 ms-lg-0 mt-lg-0" width="70px" height="70px" />
            </div>
            <div className="col-6 d-lg-flex justify-content-between text-center align-items-center">
                <a href="" className="d-block">Heritage Roughstock Western Boot</a>
                <p className="m-0">$0.00 x 1</p>
            </div>
            <div className="col-3 d-lg-flex align-items-center justify-content-end">
                <p className="m-0 text-lg-end pt-4 pt-lg-0">$0.00</p>
            </div>
        </div>
    )
}

export default OrderProductSummaryItem
