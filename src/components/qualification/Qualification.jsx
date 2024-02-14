import { useState } from 'react';
import './qualification.css';
import {
	HiOutlineAcademicCap,
	HiOutlineBriefcase,
	HiOutlineCalendar
} from 'react-icons/hi';

export const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My Journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? 'qualification__button button--flex qualification__active'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(1)}
					>
						<HiOutlineAcademicCap className="qualification__icon" />
						Education
					</div>
					<div
						className={
							toggleState === 2
								? 'qualification__button button--flex qualification__active'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(2)}
					>
						<HiOutlineBriefcase className="qualification__icon" />
						Experience
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">System Analyst</h3>
								<span className="qualification__subtitle">ORT</span>
								<div className="qualification__calendar">
									<HiOutlineCalendar className="qualification__calendar-icon" />
									2022
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									Game Developer Master + Unity Certification
								</h3>
								<span className="qualification__subtitle">UTN</span>
								<div className="qualification__calendar">
									<HiOutlineCalendar className="qualification__calendar-icon" />
									2016
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Electronic Technician</h3>
								<span className="qualification__subtitle">ORT</span>
								<div className="qualification__calendar">
									<HiOutlineCalendar className="qualification__calendar-icon" />
									2004
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
					<div
						className={
							toggleState === 2
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Full-Stack Developer</h3>
								<span className="qualification__subtitle">ArtdeCode</span>
								<div className="qualification__calendar">
									<HiOutlineCalendar className="qualification__calendar-icon" />
									2020-Present
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Full-Stack Developer</h3>
								<span className="qualification__subtitle">Roemmers</span>
								<div className="qualification__calendar">
									<HiOutlineCalendar className="qualification__calendar-icon" />
									2019-2020
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Front-End Developer</h3>
								<span className="qualification__subtitle">Freelance</span>
								<div className="qualification__calendar">
									<HiOutlineCalendar className="qualification__calendar-icon" />
									2013-2019
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
