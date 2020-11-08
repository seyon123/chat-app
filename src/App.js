import React from 'react';
import Header from './components/Header'
import "./App.css";
import Chat from "./components/Chat";
import Rooms from "./components/Rooms";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


function App() {
	
	return (
		<div className="App">
			<div className="appBody">
				<Router>
					<Switch>
						<Route exact path="/">
							<Header/>
							<Chat/>
						</Route>
						<Route exact path="/rooms">
							<Header/>
							<Rooms/>
						</Route>
						<Route exact path="/chat/:id" render={props => <Chat key={props.match.params.id} id={props.match.params.id} />}></Route>
						<Route><Redirect to="/"/></Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
