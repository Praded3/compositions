import styled from '@emotion/styled';

export const TabsContsiner = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
   
`    
export const TabsList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const TabItem = styled.li`
    display: flex;
`
export const TabBtn = styled.button`
    display: flex;
    font-weight: ${props => props.theme.fontWidth.ww};
    font-size: ${props => props.theme.spacing(5)};
    padding: ${props => props.theme.spacing(5)};
  `
export const TabTitle = styled.h3`
    display: flex;
    color:  ${props=> props.theme.colors.primeryTextColor};
`
export const TabContent = styled.div`
    display: flex;
    flex-direction: column;
 `

export const ActiveTab = styled.div`
    display: flex;
    flex-direction: column;
    background-color:  ${props=> props.theme.colors.primeryBgc};
`