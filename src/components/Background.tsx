import styled from "styled-components";

const Background = styled.div((props) => ({
    backgroundColor: props.theme.backgroundColor,
    minHeight: "100%",
}));

export default Background;
