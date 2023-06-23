import React  from 'react';
import { BtnList, BtnItem, RegBtn, SubBtn } from './Buttons.styled'

export const Buttons = ({ children }) => {
    return (

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

    );
} 
