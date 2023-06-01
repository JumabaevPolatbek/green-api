import { useGetHistoryMutation } from '@/store/api/getMessage';
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hook';
import { IContact } from '@/store/models/account';
import { setContact } from '@/store/slices/contact';
import { useSession } from 'next-auth/react';
import React from 'react';
type Props = {
	contact: IContact;
};
const SideBarItem: React.FC<Props> = ({ contact }) => {
	const session = useSession();
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.contact);
	const [getHistory, result] = useGetHistoryMutation();
	const handleClick = async () => {
		await getHistory({
			account: {
				idInstance: session.data?.user.idInstance,
				apiTokenInstance:
					session.data?.user.apiTokenInstance,
			},
			body: {
				chatId: contact.id,
				count: 10,
			},
		});
		console.log(await dispatch(setContact(contact)));
	};
	// console.log(state);
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
