import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './chat.css';
const API_KEY = import.meta.env.VITE_APP_COHERE_API_KEY;

export const Chat = ({ examples, answers, initialMessage }) => {
	const [messages, setMessages] = useState([
		{
			id: '1',
			type: 'bot',
			text: initialMessage
		}
	]);
	const [question, setQuestion] = useState('');
	const [isLoading, toggleLoading] = useState(false);
	const [isCollapsed, toggleCollapsed] = useState(true);
	const container = useRef(null);

	async function handleSubmit(event) {
		event.preventDefault();

		if (isLoading) return;

		toggleLoading(true);

		setMessages((messages) =>
			messages.concat({ id: String(Date.now()), type: 'user', text: question })
		);

		setQuestion('');

		const { classifications } = await fetch(
			'https://api.cohere.ai/v1/classify',
			{
				method: 'POST',
				headers: {
					Authorization: `BEARER ${API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					model: 'large',
					inputs: [question],
					examples: examples
				})
			}
		).then((res) => res.json());

		setMessages((messages) =>
			messages.concat({
				id: String(Date.now()),
				type: 'bot',
				text: answers[classifications[0].prediction.trim()] || answers['info']
			})
		);

		toggleLoading(false);
	}

	useEffect(() => {
		container.current?.scrollTo(0, container.current.scrollHeight);
	}, [messages, isCollapsed]);

	return createPortal(
		<div className="out-body">
			{isCollapsed ? (
				<button
					className="collapse-button"
					onClick={() => toggleCollapsed(false)}
				>
					?
				</button>
			) : (
				<div className="button-relative">
					<button
						className="collapse-button"
						onClick={() => toggleCollapsed(true)}
					>
						×
					</button>
					<div className="chat-border">
						<div ref={container} className="chat-container">
							{messages.map((message) => (
								<div
									key={message.id}
									className={`message-general
							${message.type === 'bot' ? 'bot-message' : 'user-message'}`}
								>
									{message.text}
								</div>
							))}
						</div>
						<form className="chat-form" onSubmit={handleSubmit}>
							<input
								value={question}
								onChange={(event) => {
									setQuestion(event.target.value);
								}}
								placeholder="Quien sos?"
								className="chat-placeholder"
								type="text"
								name="question"
							/>
							<button
								disabled={isLoading}
								className={`chat-submit-button ${
									isLoading ? 'bg-blue-300' : 'bg-blue-500'
								}`}
								type="submit"
							>
								Enviar
							</button>
						</form>
					</div>
				</div>
			)}
		</div>,
		document.getElementById('chat')
	);
};
