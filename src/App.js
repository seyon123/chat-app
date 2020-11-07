import React from 'react';
import Header from './components/Header'
import "./App.css";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
	
	return (
		<div className="App">
			<div className="appBody">
				<Router>
					<Switch>
						<Route path="/">
							<Chat/>
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
