import React, { Component } from "react";
import {Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import history from '../plugin/history/history';

import Login from "../pages/login"; 
import Main from "../pages/main"; 
import NotFound from "../pages/404"; 

const routerConfig = (
	<Router history={history}>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/main" component={Main} />
			<Route path="/404" component={NotFound}/>
			<Redirect from="/" to="/login"/>
		</Switch>
	</Router>
) 

export default routerConfig; 


