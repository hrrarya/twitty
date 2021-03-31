import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthedRoute = ({component:Component, authed, path, ...rest}) => {
    if(!authed) return <Redirect to="/login"/>;
    
    return <Route path={path} component={Component} exact/>
}
 
export default AuthedRoute;