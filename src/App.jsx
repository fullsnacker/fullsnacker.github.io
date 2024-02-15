import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Portfolio } from './components/projects/Portfolio';
import { Qualification } from './components/qualification/Qualification';
import { ScrollUp } from './components/scrollup/ScrollUp';
import { Services } from './components/services/Services';
import { Skills } from './components/skills/Skills';
import { Testimonials } from './components/testimonials/Testimonials';
import { Chat } from './components/chatbot/Chat';
import { answers, examples } from './components/chatbot';
function App() {
	const CHAT_ANSWERS = answers;
	const CHAT_EXAMPLES = examples;
	const INITIAL_MESSAGE =
		'Hola! Soy Snachat. Hazme consultas acerca de Fullsnacker';

	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Skills />
				{/* <Services /> */}
				<Qualification />
				{/* <Portfolio /> */}
				{/* <Testimonials /> */}
				<Contact />
				<Chat
					answers={CHAT_ANSWERS}
					examples={CHAT_EXAMPLES}
					initialMessage={INITIAL_MESSAGE}
				/>
			</main>
			{/* <Footer /> */}
			<ScrollUp />
		</>
	);
}

export default App;
