import styled from 'styled-components';
import { Column, QrCode, Row, CopyableField, SecretInput } from 'components';

const Layout = styled(Row)(props => ({
    padding: props.theme.spacing?.default,
}));

const Box = styled(Column)({
    maxWidth: 400,
    width: '100%',
});

export default function RequesterPage() {
    // TODO: generate on page load
    const url = 'https://secret.williamvilleneuve.ca/f38t29';
    // TODO: fetch once set by sender
    // TODO: poll every 5s for changes
    // TODO: maybe increase poll time after a few minutes
    // TODO: maybe: switch to websockets
    const secret = 'a secret';

    return (
        <Layout justifyContent="space-around">
            <Box>
                <QrCode value={url} />
                <CopyableField value={url} copyMessage="Copied url!" />
                <SecretInput value={secret} />
            </Box>
        </Layout>
    );
}
