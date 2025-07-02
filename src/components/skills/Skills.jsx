import './skills.css';
import { Frontend } from './Frontend';
import { Backend } from './Backend';
import { Languages } from './Languages';
import { DevOps } from './DevOps';

export const Skills = () => {
	return (
		<section className="skills section" id="skills">
			<h2 className="section__title">Habilidades</h2>
			<span className="section__subtitle">Nivel Técnico</span>
			<div className="skills__container container grid">
				<Frontend />			
				<Backend />
				<DevOps />
				<Languages />
			</div>
		</section>
	);
};
