import "./index.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GamePage from "../GamePage";
import Homepage from "../Homepage";

function App() {
  const [userName, setUserName] = useState("");
  const [balance, setBalance] = useState(0);
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <GamePage user={userName} balance={balance} />
        </Route>
        <Route path="/">
          <Homepage setUserName={setUserName} setBalance={setBalance} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
