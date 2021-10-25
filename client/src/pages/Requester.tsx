import React from 'react';
import styled from 'styled-components';
import { QRCode } from 'react-qr-svg';
import { Button, Column, Row, ShareSecretTextArea } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

// TODO: generate on page load
const url = 'https://secret.williamvilleneuve.ca/f38t29';

const QrCode = ({ className, url }: { className?: string, url: string }) => (
    <QRCode
        className={className}
        value={url}
        level='H'
    />
);

// TODO: Match Background?
const UrlField = () => (<input readOnly type='text' value={url} />);
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
    return (
        <Layout>
            <Box>
                <QrCode url={url} />
                <FlexRow>
                    <UrlField />
                    <UrlCopyButton />
                </FlexRow>
                <ShareSecretTextArea value='a secret' />
            </Box>
        </Layout>
    );
}
