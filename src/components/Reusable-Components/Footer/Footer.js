// Modules
import React from 'react'

const Footer = () => {
    return (
        <footer className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column pb-3">
                        <h5 className="h5 fw-light border-bottom border-dark border-1 pb-2">Customer Care</h5>
                        <a className="text-dark text-decoration-none pt-1 fw-light text-capitalize" href="">Lorem ipsumipsum</a>
                        <a className="text-dark text-decoration-none pt-2 fw-light text-capitalize" href="">Lorem ipsumipsum</a>
                        <a className="text-dark text-decoration-none pt-2 fw-light text-capitalize" href="">Lorem ipsumipsum</a>
                        <a className="text-dark text-decoration-none pt-2 fw-light text-capitalize" href="">Lorem ipsumipsum</a>
                    </div>
                    <div className="col-md-4 d-flex flex-column">
                        <h5 className="h5 fw-light border-bottom border-dark border-1 pb-2">About</h5>
                        <p className="pt-1 fw-light">Hello there...</p>
                        <p className="fw-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, atque aut sapiente veniam iste eum quaerat repellendus corrupti reprehenderit vitae cumque in expedita laudantium odio ratione sunt ad, nulla ducimus</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column">
                        <h5 className="h5 fw-light border-bottom border-dark border-1 pb-2">Newsletter</h5>
                        <p className="pt-1 fw-light">Join our mailing list</p>
                        <div class="input-group mb-3 pt-1">
                            <input type="email" class="form-control border-0 border-dark bg-light pt-2 pb-2 rounded-0" placeholder="your@email.com" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary border-0 bg-dark text-white fw-light ps-4 pe-4 rounded-0" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
