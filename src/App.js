import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import { Header, Main, Footer } from './containers/common';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.gold ? '#f0c174' : 'white')};
    a {
      color: #222;
      text-decoration: underline;
    }
  }
`;

const App = () => (
  <>
    <GlobalStyle gold />
    <Router>
      <Header />
      <Container>
        <Main />
      </Container>
    </Router>
    <Footer />
  </>
);

export default App;
