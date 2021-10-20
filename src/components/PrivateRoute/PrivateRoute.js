import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const history = useHistory();

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )

            }
        >
        </Route>
    );
};

export default PrivateRoute;