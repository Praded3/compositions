import {BtnContainer, BtnList, BtnItem,  RegBtn, SubBtn } from './Buttons.styled'

export const Buttons = ({ children }) => {
    return (

        <BtnContainer>
            <BtnList>
                <BtnItem>
                    <RegBtn>
                        Реєстрація
                    </RegBtn>
                </BtnItem>
                <BtnItem>
                    <SubBtn>
                        Особіистий кабінет
                    </SubBtn>
                </BtnItem>
            </BtnList>

        </BtnContainer>
    );
} 
