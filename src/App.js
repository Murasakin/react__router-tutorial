import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page-components/Home';
import About from './page-components/About';
import Users from './page-components/Users';
import Header from './components/Header';

import './App.css'


function App() {
	return (

		<Router>
			<div>

				<Header />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
				</Switch>

			</div>
		</Router>

	);
}

export default App;
