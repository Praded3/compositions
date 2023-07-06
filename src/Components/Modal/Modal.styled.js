import styled from '@emotion/styled';

export const Backdrop = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80vh;
    height: 80vh;
    background-color: ${props=> props.theme.colors.whiteColor};
    transform: translate(-50%, -50%);
    border-radius: 3px;
` 
