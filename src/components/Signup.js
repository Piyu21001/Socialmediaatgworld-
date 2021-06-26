import React, { Component } from "react";
import "./Login.css";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <div class="create-account-wrapper">
                    <h3>Create Account</h3>

                    <div className="single-row">
                        <div className="single-column">

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                        </div>
                        <div className="single-column">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                    </div>

                    <div className="single-row">
                        <div className="form-group">
                            {/* <label>Email address</label> */}
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>

                    <div className="single-row">
                    <div className="form-group">
                        {/* <label>Password</label> */}
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
</div>

<div className="single-row">
                    <div className="form-group">
                        {/* <label>Password</label> */}
                        <input type="cpassword" className="form-control" placeholder="Confirm password" />
                    </div>
</div>
                    <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                    <p className="forgot-password text-right">
                        Already have an account? <a href="./Login">Sign in</a>
                    </p>
                </div>
            </form>
        );
    }
}