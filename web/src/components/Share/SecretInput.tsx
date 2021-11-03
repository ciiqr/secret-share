import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Column, Button, Row, ShareCopyButton } from 'components';
import TextArea from 'components/TextArea'; // TODO: why is this sometimes undefined when included through the index...
import styled from 'styled-components';

const StyledTextArea = styled(TextArea)({
    height: 200,
    resize: 'none',
});

// TODO: move
type ViewButtonProps = {
    visible: boolean
    onClick: (a: object) => void
};

const ViewButton = ({ visible, onClick }: ViewButtonProps) => (
    <Button onClick={onClick}>
        <FontAwesomeIcon fixedWidth icon={visible ? faEyeSlash : faEye} />
    </Button>
);

type ShareSecretInputProps = {
    className?: string
    value: string
};

export default function ShareSecretInput({ className, value }: ShareSecretInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <Column className={className}>
            <StyledTextArea readOnly value={visible ? value : '***'} />
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
