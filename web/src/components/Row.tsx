import styled from 'styled-components';
import { CSSProperties } from 'react';

type RowProps = {
    // TODO: why isn't CSSProperties strict?
    justifyContent?: CSSProperties["justifyContent"],
    gap?: CSSProperties["gap"],
};

const Row = styled.div<RowProps>(props => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: props.justifyContent,
    gap: props.gap,
}));

export default Row;
