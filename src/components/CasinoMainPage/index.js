import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CasinoMainPage() {
	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img
					variant="top"
					src="https://upload.wikimedia.org/wikipedia/commons/3/33/Blackjack21.jpg"
				/>
				<Card.Body>
					<Card.Title>BlackJack</Card.Title>
					<Card.Text>Play your favorite game in here</Card.Text>
					<Link to="/blackjack">
						<Button variant="primary">Play Blackjack</Button>
					</Link>
				</Card.Body>
			</Card>
			<Card style={{ width: '18rem' }}>
				<Card.Img
					variant="top"
					src="https://upload.wikimedia.org/wikipedia/commons/3/33/Blackjack21.jpg"
				/>
				<Card.Body>
					<Card.Title>BlackJack</Card.Title>
					<Card.Text>Play your favorite game in here</Card.Text>
					<Link to="/blackjack">
						<Button variant="primary">Play Blackjack</Button>
					</Link>
				</Card.Body>
			</Card>
		</>
	);
}
