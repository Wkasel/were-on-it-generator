import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Build } from '../Build';
import { Share } from '../Share';
import { View } from '../View';

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Build} />
        <Route path="/share" component={Share} />
        <Route path="/view" component={View} />
      </Switch>
    </Container>
  </main>
);

export { Main };
