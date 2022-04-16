import styled from "styled-components";
import { Row } from "components";

const Layout = styled(Row)((props) => ({
    padding: props.theme.spacing?.default,
    justifyContent: "space-around",
}));

export default Layout;
