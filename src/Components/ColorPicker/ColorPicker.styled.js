import styled from '@emotion/styled';

export const ColorsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const ColorItem = styled.li`
    display: flex;
`
export const ColorBtn = styled.button`
    display: flex;
    background-color: ${props=> props.color};
    padding:${props => `21px solid ${props.theme.colors.accentColor}`};
`

export const ColorTitle = styled.h3`
    display: flex;
    color:  ${props=> props.theme.colors.primeryTextColor};
`
