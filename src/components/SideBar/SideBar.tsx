import { IContact } from '@/store/models/account';
import React from 'react';
import SideBarItem from './SideBarItem';

type Props = {
	name: 'sideBar' | 'compose-sideBar';
	contacts?: IContact[];
	setId: React.Dispatch<React.SetStateAction<IContact>>;
};

const SideBar: React.FC<Props> = ({
	name,
	contacts,
	setId,
}) => {
	return (
		<div className={`row ${name}`}>
			{contacts?.map((contact) => (
				<SideBarItem
					key={contact.id}
					contact={contact}
					setId={setId}
				/>
			))}
		</div>
	);
};

export default SideBar;
