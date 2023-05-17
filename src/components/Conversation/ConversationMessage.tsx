import React from 'react';

const ConversationMessage = () => {
	return (
		<div
			className='d-flex flex-column message'
			id='conversation'
		>
			<div className='row message-previous'>
				<div className='col-sm-12 previous'>
					<a
						// onclick='previous(this)'
						id='ankitjain28'
						// name='20'
					>
						Show Previous Message!
					</a>
				</div>
			</div>

			<div className='row message-body'>
				<div className='col-sm-12 message-main-receiver'>
					<div className='receiver'>
						<div className='message-text'>
							Hi, what are you doing?!
						</div>
						<span className='message-time pull-right'>
							Sun
						</span>
					</div>
				</div>
			</div>

			<div className='row message-body'>
				<div className='col-sm-12 message-main-sender'>
					<div className='sender'>
						<div className='message-text'>
							I am doing nothing man!
						</div>
						<span className='message-time pull-right'>
							Sun
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConversationMessage;
