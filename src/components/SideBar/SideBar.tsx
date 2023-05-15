import React from 'react';
import SideBarItem from './SideBarItem';


type Props = {
	name: 'sideBar' | 'compose-sideBar';
};

const SideBar: React.FC<Props> = ({ name }) => {
	return (
		<div className={`row ${name}`}>
			{[1, 2, 3, 4, 5, 6].map((item, index) => (
				<SideBarItem key={item} />
			))}
		</div>
	);
};

export default SideBar;
