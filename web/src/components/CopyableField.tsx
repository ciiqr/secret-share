import styled from 'styled-components';
import { Row, CopyButton, Input } from 'components';

const ReadOnlyInput = styled(Input).attrs({
    readOnly: true,
    type: 'text',
})({});

type CopyableFieldProps = {
    value: string
    message?: string
};

export default function CopyableField({ value, message }: CopyableFieldProps) {
    return (
        <Row>
            <ReadOnlyInput value={value} />
            <CopyButton value={value} message={message} />
        </Row>
    );
}
