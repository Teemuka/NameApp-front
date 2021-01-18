import React from 'react';
import './App.css' 
import { Layout } from 'antd'
import Header from 'components/header/Header'
import Content from 'components/content/Content'
import { ThemeProvider } from 'react-jss'
import Themes from './ColorThemes'
import { BrowserRouter, Redirect } from 'react-router-dom';

function App() {
  return (
  <>
    <ThemeProvider theme={Themes[0]}>
      <Layout>
        <BrowserRouter>
          <Header />
          <Content />
          <Redirect to="/names" />
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  </>

  );
}

export default App;
