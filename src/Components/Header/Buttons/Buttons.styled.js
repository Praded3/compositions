import styled from '@emotion/styled';

// export const BtnContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// `
export const BtnList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const BtnItem = styled.li`
    display: flex;
`

export const RegBtn = styled.button`
  padding: ${props => props.theme.spacing(4)};
  border: ${props => ` 21px solid ${props.theme.colors.accentColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>{return theme.colors.primeryBgc}};
  color: ${({theme})=>{return theme.colors.accentColor}};
`

export const SubBtn = styled.button`
  padding: 20px;
  border: 2px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=> props.theme.colors.primeryTextColor};
  color:orange ;
  font-weight:  ${props=> props.theme.fontWidth.ww};
`
