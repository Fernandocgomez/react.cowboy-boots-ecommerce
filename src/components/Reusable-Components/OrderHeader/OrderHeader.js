import React from 'react'

const OrderHeader = () => {
    return (
        <div>
            <div className="container d-flex justify-content-lg-between flex-column flex-lg-row">
                <div className="d-flex align-items-baseline">
                    <p className="fw-bold fs-3 me-3">#1001</p>
                    <a href="" className="text-decoration-none text-dark bg-warning bg-gradient rounded-pill pe-3 ps-2 pt-1 pb-1 me-3"><i class="far fa-circle pe-1"></i>Unfulfilled</a>
                    <a href="" className="text-decoration-none text-dark bg-secondary bg-gradient rounded-pill pe-3 ps-2 pt-1 pb-1"><i class="fas fa-circle pe-1"></i>Paid</a>
                </div>
                <div class="dropdown d-none d-lg-block">
                    <a class="dropdown-toggle text-dark text-decoration-none fw-bold" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        More Actions
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item"><i class="fas fa-trash-alt me-2 text-danger"></i>Delete Order</button></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p className="text-secondary fw-bold">March 2, 2021 at 8:06 pm</p>
                    </div>
                    <div className="col-6 d-block d-lg-none">
                        <div class="dropdown">
                            <a class="dropdown-toggle text-dark text-decoration-none fw-bold float-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                More Actions
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button className="dropdown-item"><i class="fas fa-trash-alt me-2 text-danger"></i>Delete Order</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHeader
