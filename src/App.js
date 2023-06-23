import React  from 'react';
import { Header } from './Components/Header/Header/Header';
import {PageSection} from './Components/Section/Section'
import { PageContainer } from './Components/Container/Container'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Components/Constants/index';



const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <PageSection>
          <PageContainer>
            dvdvdvdvd
          </PageContainer>
          </PageSection>
      </ThemeProvider>
    </React.Fragment>
  );
};

 

export default App;
