import React, { memo, useCallback, useState } from 'react';

import Button from 'components/button';

const MemoButton = memo(Button);

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
						<h1 className='display-4'>Common Pitfalls</h1>
						<p className='lead'>
							Some eslint warnings start to make sense.
						</p>
						<hr className='my-4' />
						<p>Inline object for styles or inline functions.</p>
					</div>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-sm'>
					<span>Clicked Count: </span>
					<span>{ clickCount }</span>
				</div>
				<div className='col-sm'>
					<MemoButton onClick={ incrementCount }>Do a rerender</MemoButton>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-sm'>
					<h2>Inline styling</h2>
				</div>
				<div className='col-sm'>
					<MemoButton id='style' style={{ backgroundColor: 'green' }}>Inline styled</MemoButton>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-sm'>
					<h2>Inline function</h2>
				</div>
				<div className='col-sm'>
					<MemoButton id='function' onClick={ () => console.log('Clicked Function') }>Inline function</MemoButton>
				</div>
			</div>
		</div>
	);
};

export default Problem;
