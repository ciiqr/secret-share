import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "components/App";
import { getBasePath } from "helpers/Dom";
import "the-new-css-reset/css/reset.css";
import "@fontsource/roboto-mono";
import "index.css";
import "ghspa";

const base = getBasePath();
const root = document.getElementById("root");

render(
    <StrictMode>
        <BrowserRouter basename={base}>
            <App />
        </BrowserRouter>
    </StrictMode>,
    root,
);
