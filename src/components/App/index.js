import "./index.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GamePage from "../GamePage";
import Homepage from "../Homepage";

function App() {
  const [userName, setUserName] = useState("Anonymous");
  const [balance, setBalance] = useState(3000);
  return (
    <Router>
        <nav className='navBar'>
        <div className="displayName">
          <p>{userName}</p>
          <p>{balance}</p>
        </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blackjack">Blackjack</Link>
            </li>
          </ul>
        </nav>
      <div className='container'>
      <Switch>
        <Route path="/blackjack">
          <GamePage balance={balance} setBalance={setBalance} />
        </Route>
        <Route path="/">
          <Homepage
            setUserName={setUserName}
            setBalance={setBalance}
            balance={balance}
          />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
