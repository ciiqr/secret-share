import { useState } from 'react';
import { Column, Row, CopyButton, ViewButton } from 'components';
import TextArea from 'components/TextArea'; // TODO: why is this sometimes undefined when included through the index...
import styled from 'styled-components';

const StyledTextArea = styled(TextArea)({
    height: 200,
    resize: 'none',
});

type SecretInputProps = {
    className?: string
    value: string
};

export default function SecretInput({ className, value }: SecretInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <Column className={className}>
            <StyledTextArea readOnly value={visible || !value ? value : '***'} />
            <Row justifyContent="space-between">
                <ViewButton
                    visible={visible}
                    onClick={() => setVisible(!visible)}
                />
                <CopyButton value={value} message="Copied secret!" />
            </Row>
        </Column>
    );
}
