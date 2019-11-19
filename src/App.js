import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Main } from './components/common';

const App = () => (
  <Router>
    <Header />
    <Main />
  </Router>
);

export default App;
