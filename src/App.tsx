import React from 'react';
import './App.css' 
import { Layout } from 'antd'
import Header from 'components/header/Header'
import { ThemeProvider } from 'react-jss'
import Themes from './ColorThemes'

function App() {
  return (
  <>
    <ThemeProvider theme={Themes[0]}>
      <Layout>
          <Header />
      </Layout>
    </ThemeProvider>
  </>
  );
}

export default App;
