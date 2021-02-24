import React from 'react'
import Footer from '../../Reusable-Components/Footer/Footer'
import NavBar from '../../Reusable-Components/NavBar/NavBar'

const SignUp = () => {
    return (
        <div className="sign-up">
            <NavBar />
            <form className="container sign-up__body">
                <div class="row justify-content-center pb-3">
                    <h2 className="h4 fw-light text-center">Create an account</h2>
                    <div className="col-lg-4 col-12">
                        <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary border-dark" placeholder="First name" />
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-lg-4 col-12">
                        <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary border-dark" placeholder="Last name" />
                    </div>
                </div>
                <div class="row justify-content-center pb-3">
                    <div className="col-lg-4 col-12">
                        <input type="email" class="form-control rounded-0 pt-2 pb-2 text-secondary border-dark" placeholder="your@email.com" />
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-lg-4 col-12">
                        <input type="password" class="form-control rounded-0 pt-2 pb-2 text-secondary border-dark" placeholder="Password" />
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-lg-4 col-12">
                    <div class="d-grid gap-2">
                        <button
                            class="btn btn-dark rounded-0 pt-2 pb-2 text-capitalize"
                            type="button"
                        >
                            Create
                            </button>
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-lg-4 col-12 d-flex justify-content-between">
                        <a href="#" className="text-dark">Return to Store</a>
                        <a href="#" className="text-dark">Log in</a>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default SignUp
