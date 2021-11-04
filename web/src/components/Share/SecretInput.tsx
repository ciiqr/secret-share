import { useState } from 'react';
import { Column, Row, ShareCopyButton, ViewButton } from 'components';
import TextArea from 'components/TextArea'; // TODO: why is this sometimes undefined when included through the index...
import styled from 'styled-components';

const StyledTextArea = styled(TextArea)({
    height: 200,
    resize: 'none',
});

type ShareSecretInputProps = {
    className?: string
    value: string
};

export default function ShareSecretInput({ className, value }: ShareSecretInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <Column className={className}>
            <StyledTextArea readOnly value={visible || !value ? value : '***'} />
            <Row justifyContent="space-between">
                <ViewButton
                    visible={visible}
                    onClick={_ => setVisible(!visible)}
                />
                <ShareCopyButton value={value} message="Copied secret!" />
            </Row>
        </Column>
    );
}
