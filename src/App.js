import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './page-components/Home';

function App() {
	return (

		<Router>
			<div>

				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">

					</Route>
					<Route path="/users">

					</Route>
				</Switch>
			</div>
		</Router>

	);
}

export default App;
