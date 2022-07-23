import { useCallback, useState } from "react";
import styled from "styled-components";
import { Column, Row, CopyButton, ViewButton } from "components";
// TODO: why is this sometimes undefined when included through the index...
import { TextArea } from "components/TextArea";

const StyledTextArea = styled(TextArea)({
    height: 200,
    resize: "none",
});

interface SecretInputProps {
    value: string;
}

export function SecretInput({ value }: SecretInputProps) {
    const [visible, setVisible] = useState(false);

    const onClickView = useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    return (
        <Column>
            <StyledTextArea
                readOnly
                value={visible || !value ? value : "***"}
            />
            <Row justifyContent="space-between">
                <ViewButton visible={visible} onClick={onClickView} />
                <CopyButton value={value} message="Copied secret!" />
            </Row>
        </Column>
    );
}
