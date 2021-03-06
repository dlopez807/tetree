var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var App = require('../components/App');
var Home = require('../components/Home');
var Tetree = require('../components/Tetree');
var City = require('../components/City');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path=':city' component={City}>
			</Route>
			<Route path=':city/:territoryNumber' component={Tetree}>
			</Route>
		</Route>
	</Router>
);

module.exports = routes;