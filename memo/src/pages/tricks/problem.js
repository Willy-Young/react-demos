import React, { memo, useCallback, useState } from 'react';

import BorderBox from 'components/border-box';
import Button from 'components/button';

const MemoBox = memo(BorderBox);
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
						<h1 className='display-4'>More Pitfalls</h1>
						<p className='lead'>
							Some weird unexpected nuances.
						</p>
						<hr className='my-4' />
						<p>Nodes as children and unexpected props.</p>
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
					<h2>Node as a child</h2>
				</div>
				<div className='col-sm'>
					<MemoButton id='node'><i className='fas fa-beer' /></MemoButton>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-sm'>
					<h2>Component as a child</h2>
				</div>
				<div className='col-sm'>
					<MemoBox><MemoButton id='component'>Matryoshka</MemoButton></MemoBox>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-sm'>
					<h2>Unexpected Props</h2>
				</div>
				<div className='col-sm'>
					<MemoButton id='morestuff' unexpected={{ hi: 'wow' }}>Too Much Props</MemoButton>
				</div>
			</div>
		</div>
	);
};

export default Problem;
