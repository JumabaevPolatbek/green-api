import { useGetHistoryMutation } from '@/store/api/getMessage';
import { IContact } from '@/store/models/account';
import { useSession } from 'next-auth/react';
import React from 'react';
type Props = {
	contact: IContact;
	setId: React.Dispatch<React.SetStateAction<IContact>>;
};
const SideBarItem: React.FC<Props> = ({
	contact,
	setId,
}) => {
	const session = useSession();
	const [getHistory, result] = useGetHistoryMutation();
	const handleClick = () => {
		setId(contact);
		getHistory({
			account: {
				idInstance: session.data?.user?.email,
				apiTokenInstance: session.data?.user?.name,
			},
			chatId: contact.id,
		});
	};
	// console.log('Result',result);
	return (
		<div
			className={`row sideBar-body`}
			onClick={handleClick}
		>
			<div
				className={`col-sm-3 col-xs-3 sideBar-avatar`}
			>
				<div className={'avatar-icon'}>
					<img src='https://bootdey.com/img/Content/avatar/avatar2.png' />
				</div>
			</div>
			<div
				className={`col-sm-9 col-xs-9 sideBar-main`}
			>
				<div className='row'>
					<div
						className={`col-sm-8 col-xs-8 sideBar-name`}
					>
						<span className={'name-meta'}>
							{contact.name}
						</span>
					</div>
					<div
						className={`col-sm-4 col-xs-4 pull-right sideBar-time`}
					>
						<span
							className={`time-meta pull-right'`}
						>
							+
							{contact.id.replace(
								'@c.us',
								''
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBarItem;
