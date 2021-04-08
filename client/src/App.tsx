import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Requester from './pages/Requester';
import Sender from './pages/Sender';

// to support hosting on a subpath
const baseUrl = new URL(document.baseURI);
const basePath = baseUrl.pathname;

function App() {
    return (
        <Switch>
            <Route path={`${basePath}`} component={Requester} exact />
            <Route path={`${basePath}:id`} component={Sender} exact />
            <Route>Much wow</Route>
        </Switch>
    );
}

export default App;
