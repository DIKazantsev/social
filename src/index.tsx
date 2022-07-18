import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './Layout/App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import configureStore from './store/store';

const store = configureStore()



ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Switch>
        <Route exact path="/" render={() => {
          return <App />
        }} />
      </Switch>
    </Router >
  </Provider>,
  document.getElementById('root')
);
