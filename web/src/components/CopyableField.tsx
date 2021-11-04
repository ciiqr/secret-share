import styled from 'styled-components';
import { Row, CopyButton, Input } from 'components';

const ReadOnlyInput = styled(Input).attrs({
    readOnly: true,
    type: 'text',
})({});

type CopyableFieldProps = {
    value: string
    copyMessage?: string
};

export default function CopyableField({ value, copyMessage }: CopyableFieldProps) {
    return (
        <Row>
            <ReadOnlyInput value={value} />
            <CopyButton value={value} message={copyMessage} />
        </Row>
    );
}
