import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import Expenses from './Expenses';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <Router >
    <Switch>
      <Route exact path="/" >
        <App />
      </Route>
      <Route exact path="/expenses" render={() => {
        return <Expenses />
      }} />
    </Switch>
  </Router >,
  document.getElementById('root')
);
