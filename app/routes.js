/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Giphy from './components/giphy';
import Meme from './components/Meme';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/giphy" component={GiphyPage} />
      <Route path="/meme" component={Meme} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
