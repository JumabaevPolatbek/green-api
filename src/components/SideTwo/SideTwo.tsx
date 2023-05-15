import React from 'react';
import ComposeBox from '../ComposeBox/ComposeBox';
import SideBar from '../SideBar/SideBar';
type Props = {
	left: number;
	setLeft: React.Dispatch<React.SetStateAction<number>>;
};
const SideTwo: React.FC<Props> = ({ left, setLeft }) => {
	const handleBack = () => setLeft(-100);
	return (
		<div
			className={'side-two'}
			style={{ left: `${left}%` }}
		>
			<div className={`row newMessage-heading`}>
				<div className={`row newMessage-main`}>
					<div
						className={`col-sm-2 col-xs-2 newMessage-back`}
						onClick={handleBack}
					>
						<i
							className='fa fa-arrow-left'
							aria-hidden='true'
						></i>
					</div>
					<div
						className={`col-sm-10 col-xs-10 newMessage-title`}
					>
						New Chat
					</div>
				</div>
			</div>

			<ComposeBox />
			<SideBar name='compose-sideBar'/>
		</div>
	);
};

export default SideTwo;
