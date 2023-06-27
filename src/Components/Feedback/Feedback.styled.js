import styled from '@emotion/styled';

export const FeebackContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: ${props => props.theme.spacing(4)};
border: ${props => `2px solid ${props.theme.colors.accentColor}`};
border-radius: ${props => props.theme.spacing(4)};
`
export const Total = styled.span`
    text-align: center;
    font-size:  ${props => props.theme.spacing(6)};
    font-weight:  ${props=> props.theme.fontWidth.ww};
    color: ${props=> props.theme.colors.primeryTextColor};
`
export const ControlsContainer = styled.div`
    display: flex;
    gap: 20px;
`
export const ThumbUp = styled.button`
    display: flex;
    svg{
        color: green;
        width: 30px;
        height: 30px;
    }
`
export const ThumbDown = styled.button`
    display: flex;
     svg{
        width: 30px;
        height: 30px;
        color: red;
    }
`

