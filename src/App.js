import React  from 'react';
import { Header } from './Components/Header/Header/Header';
import {PageSection} from './Components/Section/Section'
import { PageContainer } from './Components/Container/Container'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Components/Constants/index';
import {Feedback } from './Components/Feedback/Feedback'
import {Dropdown } from './Components/Dropdown/Dropdowm'
export const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        {/* Feedback */}
        <PageSection>
          <PageContainer>
            <Feedback initialValue={10} />
          </PageContainer>
        </PageSection>
        {/* Dropdown */}
        <PageSection>
          <PageContainer>
            <Dropdown/>
          </PageContainer>
        </PageSection>
      </ThemeProvider>
    </React.Fragment>
  );
};
 