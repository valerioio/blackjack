import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage({ setUserName, setBalance, userName, balance }) {
  useEffect(()=>console.log(userName,balance))
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={e=>setUserName(e.target.value)}
        name="username"
        required
      />

      <label htmlFor="balance"> Balance </label>
      <input
        type="number"
        name="balance"
        min="500"
        max="10000"
        step="100"
        onChange={e=>setBalance(e.target.value)}
        required
      />
      <button>
        {/* {balance>500 ? <Link to="/game">Play</Link> : 'min 500'} */}
        <Link to="/game">Play</Link>
      </button>
    </div>
  );
}
