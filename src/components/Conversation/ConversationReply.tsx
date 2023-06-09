import React from 'react';

const ConversationReply = () => {
	return (
		<div className={`row reply`}>
			<div
				className={`col-sm-1 col-xs-1 reply-emojis`}
			>
				<i className='fa fa-smile-o fa-2x'></i>
			</div>
			<div className={`col-sm-9 col-xs-9 reply-main`}>
				<textarea
					className='form-control'
					rows={1}
					id='comment'
				></textarea>
			</div>
			<div
				className={`col-sm-1 col-xs-1 reply-recording`}
			>
				<i
					className='fa fa-microphone fa-2x'
					aria-hidden='true'
				></i>
			</div>
			<div className={`col-sm-1 col-xs-1 reply-send`}>
				<i
					className='fa fa-send fa-2x'
					aria-hidden='true'
				></i>
			</div>
		</div>
	);
};

export default ConversationReply;
