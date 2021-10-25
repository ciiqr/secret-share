import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequesterPage from 'pages/Requester';
import SenderPage from 'pages/Sender';

export default function App() {
    return (
        <Switch>
            <Route path="/" component={RequesterPage} exact />
            <Route path="/:id" component={SenderPage} exact />
            <Route>Much wow</Route>
        </Switch>
    );
}
