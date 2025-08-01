import { HiCheckBadge } from 'react-icons/hi2';

export const Backend = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Backend</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Node.js</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Nest.js</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">MongoDB</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">MySQL</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Express.js</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Git</h3>
							<span className="skills__level">Avanzado</span>
			
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Linux</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Go</h3>
							<span className="skills__level">Basico</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
