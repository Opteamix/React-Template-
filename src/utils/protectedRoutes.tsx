import { Navigate, Outlet, useLocation } from "react-router-dom";
import React from 'react';

type ProctectRouteProps ={
    children?: React.ReactNode
    // isDev: boolean;
    // cookieName: string,
    // landingPath: string,
    // errorPath: string
}

const ProtectedRoutes = ({ children }: any) => {
	// TODO: Use authentication token
    const location = useLocation();
	const localStorageToken = localStorage.getItem("token");

	return localStorageToken == "true" ? children : <Navigate to="/login"  replace/>;
};

export default ProtectedRoutes;