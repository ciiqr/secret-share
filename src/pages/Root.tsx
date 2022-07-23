import { Route, Routes } from "react-router-dom";
import { RequesterPage } from "pages/Requester";
import { SenderPage } from "pages/Sender";

export function RootPage() {
    return (
        <Routes>
            <Route path="/" element={<RequesterPage />} />
            <Route path="/:address" element={<SenderPage />} />
            <Route path="*" element={<p>Much wow</p>} />
        </Routes>
    );
}
