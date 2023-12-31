import React  from 'react';
import { Container } from "./Container.styled";

export const PageContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
};
