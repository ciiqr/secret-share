import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
                <Routes>
                    <Route path="/" element={<RequesterPage />} />
                    <Route path="/:id" element={<SenderPage />} />
                    <Route path="*" element={<p>Much wow</p>} />
                </Routes>
        </Theme>
    );
}
