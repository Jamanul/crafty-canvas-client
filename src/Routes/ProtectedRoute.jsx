import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {loader,user}=useContext(AuthContext)
    const location =useLocation()
    if(loader){
        return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    } 
    return <Navigate state={location.pathname} to="/login"></Navigate>
        
    
};

export default ProtectedRoute;