import React from 'react';
import styled from 'styled-components';
import { QRCode } from 'react-qr-svg';
import SecretTextArea from 'components/SecretTextArea';

const QrCode = ({ url }: { url: string }) => (
    <QRCode
        value={url}
        level='H'
    />
);

const UrlField = () => (<input readOnly type='text' value='hi im a url' />);
const UrlCopyButton = () => (<TallButton className='fa fa-copy' />);

const TallButton = styled.button`
    height: 42px;
`;

const Box = styled.div`
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    display: flex;
    gap: 4px;
    // background-color: red;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 4px;
    // background-color: green;
`;

const FlexRow = styled.div`
    flex-direction: row;
    display: flex;
    gap: 4px;
`;

export default function Requester() {
    return (
        <Layout>
            <Box>
                <QrCode url='https://secret.williamvilleneuve.ca/f38t29' />
                <FlexRow>
                    <UrlField />
                    <UrlCopyButton />
                </FlexRow>
                <SecretTextArea value='a secret' />
            </Box>
        </Layout>
    );
};
