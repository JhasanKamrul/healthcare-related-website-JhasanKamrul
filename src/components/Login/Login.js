
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase,init';
import useAuth from '../hooks/useAuth';
import './Login.css'

initializeAuthentication();
const Login = () => {
    const auth = getAuth();
    const history = useHistory();
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
                history.push('/home');
            })
            .catch(error => {
                setErr(error.message)
            })
    }
    const { signInUsingGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        signInUsingGoogle();
        getRedirectResult(auth)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                setErr('');
            }).catch((error) => {
                setErr(error.message)
            });

    }
    return (
        <div>
            <h2 className="text-center mt-5 text-primary">Please Login</h2>
            <div className="w-75 mx-auto">
                <div class="mb-3 mt-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1" required />
                </div>
                <div>
                    <p className="text-danger">{error}</p>
                </div>
                <button onClick={handleLogin} type="submit" class="btn btn-primary">Login</button> <br />
                <p className="mt-2">New to The Website <Link to="/register">Create an Account</Link></p>
                <button onClick={handleGoogleSignIn} className="login-with-google-btn mt-3">Sign In Using Google</button>
            </div>
            +-</div>
    );
};

export default Login;