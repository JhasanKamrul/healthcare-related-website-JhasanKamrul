import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from '@firebase/auth';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase,init';
import useAuth from '../hooks/useAuth';

initializeAuthentication();
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [err, setErr] = useState('');
    const auth = getAuth();

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
            })
            .catch(err => setErr(err.message));

    }
    const verifyEmail = email => {
        sendEmailVerification(auth, email).then(() => {

        });
    }
    return (
        <div className="w-75 mx-auto mt-5">
            <h2 className="text-center text-info">Register: Create An Account</h2>
            <form onSubmit={handleRegiter}>
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
                <div className="text-danger">
                    {err}
                </div>
                <Button className="mt-2 mb-2" variant="primary" type="submit">
                    Register
                </Button>
            </form>
            <br />
            <p>Already have an accout? <Link to="/login">Sign In</Link></p>
        </div>
    );
};

export default Register;