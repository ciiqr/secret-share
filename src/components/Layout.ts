import styled from "styled-components";
import { Row } from "components";

export const Layout = styled(Row)((props) => ({
    padding: props.theme.spacing?.default,
    justifyContent: "space-around",
}));
