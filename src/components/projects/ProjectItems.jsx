import { HiOutlineArrowSmRight } from 'react-icons/hi';

export const ProjectItems = ({ item }) => {
	return (
		<div className="project__card" key={item.id}>
			<img className="project__img" src={item.image} alt="" />
			<h3 className="project__title">{item.title}</h3>
			<a
				href={item.url}
				className="project__button"
				target="_blank"
				rel="noreferrer"
			>
				Ver <HiOutlineArrowSmRight className="project__button-icon" />
			</a>
		</div>
	);
};
