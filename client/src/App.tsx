import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Requester from 'pages/Requester';
import Sender from 'pages/Sender';

// TODO: move
function getBasePath() {
    const baseUrl = new URL(document.baseURI);
    const pathname = baseUrl.pathname;

    return pathname.replace(/\/$/, '');
}

// to support hosting on a subpath
const base = getBasePath();

export default function App() {
    return (
        <Switch>
            <Route path={`${base}/`} component={Requester} exact />
            <Route path={`${base}/:id`} component={Sender} exact />
            <Route>Much wow</Route>
        </Switch>
    );
}
