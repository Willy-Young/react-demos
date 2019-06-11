import React, { useCallback, useState } from 'react';

import Button from 'components/button';

const Problem = () => {
	const [clickCount, setClickCount] = useState(0);
	const incrementCount = useCallback(() => setClickCount(prev => prev + 1), []);
	
	// eslint-disable-next-line no-console
	console.log('Page Render');
	
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm'>
					<div className='jumbotron'>
						<h1 className='display-4'>The Problem</h1>
						<p className='lead'>
							Why even use this thing?
						</p>
						<hr className='my-4' />
						<p>Clicking the button will update the "Page Component" but the button will still rerender.</p>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<span>Clicked Count: </span>
					<span>{ clickCount }</span>
				</div>
				<div className='col-sm'>
					<Button onClick={ incrementCount }>Click Me</Button>
				</div>
			</div>
		</div>
	);
};

export default Problem;
