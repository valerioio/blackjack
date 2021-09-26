import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Blackjack from '../Blackjack';
import Homepage from '../Homepage';
import CasinoMainPage from '../CasinoMainPage';

function App() {
	const [userName, setUserName] = useState('Anonymous');
	const [balance, setBalance] = useState(3000);
	return (
		<Router>
			<nav className="navBar">
				<div className="displayName">
					<p>{userName}</p>
					<p> £{balance}</p>
				</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/casinoMainPage">Casino Lobby</Link>
					</li>
				</ul>
			</nav>
			<div className="container">
				<Switch>
					<Route path="/blackjack">
						<Blackjack balance={balance} setBalance={setBalance} />
					</Route>
					<Route path="/casinoMainPage">
						<CasinoMainPage />
					</Route>
					<Route path="/">
						<Homepage
							setUserName={setUserName}
							setBalance={setBalance}
							balance={balance}
							userName={userName}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
