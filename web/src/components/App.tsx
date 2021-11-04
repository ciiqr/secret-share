import Theme from 'theme/Theme';
import ToastContainer from 'components/ToastContainer';
import Background from 'components/Background';
import RootPage from 'pages/Root';

export default function App() {
    return (
        <Theme>
            <Background>
                <ToastContainer />
                <RootPage />
            </Background>
        </Theme>
    );
}
