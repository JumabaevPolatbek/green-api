import React from 'react';

const ComposeBox = () => {
	return (
		<div className={`row composeBox`}>
			<div className={`col-sm-12 composeBox-inner`}>
				<div className='form-group has-feedback'>
					<input
						id='composeText'
						type='text'
						className='form-control'
						name='searchText'
						placeholder='Search People'
					/>
					<span className='glyphicon glyphicon-search form-control-feedback'></span>
				</div>
			</div>
		</div>
	);
};

export default ComposeBox;
