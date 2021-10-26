import styled from 'styled-components';
import { Row, ShareCopyButton } from 'components';

const ReadOnlyInput = styled.input.attrs(props => ({
    readOnly: true,
    type: 'text',
}))({});

const FlexRow = styled(Row)({
    gap: 4,
});

type ShareCopyableFieldProps = {
    value: string
    copyMessage?: string
};

export default function ShareCopyableField({ value, copyMessage }: ShareCopyableFieldProps) {
    return (
        <FlexRow>
            <ReadOnlyInput value={value} />
            <ShareCopyButton value={value} message={copyMessage} />
        </FlexRow>
    );
}
