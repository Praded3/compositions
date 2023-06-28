import styled from '@emotion/styled';

export const ColorsContsiner = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
   
`    
export const ColorsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const ColorItem = styled.li`
    display: flex;
`
export const ColorBtn = styled.button`
    display: flex;
    font-weight: ${props => props.theme.fontWidth.ww};
    font-size: ${props => props.theme.spacing(5)};
    padding: ${props => props.theme.spacing(5)};
    background-color: ${props => props.color};
`
export const ColorTitle = styled.h3`
    display: flex;
    color:  ${props=> props.theme.colors.primeryTextColor};
`
