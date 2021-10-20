
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase,init';
import useAuth from '../hooks/useAuth';
import './Login.css'

initializeAuthentication();
const Login = () => {
    const auth = getAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setErr] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        if (e.target.value < 6) {
            setErr('Password Should Be more than 6');
        } else {
            setPassword(e.target.value);
        }
    }
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setErr("");
                history.push(redirect_uri);
            })
            .catch(error => {
                setErr(error.message)
            })
    }
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <h2 className="text-center mt-5 text-primary">Please Login</h2>
            <div className="w-75 mx-auto">
                <div className="mb-3 mt-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'llF never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div>
                    <p className="text-danger">{error}</p>
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-primary">Login</button> <br />
                <p className="mt-2">New to The Website <Link to="/register">Create an Account</Link></p>
                <button onClick={signInUsingGoogle} className="login-with-google-btn mt-3">Sign In Using Google</button>
            </div>
        </div>
    );
};

export default Login;