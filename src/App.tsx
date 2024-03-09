import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import { theme } from './components/theme';
import { Hero } from './components/Hero';
import { Form } from './components/Form';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <NavBar />
      <Hero /> */}
      <Form />
    </ThemeProvider>
  );
}

export default App;
