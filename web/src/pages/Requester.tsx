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

    return (
        <Layout>
            <Box>
                <QrCode value={url} />
                <ShareCopyableField value={url} />
                <ShareSecretInput value='a secret' />
            </Box>
        </Layout>
    );
}
