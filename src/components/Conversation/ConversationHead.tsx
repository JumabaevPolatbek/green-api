import { useGetHistoryMutation } from '@/store/api/getMessage';
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hook';
import { setHistory } from '@/store/slices/history';
import { useSession } from 'next-auth/react';
import React from 'react';

// const getChatHistory = async (
// 	idInstance: string | null | undefined,
// 	apiTokenInstance: string | null | undefined
// ) => {
// 	const res = await fetch(
// 		`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`
// 	);
// 	const data = await res.json();
// 	return data;
// };

const ConversationHead: React.FC = () => {
	const { data: contact } = useAppSelector(
		(state) => state.contact
	);
	const { data: session } = useSession();
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		if (session?.user) {
			console.log(session.user);
			fetch(
				`https://api.green-api.com/waInstance${session.user.idInstance}/getChatHistory/${session.user.apiTokenInstance}`
			)
				.then((res) => res.json())
				.then((json) => dispatch(setHistory(json)));
		}
	}, []);
	// console.log(result);
	return (
		<div className={`row heading`}>
			<div
				className={`col-sm-2 col-md-1 col-xs-3 heading-avatar`}
			>
				<div className={'heading-avatar-icon'}>
					<img src='https://bootdey.com/img/Content/avatar/avatar6.png' />
				</div>
			</div>
			<div
				className={`col-sm-8 col-xs-7 heading-name`}
			>
				<a className={'heading-name-meta'}>
					{contact.name}
				</a>
				{/* <span className={'heading-online'}>
					Online
				</span> */}
			</div>
			<div
				className={`col-sm-1 col-xs-1  heading-dot pull-right`}
			>
				<i
					className='fa fa-ellipsis-v fa-2x  pull-right'
					aria-hidden='true'
				></i>
			</div>
		</div>
	);
};

export default ConversationHead;
