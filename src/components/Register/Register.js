import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase,init';
import useAuth from '../hooks/useAuth';

initializeAuthentication();
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [err, setErr] = useState('');
    const auth = getAuth();
    const history = useHistory();

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
    const handleRegiter = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                history.push('/home');

            })
            .catch(err => setErr(err.message));

    }

    return (
        <div className="w-75 mx-auto mt-5">
            <h2 className="text-center text-info">Register: Create An Account</h2>
            <form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="name@example.com" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </FloatingLabel>
                <div class="input-group mt-3">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" class="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="text-danger">
                    {err}
                </div>
                <Button onClick={handleRegiter} className="mt-2 mb-2" variant="primary" type="submit">
                    Register
                </Button>
            </form>
            <br />
            <p>Already have an accout? <Link to="/login">Sign In</Link></p>
        </div>
    );
};

export default Register;