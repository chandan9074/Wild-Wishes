import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const {user, loading} = useAuth();

    if (loading) {
        return (
            <div className="spinner-border text-success" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
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
                pathname: "/accounts",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
}
 
export default PrivateRoute;