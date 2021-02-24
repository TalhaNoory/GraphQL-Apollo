import React from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Header from './components/Menu/Header';
import Home from './components/Menu/Home';
import User from './components/User';
import CreateUSer from './components/CreateUser';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Container className="mt-5">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={User} />
                <Route path="/createuser" component={CreateUSer} />
            </Switch>
        </Container>
    </BrowserRouter>
)

export default Routes;
