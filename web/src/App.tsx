import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequesterPage from 'pages/Requester';
import SenderPage from 'pages/Sender';

import styled from 'styled-components';

// TODO: move?
const Background = styled.div({
    // TODO: apply theme background color to this element
    // backgroundColor: 'red',
    minHeight: '100%',
});

export default function App() {
    return (
        // TODO: insert theme provider
        <Background>
            <Switch>
                <Route path="/" component={RequesterPage} exact />
                <Route path="/:id" component={SenderPage} exact />
                <Route>Much wow</Route>
            </Switch>
        </Background>
    );
}
