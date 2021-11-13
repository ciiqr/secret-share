import React from 'react';
import ReactDOM from 'react-dom';
import 'the-new-css-reset/css/reset.css';
import '@fontsource/roboto-mono';
import 'index.css';
import App from 'components/App';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import DomHelper from 'helpers/Dom'

const base = DomHelper.getBasePath();
const root = document.getElementById('root');

ReactDOM.render((
    <React.StrictMode>
        <BrowserRouter basename={base}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
), root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
