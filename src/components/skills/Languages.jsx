import { HiCheckBadge } from 'react-icons/hi2';

export const Languages = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Idiomas</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Español</h3>
							<span className="skills__level">Nativo</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Japonés</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Inglés</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
