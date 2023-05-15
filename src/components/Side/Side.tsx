import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import SideBar from '../SideBar/SideBar';
import SideTwo from '../SideTwo/SideTwo';
const Side = () => {
	const [left, setLeft] = React.useState<number>(-100);
	const handleClick = () => {
		setLeft(0);
	};
	return (
		<>
			<div className={`col-sm-4 side`}>
				<div className={'side-one'}>
					<div className={`row heading`}>
						<div
							className={` col-xs-3 col-sm-3 col-3 heading-avatar`}
						>
							<div
								className={
									'heading-avatar-icon'
								}
							>
								<img src='https://bootdey.com/img/Content/avatar/avatar1.png' />
							</div>
						</div>
						<div
							className={`col-xs-1 col-sm-1  heading-dot pull-right`}
						>
							<i
								className='fa fa-ellipsis-v fa-2x  pull-right'
								aria-hidden='true'
							></i>
						</div>
						<div
							className={`col-xs-2 col-sm-2  heading-compose  pull-right`}
							onClick={handleClick}
						>
							<i
								className='fa fa-comments fa-2x  pull-right'
								aria-hidden='true'
							></i>
						</div>
					</div>
					<SearchBox />
					<SideBar name='sideBar' />
				</div>
				<SideTwo
					left={left}
					setLeft={setLeft}
				/>
			</div>
		</>
	);
};

export default Side;
