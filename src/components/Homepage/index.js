import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export default function HomePage({ setUserName, setBalance, balance }) {
	let [isDisabled, setDisabled] = useState(true);
	function handleBalanceAndDisabled(e) {
		if (+e.target.value >= 500 && +e.target.value <= 10000 && isDisabled) {
			setDisabled(false);
		} else if ((+e.target.value < 500 || +e.target.value > 10000) && !isDisabled) {
			setDisabled(true);
		}
		// console.log(balance);
		setBalance(+e.target.value);
	}
	function handelNameChange(e) {
		setUserName(e.target.value);
		if (e.target.value === '') {
			setUserName('Anonymous');
		}
	}
	return (
		<div className="mainForm">
			<label htmlFor="username">Username:</label>
			<input
				type="text"
				placeholder="Enter your name"
				onChange={handelNameChange}
				name="username"
				required
				defaultValue="Anonymous"
			/>

			<label htmlFor="balance"> Balance: </label>
			<input
				type="number"
				name="balance"
				min="500"
				max="10000"
				step="100"
				onChange={handleBalanceAndDisabled}
				defaultValue="3000"
				required
			/>

			{isDisabled ? (
				<button className="minimum">Over 500 and less 10.000</button>
			) : (
				<Link to="/game">
					<button className="playButton">Play</button>
				</Link>
			)}
		</div>
	);
}
