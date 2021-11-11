import { useState } from 'react';
import styled from 'styled-components';
import { TextArea, CopyableField, SendButton, Layout, Content } from 'components';
import toast from 'react-hot-toast';

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
        <Layout>
            <Content>
                <CopyableField value={window.location.href} />
                {/* TODO: would be nice if text area could be hidden while typing... */}
                <StyledTextArea value={secret} onChange={e => setSecret(e.target.value)} />
                <SendButton onClick={() => sendSecret(secret)} />
            </Content>
        </Layout>
    );
}
