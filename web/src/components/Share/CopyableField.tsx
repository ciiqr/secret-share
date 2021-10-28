import styled from 'styled-components';
import { Row, ShareCopyButton } from 'components';

const ReadOnlyInput = styled.input.attrs(props => ({
    readOnly: true,
    type: 'text',
}))({});

type ShareCopyableFieldProps = {
    value: string
    copyMessage?: string
};

export default function ShareCopyableField({ value, copyMessage }: ShareCopyableFieldProps) {
    return (
        <Row gap={4}>
            <ReadOnlyInput value={value} />
            <ShareCopyButton value={value} message={copyMessage} />
        </Row>
    );
}
