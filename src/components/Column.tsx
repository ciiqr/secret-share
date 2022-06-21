import type { CSSProperties } from "react";
import styled from "styled-components";

interface ColumnProps {
    // TODO: why isn't CSSProperties strict?
    justifyContent?: CSSProperties["justifyContent"];
    gap?: CSSProperties["gap"];
}

const Column = styled.div<ColumnProps>((props) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: props.justifyContent,
    gap: props.gap ?? props.theme.spacing?.default,
}));

export default Column;
