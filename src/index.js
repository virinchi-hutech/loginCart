import React,{ Component } from "react";
import ReactDOM from "react-dom";
import a from  "@fortawesome/fontawesome-free/css/all.min.css";
import a1 from "bootstrap-css-only/css/bootstrap.min.css";
import a2 from "mdbreact/dist/css/mdb.css";
import Login from "./views/Login/Login";
import AdminLanding from "./views/AdminLanding/AdminLanding";
import { Route, Router } from "react-router";

import history from './history'
const routing = (
    <Router history={history}>
        <Route path="/" component={history.push('login')} />
        <Route path="/login" component={isAuth()?history.push('admin'):Login} />
        <Route path="/admin" component={protectedRoute(AdminLanding)} />
    </Router>
  )

function protectedRoute(component){
    if(isAuth()){
        return component
    }else{
        return Login
    }
}
function isAuth(){
    return false;
}
ReactDOM.render(routing, document.querySelector("#root"));