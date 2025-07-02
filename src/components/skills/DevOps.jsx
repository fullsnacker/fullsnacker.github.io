import { HiCheckBadge } from 'react-icons/hi2';

export const DevOps = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">DevOps</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Docker</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">AWS</h3>
							<span className="skills__level">Intermedio</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Kubernetes</h3>
							<span className="skills__level">Avanzado</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
