import React from 'react';

const ConversationHead = () => {
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
					John Doe
				</a>
				<span className={'heading-online'}>
					Online
				</span>
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
