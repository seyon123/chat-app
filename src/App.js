import React, { useEffect } from 'react';
import Header from './components/Header'
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function App() {
	// eslint-disable-next-line
	const [{user}, dispatch] = useStateValue();

	useEffect(() => {
		const btnToggle = document.querySelector("#modeToggle i");
		const hamburger = document.querySelector(".hamburger");
		const rooms = document.querySelector("#rooms");
        const theme = localStorage.getItem("theme");

        if (theme === "light") {
            btnToggle.classList.add("fa-sun");
            btnToggle.style.padding = "4px 3.8px";
            btnToggle.classList.remove("fa-moon");
			document.querySelector("body").classList.add(theme);
		}
		
		hamburger.addEventListener("click", () => {
			if (rooms.classList.contains("open")) {
				rooms.classList.remove("open");
				rooms.classList.add("close");
			} else {
				rooms.classList.remove("close");
				rooms.classList.add("open");
			}
		});

        btnToggle.addEventListener("click", () => {
            if (btnToggle.classList.contains("fa-moon")) {
                btnToggle.classList.add("fa-sun");
                btnToggle.style.padding = "4px 3.8px";
                btnToggle.classList.remove("fa-moon");
                localStorage.setItem("theme", "light");
            } else {
                btnToggle.classList.add("fa-moon");
                btnToggle.classList.remove("fa-sun");
                btnToggle.style.padding = "4px 5px";
                localStorage.clear();
            }
            document.querySelector("body").classList.toggle("light");
        });
	}, [user])
	
	return (
		<div className="App">
			{!user ? 
				<>
					<Header/>
					<Login/>
				</>
			: 
			<div className="appBody">
				<Router>
					<Switch>
						<Route exact path="/">
							<Header/>
							<Chat/>
						</Route>
						<Route exact path="/chat/:id" >
							<Header/>
							<Chat/>
						</Route>
						<Route><Redirect to="/"/></Route>
					</Switch>
				</Router>
			</div>
			}
		</div>
	);
}

export default App;
