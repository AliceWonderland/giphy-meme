/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import GiphyPage from './containers/GiphyPage';
import MemePage from './containers/MemePage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/giphy" component={GiphyPage} />
      <Route path="/meme/:memeId" component={MemePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
