import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import createHashHistory from 'history/lib/createHashHistory';
import Layout from './components/Layout';
import Home from  './components/Home';
import About from  './components/About';
import Win from  './components/Win';


const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="win" component={Win} />
  </Route>
);

// Opt-out of persistent state, not recommended.
let history = createHashHistory({
  queryKey: false
});

export default class PeriusRouter extends React.Component {
  render() {
    return <Router routes={routes} history={history} />;
  }
}
