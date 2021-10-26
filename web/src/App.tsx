import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import RequesterPage from 'pages/Requester';
import SenderPage from 'pages/Sender';

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
            <Toaster toastOptions={{
                // TODO: pull style details from theme
                // TODO: likely extract these out of here regardless of theme, maybe the entire Toaster
                style: {
                    backgroundColor: '#36454f',
                    color: '#c7c9d5',
                },
                success: {
                    iconTheme: {
                        primary: '#61d345',
                        secondary: 'white',
                    },
                    style: {
                        borderWidth: 2,
                        borderColor: '#61d345',
                        borderStyle: 'solid',
                    }
                },
            }}/>
            <Switch>
                <Route path="/" component={RequesterPage} exact />
                <Route path="/:id" component={SenderPage} exact />
                <Route>Much wow</Route>
            </Switch>
        </Background>
    );
}
