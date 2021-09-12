import { Link } from "react-router-dom";

export default function HomePage({ setUserName, setBalance }) {
  let userName;
  let balance;
  function userNameChange(e) {
    userName = e.target.value;
  }
  function balanceChange(e) {
    balance = e.target.value;
  }
  function handlePlayClick() {
    setUserName(userName);
    setBalance(balance);
  }
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={userNameChange}
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
        onChange={balanceChange}
        required
      />
      <button onClick={handlePlayClick}>
        <Link to="/game">Play</Link>
      </button>
    </div>
  );
}
