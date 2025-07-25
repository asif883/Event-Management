import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading';

const PrivateRoute = ({children}) => {
    const { user , loading } = useAuth()
    const location = useLocation()

    if(loading){
        return <Loading/>
    }

    if(user){
        return children 
    }

    return <Navigate state={location?.pathname} to={'/login'}/>
};

export default PrivateRoute;