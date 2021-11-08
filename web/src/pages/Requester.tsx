import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column, QrCode, Row, CopyableField, SecretInput } from 'components';
import UrlHelper from 'helpers/Url';
import PrivateKey from 'features/share/PrivateKey';

const Layout = styled(Row)(props => ({
    padding: props.theme.spacing?.default,
}));

const Box = styled(Column)({
    maxWidth: 400,
    width: '100%',
});

// TODO: move & refactor... this likely can cause issues as is
function usePrivateKey() {
    const [privateKey, setPrivateKey] = useState<PrivateKey | null>(null);

    useEffect(() => {
        (async () => {
            const key = await PrivateKey.generate();
            setPrivateKey(key);
        })();
    }, []);

    return {
        privateKey,
    };
}

export default function RequesterPage() {
    const { privateKey } = usePrivateKey();
    // TODO: generate on page load
        // const publicKeyJwk = await privateKey.getPublicKeyJwk();
    const url = UrlHelper.absolute('/f38t29');
    // TODO: fetch once set by sender
    // TODO: poll every 5s for changes
    // TODO: maybe increase poll time after a few minutes
    // TODO: maybe: switch to websockets
    const secret = 'a secret';

    // TODO: proper loading indicator if we don't have key & id yet
    if (!privateKey) {
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
