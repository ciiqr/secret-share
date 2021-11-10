import styled from 'styled-components';
import { Column, QrCode, Row, CopyableField, SecretInput } from 'components';
import UrlHelper from 'helpers/Url';
import PrivateKey from 'features/share/PrivateKey';
import { useAsync } from 'react-async-hook';

const Layout = styled(Row)(props => ({
    padding: props.theme.spacing?.default,
}));

const Box = styled(Column)({
    maxWidth: 400,
    width: '100%',
});

export default function RequesterPage() {
    const { result: privateKey } = useAsync(async () => PrivateKey.generate(), []);
    const { result: publicKey } = useAsync(async () => privateKey?.getPublicKeyJwk(), [privateKey]);

    // TODO: get a unique id from the server instead
    const id = publicKey?.n?.slice(0, 6);
    const url = UrlHelper.absolute(`/${id}`);
    // TODO: fetch once set by sender
    // TODO: poll every 5s for changes
    // TODO: maybe increase poll time after a few minutes
    // TODO: maybe: switch to websockets
    const secret = 'a secret';

    // TODO: proper loading indicator if we don't have key & id yet
    if (!publicKey) {
        return <p>loading...</p>;
    }

    return (
        <Layout justifyContent="space-around">
            <Box>
                <QrCode value={url} />
                <CopyableField value={url} message="Copied url!" />
                <SecretInput value={secret} />
            </Box>
        </Layout>
    );
}
