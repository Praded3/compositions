import React  from 'react';
import { HeaderTag, Logo } from "./Header.styled";
import { PageContainer } from "../../Container/Container";
import { Nav } from "../Nav/Nav";
import { ImHome } from "react-icons/im";
import {Buttons} from '../Buttons/Buttons'

export const Header = ( {children}) => {
    return (
        <HeaderTag>
            <PageContainer>
                <Logo rel="noopener no-referrel nofollow"
                            href="#">
                    <ImHome/>
                </Logo>
                <Nav>
                </Nav>
                <Buttons/>
            </PageContainer>
        </HeaderTag>
    );

};
