import React from 'react'
/**
 * Represents a book.
 * @param {string} heading - Page headers ex "Create new account"
 * @param {string} author - It can take the value of "login", "adminLogin", and "signUp"
 */
const UserForm = ({heading, type}) => {
    return (
        <form className="container user-form">
            <h2 className="h4 fw-light text-center">{heading}</h2>
            {type === "signUp" ? 
            <>
                <div class="row justify-content-center pb-3">
                    <div className="col-lg-4 col-12">
                        <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary border-dark" placeholder="First name" />
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-lg-4 col-12">
                        <input type="text" class="form-control rounded-0 pt-2 pb-2 text-secondary border-dark" placeholder="Last name" />
                    </div>
                </div>
            </> 
            : <></>}
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
                            {type === "signUp" ? <>Create</> : <>Login</>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pb-3">
                <div className="col-lg-4 col-12 d-flex justify-content-between">
                    <a href="#" className="text-dark">Return to Store</a>
                {type === "signUp" ? 
                    <>
                        <a href="#" className="text-dark">Log in</a>
                    </> 
                    : 
                    <>
                        {
                            type === "login" ? 
                            <>
                                <a href="#" className="text-dark">Sign up</a>
                            </> 
                            : 
                            null
                        }
                    </>
                }
                </div>
            </div>
        </form>
    )
}

export default UserForm
