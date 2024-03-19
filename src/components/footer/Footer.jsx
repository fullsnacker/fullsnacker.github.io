import './footer.css';
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">Fullsnacker</h1>
				{/* <ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							Sobre mí
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Portfolio
						</a>
					</li>
					<li>
						<a href="#testimonials" className="footer__link">
							Testimonials
						</a>
					</li>
				</ul> */}
				<div className="footer__social">
					<a
						href="https://github.com/fullsnacker"
						className="home__social-icon"
						target="_blank"
						rel="noreferrer"
					>
						<FiGithub />
					</a>
					<a
						href="https://www.instagram.com/fullsnacker/"
						className="home__social-icon"
						target="_blank"
						rel="noreferrer"
					>
						<FiInstagram />
					</a>
					<a
						href="https://www.linkedin.com/in/fullsnacker/"
						className="home__social-icon"
						target="_blank"
						rel="noreferrer"
					>
						<FiLinkedin />
					</a>
				</div>
				<span className="footer__copy"></span>
			</div>
		</footer>
	);
};
