import React from 'react';
import styled from 'styled-components';
import { QRCode } from 'react-qr-svg';

const StyledTextArea = styled.textarea`
    height: 200px;
    resize: none;
`;

const QrCode = ({ url }: { url: string }) => {
    return (
        <QRCode
            value={url}
            level='H'
        />
    );
};

const UrlField = () => (<input readOnly type='text' value='hi im a url' />);
const ResponseTextArea = () => (<StyledTextArea readOnly>hi im a StyledTextArea</StyledTextArea>);
const UrlCopyButton = () => (<TallButton className="fa fa-copy" />);
const ViewButton = () => (<TallButton className="fa fa-eye-slash" />);
const ResponseCopyButton = () => (<TallButton className="fa fa-copy" />);

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

const FlexRowSpaceBetween = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

export default () => {
    return (
        <Layout>
            <Box>
                <QrCode url='https://secret.williamvilleneuve.ca/f38t29' />
                <FlexRow>
                    <UrlField />
                    <UrlCopyButton />
                </FlexRow>
                <ResponseTextArea />
                <FlexRowSpaceBetween>
                    <ViewButton />
                    <ResponseCopyButton />
                </FlexRowSpaceBetween>
            </Box>
        </Layout>
    );
};
