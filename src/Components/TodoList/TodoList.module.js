import styled from '@emotion/styled';

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
   
`    
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const TodoItem = styled.li`
    display: flex;
    gap: ${props => props.theme.spacing(5)};
`
export const TodoText = styled.p`
    display: flex;
    font-weight: ${props => props.theme.fontWidth.ww};
    font-size: ${props => props.theme.spacing(2)};
    color: ${props => props.theme.colors.primeryTextColor};
`
export const TodoBtn = styled.button`
    display: flex;
    font-weight:  ${props => props.theme.fontWidth.ww};
    font-size: ${props => props.theme.spacing(5)};
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.color};
    :hover{
        background-color:  ${props => props.theme.colors.primeryBgc};
        color: ${props => props.theme.colors.accentColor};
    }
`
export const FormInput = styled.input`
`
