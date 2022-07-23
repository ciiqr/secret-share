import { Background } from "components/Background";
import { ToastContainer } from "components/ToastContainer";
import { RootPage } from "pages/Root";
import { Theme } from "theme/Theme";

export function App() {
    return (
        <Theme>
            <Background>
                <ToastContainer />
                <RootPage />
            </Background>
        </Theme>
    );
}
