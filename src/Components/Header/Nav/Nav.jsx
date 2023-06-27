import React  from 'react';
import { NavTag, NavList, NavItem, NavLink } from "./Nav.styled";

export const Nav = ( ) => {
    return (
        <NavTag>
            <NavList>
                <NavItem>
                    <NavLink rel="noopener no-referrel nofollow"
                            href="#services">
                        Автори
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink rel="noopener no-referrel nofollow"
                            href="#services">
                        Твори
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink rel="noopener no-referrel nofollow"
                            href="#services">
                        Нові
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink rel="noopener no-referrel nofollow"
                            href="#services">
                        Про спільноту
                    </NavLink>
                </NavItem>
            </NavList>
        </NavTag>
         
    );

};
 
