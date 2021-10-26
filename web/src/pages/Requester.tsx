import React from 'react';
import styled from 'styled-components';
import { Column, QrCode, Row, ShareCopyableField, ShareSecretInput } from 'components';

// TODO: introduce theme with standard gap values

const Layout = styled(Row)({
    justifyContent: 'space-around',
    padding: 4,
});

const Box = styled(Column)({
    maxWidth: 400,
    width: '100%',
    gap: 4,
});

export default function RequesterPage() {
    // TODO: generate on page load
    const url = 'https://secret.williamvilleneuve.ca/f38t29';
    // TODO: fetch once set by sender
    // TODO: poll every 5s for changes
    // TODO: maybe: switch to websockets
    const secret = 'a secret';

    return (
        <Layout>
            <Box>
                <QrCode value={url} />
                <ShareCopyableField value={url} copyMessage="Copied url!" />
                <ShareSecretInput value={secret} />
            </Box>
        </Layout>
    );
}
