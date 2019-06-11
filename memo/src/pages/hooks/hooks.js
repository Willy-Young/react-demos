import React, { memo, useCallback, useState } from 'react';

import Button from 'components/button';
import ClickedList from 'components/clicked-list';

const MemoButton = memo(Button);
const MemoList = memo(ClickedList);

const todos = [
	'Todo1',
	'Todo2',
	'Todo3',
	'Todo4',
	'Todo5',
];

const Hooks = () => {
	const [clickCount, setClickCount] = useState(0);
	const incrementCount = useCallback(() => setClickCount(prev => prev + 1), []);
	
	// eslint-disable-next-line no-console
	console.log('Page Render');
	
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm'>
					<div className='jumbotron'>
						<h1 className='display-4'>What about hooks?</h1>
						<p className='lead'>
							Do components that internally have hook state work?
						</p>
						<hr className='my-4' />
						<p>In the React Tree you'll see the components wrapped with an intermediary layer.</p>
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
			<div className='row'>
				<div className='col-sm'>
					<MemoList data={ todos } />
				</div>
			</div>
		</div>
	);
};

export default Hooks;
