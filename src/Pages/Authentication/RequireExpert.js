import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useExpert from '../../Hook/useExpert';
import Loading from '../../Shared/Loading/Loading';

const RequireExpert = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const [expert,expertLoading] = useExpert(user)
    const location = useLocation()
   
    if(expertLoading|| loading){
        return <Loading/>
    }

    if(!expert || !user){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
   
    return children
};

export default RequireExpert;