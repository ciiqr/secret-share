import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    height: 200px;
    resize: none;

    :after {
        content: "blah"
    }
`;

const TallButton = styled.button`
    height: 42px;
`;

const WideButton = styled(TallButton)`
    width: 54px;
`;

const FlexRowSpaceBetween = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

const ViewButton = ({ visible, onClick }: { visible: boolean, onClick: (a: object) => void }) => (
    <WideButton
        onClick={onClick}
        className={`fa ${visible ? 'fa-eye-slash' : 'fa-eye'}`}
    />
);

const CopyButton = ({ value }: { value: string }) => (
    <TallButton
        className="fa fa-copy"
        onClick={() => navigator.clipboard.writeText(value)}
    />
);

const ObscurableTextArea = ({ value, visible }: { value: string, visible: boolean }) => (
    <StyledTextArea readOnly value ={visible ? value : "***"} />
);

const SecretTextArea = ({ value }: { value: string }) => {
    const [secretVisible, setSecretVisible] = useState(false);

    return (
        <Fragment>
            <ObscurableTextArea value={value} visible={secretVisible} />
            <FlexRowSpaceBetween>
                <ViewButton
                    visible={secretVisible}
                    onClick={event => setSecretVisible(!secretVisible)}
                />
                <CopyButton value={value} />
            </FlexRowSpaceBetween>
        </Fragment>
    );
};

export default SecretTextArea;
