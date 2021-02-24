import React from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import Header from './components/header';
import Home from './components/home';
import User from './components/User';


const Routes = ()=>(
    <BrowserRouter>
        <Header/>
        <Container className="mt-5">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
            </Switch>
        </Container>
    </BrowserRouter>
)

export default Routes;
