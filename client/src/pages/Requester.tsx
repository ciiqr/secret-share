import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { Button, Column, QrCode, Row, ShareSecretTextArea } from 'components';

const ReadOnlyInput = styled.input.attrs(props => ({
    readOnly: true,
    type: 'text',
}))({});

const UrlCopyButton = () => (<Button><FontAwesomeIcon fixedWidth icon={faCopy} /></Button>);

// TODO: introduce theme with standard gap values

const Box = styled(Column)({
    maxWidth: 400,
    width: '100%',
    gap: 4,
});

const Layout = styled(Row)({
    justifyContent: 'space-around',
    padding: 4,

    // TODO: apply theme background color to this element
    // backgroundColor: 'blue',
    minHeight: '100%',
});

const FlexRow = styled(Row)({
    gap: 4,
});

export default function RequesterPage() {
    // TODO: generate on page load
    const url = 'https://secret.williamvilleneuve.ca/f38t29';

    return (
        <Layout>
            <Box>
                <QrCode value={url} />
                <FlexRow>
                    <ReadOnlyInput value={url} />
                    <UrlCopyButton />
                </FlexRow>
                <ShareSecretTextArea value='a secret' />
            </Box>
        </Layout>
    );
}
