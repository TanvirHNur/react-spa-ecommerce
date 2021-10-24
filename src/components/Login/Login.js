import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signiInWithGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri= location.state?.from || '/shop';


    const handleGoogleLogin=()=>{
        signiInWithGoogle()
        .then(result=>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className="login-form">
           <div>
                <h2>Log in</h2>
                <form>
                <input type="email" name="" id="" placeholder="Your mail" />
                <br />
                <input type="password" name="" id="" placeholder="Your Password" />
                <br />
                <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-jhon? <Link to="/register">Create Account</Link> </p>
                <div>----------or---------</div>
                <button onClick={handleGoogleLogin} className="regular-btn">Sign in with google</button>
           </div>
        </div>
    );
};

export default Login;