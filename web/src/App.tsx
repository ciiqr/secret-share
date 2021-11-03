import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequesterPage from 'pages/Requester';
import SenderPage from 'pages/Sender'
import Theme from 'theme/Theme';
import ToastContainer from 'components/ToastContainer';
import Background from 'components/Background';

// TODO: move to components/App/Root.tsx? or similar. with other app level components adjacent
export default function App() {
    return (
        <Theme>
            <Background>
                <ToastContainer />
                <Switch>
                    <Route path="/" component={RequesterPage} exact />
                    <Route path="/:id" component={SenderPage} exact />
                    <Route>Much wow</Route>
                </Switch>
            </Background>
        </Theme>
    );
}
