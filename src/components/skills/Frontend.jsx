import { HiCheckBadge } from 'react-icons/hi2';

export const Frontend = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Frontend</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">HTML/CSS</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Typescript</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Tailwind</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Chakra UI</h3>
							<span className="skills__level">Basico</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">JavaScript</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">React.js</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Next.js</h3>
							<span className="skills__level">Intermedio</span>
					
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Sass</h3>
							<span className="skills__level">Basico</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
