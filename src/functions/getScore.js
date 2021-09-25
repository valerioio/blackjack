export default function getScore(array) {
	let isSoft = false;
	return array.reduce((acc, cur) => {
		if (!isSoft && cur.value === 11 && acc < 11) isSoft = true;
		cur.value === 11 && acc > 10 ? (acc += 1) : (acc += cur.value);
		if (isSoft && acc > 21) {
			acc -= 10;
			isSoft = false;
		}
		return acc;
	}, 0);
}
