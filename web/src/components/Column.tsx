import styled from 'styled-components';
import { CSSProperties } from 'react';

type ColumnProps = {
    // TODO: why isn't CSSProperties strict?
    justifyContent?: CSSProperties["justifyContent"],
    gap?: CSSProperties["gap"],
};

const Column = styled.div<ColumnProps>(props => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: props.justifyContent,
    gap: props.gap,
}));

export default Column;
