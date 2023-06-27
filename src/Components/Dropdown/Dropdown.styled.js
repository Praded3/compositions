import styled from '@emotion/styled';

export const DropdownContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: ${props => props.theme.spacing(4)};
border: ${props => `2px solid ${props.theme.colors.accentColor}`};
border-radius: ${props => props.theme.spacing(4)};
`

export const ShowBtn = styled.button`
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    max-width: 250px;
    padding: ${props => props.theme.spacing(4)};
    border: ${props => `2px solid ${props.theme.colors.accentColor}`};

`

export const DropdownMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: ${props => props.theme.spacing(4)};
border: ${props => `2px solid ${props.theme.colors.accentColor}`};
border-radius: ${props => props.theme.spacing(4)};
`