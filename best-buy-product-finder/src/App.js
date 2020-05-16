import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<header className='App-header'></header>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

//Map out what calls are being made in each page
//Home page with search
//Top products
//Shopping Cart Page
//CRUD stuff in shopping cart
