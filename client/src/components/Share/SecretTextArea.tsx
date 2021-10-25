import { faCopy, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row } from 'components';
import React, { useState } from 'react';
import Column from 'components/Column';
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

const FlexRowSpaceBetween = styled(Row)({
    justifyContent: 'space-between',
});

const ViewButton = ({ visible, onClick }: { visible: boolean, onClick: (a: object) => void }) => (
    <Button onClick={onClick}>
        <FontAwesomeIcon fixedWidth icon={visible ? faEyeSlash : faEye} />
    </Button>
);

// TODO: separate component
const CopyButton = ({ value }: { value: string }) => (
    <Button onClick={() => navigator.clipboard.writeText(value)}>
        <FontAwesomeIcon fixedWidth icon={faCopy} />
    </Button>
);

const ObscurableTextArea = ({ value, visible }: { value: string, visible: boolean }) => (
    <TextArea readOnly value={visible ? value : '***'} />
);

const FlexColumn = styled(Column)({
    gap: 4,
});

export default function ShareSecretTextArea({ className, value }: { className?: string, value: string }) {
    const [secretVisible, setSecretVisible] = useState(false);

    return (
        <FlexColumn className={className}>
            <ObscurableTextArea value={value} visible={secretVisible} />
            <FlexRowSpaceBetween>
                <ViewButton
                    visible={secretVisible}
                    onClick={event => setSecretVisible(!secretVisible)}
                />
                <CopyButton value={value} />
            </FlexRowSpaceBetween>
        </FlexColumn>
    );
}
