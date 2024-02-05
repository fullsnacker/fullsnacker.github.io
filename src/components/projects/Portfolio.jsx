import { Projects } from './Projects';
import './projects.css';

export const Portfolio = () => {
	return (
		<section className="portfolio section" id="portfolio">
			<h2 className="section__title">Portfolio</h2>
			<span className="section__subtitle">Recent Projects</span>

			<Projects />
		</section>
	);
};
