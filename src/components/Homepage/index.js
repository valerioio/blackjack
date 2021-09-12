export default function HomePage({ setUserName, setBalance }) {
	function userNameChange(e) {
		console.log(e.target.value);
		setUserName(e.target.value);
	}
	function balanceChange(e) {
		console.log(e.target.value);
		setBalance(e.target.value);
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
		</div>
	);
}
