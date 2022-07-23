import type { CSSProperties } from "react";
import styled from "styled-components";

interface RowProps {
    // TODO: why isn't CSSProperties strict?
    justifyContent?: CSSProperties["justifyContent"];
    gap?: CSSProperties["gap"];
}

export const Row = styled.div<RowProps>((props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justifyContent,
    gap: props.gap ?? props.theme.spacing?.default,
}));
