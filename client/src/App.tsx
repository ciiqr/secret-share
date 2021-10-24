import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Requester from 'pages/Requester';
import Sender from 'pages/Sender';

export default function App() {
    return (
        <Switch>
            <Route path="/" component={Requester} exact />
            <Route path="/:id" component={Sender} exact />
            <Route>Much wow</Route>
        </Switch>
    );
}
