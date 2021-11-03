import styled from "styled-components";

const Input = styled.input(props => ({
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: '8px 16px',
    lineHeight: '1.5',

    borderColor: props.theme.input?.borderColor,
    color: props.theme.input?.color,
    ":focus": {
        borderColor: props.theme.input?.focus?.borderColor,
        boxShadow: props.theme.common?.focus?.boxShadow,
    },
    "&[readonly]": {
        borderColor: props.theme.input?.readonly?.borderColor,
        color: props.theme.input?.readonly?.color,
    },
    ":hover": {
        backgroundColor: props.theme.input?.hover?.backgroundColor,
    },
}));

export default Input;
