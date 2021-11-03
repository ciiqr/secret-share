import styled from 'styled-components';
import { Row, ShareCopyButton, Input } from 'components';

const ReadOnlyInput = styled(Input).attrs({
    readOnly: true,
    type: 'text',
})({});

type ShareCopyableFieldProps = {
    value: string
    copyMessage?: string
};

export default function ShareCopyableField({ value, copyMessage }: ShareCopyableFieldProps) {
    return (
        <Row>
            <ReadOnlyInput value={value} />
            <ShareCopyButton value={value} message={copyMessage} />
        </Row>
    );
}
