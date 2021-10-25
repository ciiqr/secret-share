import styled from 'styled-components';
import { Row, ShareCopyButton } from 'components';

const ReadOnlyInput = styled.input.attrs(props => ({
    readOnly: true,
    type: 'text',
}))({});

const FlexRow = styled(Row)({
    gap: 4,
});

export default function ShareCopyableField({ value }: { value: string }) {
    return (
        <FlexRow>
            <ReadOnlyInput value={value} />
            <ShareCopyButton value={value} />
        </FlexRow>
    );
}
