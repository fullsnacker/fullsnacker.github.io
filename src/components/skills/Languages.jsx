import { HiCheckBadge } from 'react-icons/hi2';

export const Languages = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Languages</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Spanish</h3>
							<span className="skills__level">Native</span>
						</div>
					</div>
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">Japanese</h3>
							<span className="skills__level">Intermediate</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<HiCheckBadge />
						<div>
							<h3 className="skills__name">English</h3>
							<span className="skills__level">Advanced</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
