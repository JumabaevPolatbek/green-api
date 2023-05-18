import React from 'react';
import Conversation from '../components/Conversation/Conversation';
import Side from '../components/Side/Side';
function Home() {
	return (
		<>
			<div className={`container app`}>
				<div className={`row app-one`}>
					<Side />
					<Conversation />
				</div>
			</div>
		</>
	);
}

export default Home;
