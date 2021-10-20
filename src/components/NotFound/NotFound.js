import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-section">
                <h1>Oops! Page Not Found.</h1>
                <h1>404</h1>
                <p>We Can't find the page you're looking for</p>
                <Link to="/home" >
                    <button className="rounded">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;