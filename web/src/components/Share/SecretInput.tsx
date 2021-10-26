import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Column, Button, Row, ShareCopyButton } from 'components';
import styled from 'styled-components';

const TextArea = styled.textarea({
    height: 200,
    resize: 'none',
    // TODO: url field needs this too
    // TODO: need a dark move color
    ":hover": {
        backgroundColor: '#F7F7F7',
    },
});

const FlexRow = styled(Row)({
    justifyContent: 'space-between',
});

const FlexColumn = styled(Column)({
    gap: 4,
});

const ViewButton = ({ visible, onClick }: { visible: boolean, onClick: (a: object) => void }) => (
    <Button onClick={onClick}>
        <FontAwesomeIcon fixedWidth icon={visible ? faEyeSlash : faEye} />
    </Button>
);

const ObscurableTextArea = ({ value, visible }: { value: string, visible: boolean }) => (
    <TextArea readOnly value={visible ? value : '***'} />
);

export default function ShareSecretInput({ className, value }: { className?: string, value: string }) {
    const [secretVisible, setSecretVisible] = useState(false);

    return (
        <FlexColumn className={className}>
            <ObscurableTextArea value={value} visible={secretVisible} />
            <FlexRow>
                <ViewButton
                    visible={secretVisible}
                    onClick={event => setSecretVisible(!secretVisible)}
                />
                <ShareCopyButton value={value} message="Copied secret!" />
            </FlexRow>
        </FlexColumn>
    );
}
