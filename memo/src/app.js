import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from 'pages/intro';
import * as BasicExample from 'pages/basic-example';
import * as Pitfalls from 'pages/pitfalls';
import * as Hooks from 'pages/hooks';
import * as Arrays from 'pages/arrays';
import * as Tricks from 'pages/tricks';

const App = () => (
	<div style={{ margin: '1em' }}>
		<Router>
			<Route exact path='/' component={ Intro } />
			<Route path='/basic-problem' component={ BasicExample.Problem } />
			<Route path='/basic-soln' component={ BasicExample.Soln } />
			<Route path='/pitfall-problem' component={ Pitfalls.Problem } />
			<Route path='/pitfall-soln' component={ Pitfalls.Soln } />
			<Route path='/hooks' component={ Hooks.Hooks } />
			<Route path='/arrays-problem' component={ Arrays.Problem } />
			<Route path='/arrays-soln' component={ Arrays.Soln } />
			<Route path='/tricks-problem' component={ Tricks.Problem } />
			<Route path='/tricks-soln' component={ Tricks.Soln } />
		</Router>
	</div>
);

export default App;
