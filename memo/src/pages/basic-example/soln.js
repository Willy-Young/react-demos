import React, { memo, useCallback, useState } from 'react';

import Button from 'components/button';

const MemoButton = memo(Button);

const Soln = () => {
	const [clickCount, setClickCount] = useState(0);
	const incrementCount = useCallback(() => setClickCount(prev => prev + 1), [setClickCount]);
	
	// eslint-disable-next-line no-console
	console.log('Page Render');
	
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm'>
					<div className='jumbotron'>
						<h1 className='display-4'>The Solution</h1>
						<p className='lead'>
							Use the memo hoc!
						</p>
						<hr className='my-4' />
						<p>Now we should see the button not rerender.</p>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<span>Clicked Count: </span>
					<span>{ clickCount }</span>
				</div>
				<div className='col-sm'>
					<MemoButton onClick={ incrementCount }>Click Me</MemoButton>
				</div>
			</div>
		</div>
	);
};

export default Soln;
