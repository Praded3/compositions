import styled from "@emotion/styled";

export const FormTextarea = styled.textarea`
    display: flex;
    border: ${props => `2px solid ${props.theme.colors.accentColor}`};
    background-color: ${props => props.color};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

`
export const FormBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${props => props.theme.fontWidth.ww};
    font-size: ${props => props.theme.spacing(5)};
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.color};
    
`