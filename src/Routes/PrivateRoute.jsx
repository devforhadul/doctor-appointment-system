import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/ui/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();


    if(loading){
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate state={location.pathname} to={'/log-in'}></Navigate>;
    }

    return children;
};

export default PrivateRoute;