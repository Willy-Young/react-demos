import React from 'react';

const Intro = () => (
	<div className='container'>
		<div className='row'>
			<div className='col-sm'>
				<div className='jumbotron'>
					<h1 className='display-4'>React.memo demos</h1>
					<p className='lead'>
						A brief introduction about React.memo since v16.6.0.
					</p>
					<hr className='my-4' />
					<p>Not to be confused with the useMemo hook, but they do work wonderfully together.</p>
					<p>A seemingly lesser known hoc provided out of the box to implement shouldComponentUpdate for SFCs.</p>
				</div>
			</div>
		</div>
	</div>
);

export default Intro;
