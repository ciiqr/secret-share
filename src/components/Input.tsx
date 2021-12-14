import styled from 'styled-components';

const Input = styled.input((props) => ({
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: '8px 16px',
    lineHeight: '1.5',
    width: '100%',

    borderColor: props.theme.input?.borderColor,
    color: props.theme.input?.color,
    '&[readonly]': {
        color: props.theme.input?.readonly?.color,
    },
    ':focus': {
        borderColor: props.theme.input?.focus?.borderColor,
        boxShadow: props.theme.common?.focus?.boxShadow,
    },
    ':hover': {
        backgroundColor: props.theme.input?.hover?.backgroundColor,
    },
}));

export default Input;
