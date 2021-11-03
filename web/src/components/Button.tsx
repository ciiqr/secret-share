import styled from "styled-components";

const Button = styled.button(props => ({
    height: 42,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4, // TODO: theme
    backgroundColor: props.theme.button?.backgroundColor,
    borderColor: props.theme.button?.borderColor,
    color: props.theme.button?.color,
    ":focus": {
        boxShadow: props.theme.common?.focus?.boxShadow,
    },
    // TODO: maybe just this but in themes
    ":hover": {
        filter: 'brightness(115%)',
    },
    ":not(:disabled):active": {
        filter: 'brightness(130%)',
    },
    // ":hover": {
    //     filter: 'brightness(85%)',
    // },
    // ":not(:disabled):active": {
    //     filter: 'brightness(70%)',
    // },
}));

export default Button;
