import { useState } from 'react';
import styled from 'styled-components';
import { Column, Row, TextArea, CopyableField, SendButton } from 'components';
import toast from 'react-hot-toast';

// TODO: make common
const Layout = styled(Row)(props => ({
    padding: props.theme.spacing?.default,
}));

const Content = styled(Column)({
    maxWidth: 400,
    width: '100%',
});

const StyledTextArea = styled(TextArea)({
    height: 200,
    resize: 'none',
});

function sendSecret(secret: string) {
    // TODO: send

    // TODO: toast conditional on result
    toast.success('Secret shared!')
}

export default function SenderPage() {
    const [secret, setSecret] = useState('');

    return (
        <Layout justifyContent="space-around">
            <Content>
                <CopyableField value={window.location.href} />
                {/* TODO: would be nice if text area could be hidden while typing... */}
                <StyledTextArea value={secret} onChange={e => setSecret(e.target.value)} />
                <SendButton onClick={() => sendSecret(secret)} />
            </Content>
        </Layout>
    );
}
