
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="`" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="`" id="" placeholder="password" />
                    <br />
                    <input type="password" name="`" id="" placeholder="re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
                <p>Already Have an Account? <Link to="/login">Log In</Link></p>
                <div>--------or-------</div>
                <button className="regular-btn">Google sign</button>
            </div>
        </div>
    );
};

export default Register;