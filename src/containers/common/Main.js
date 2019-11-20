import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Share } from '../Share';
import { View } from '../View';
import { About } from '../About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/share" component={Share} />
      <Route path="/create" component={View} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export { Main };
