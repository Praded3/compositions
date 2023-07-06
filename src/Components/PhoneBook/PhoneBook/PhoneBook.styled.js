import styled from "@emotion/styled";

export const FormInput= styled.input`
    display: flex;
    border: ${props => `2px solid ${props.theme.colors.accentColor}`};
    background-color: ${props => props.color};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

`
export const Title =  styled.h2`
    display: flex;
    flex-direction: column;
    text-align: center;
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