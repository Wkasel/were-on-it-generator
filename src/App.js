import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Main } from './containers/common';

const App = () => (
  <Router>
    <Header />
    <Main />
  </Router>
);

export default App;
