import React  from 'react';
import { Section } from "./Sextion.styled";



export const PageSection = ( { children} ) => {
    return (
        <Section>
          {children}
        </Section>
    
    );

};
