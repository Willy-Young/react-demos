import React, { useCallback, useState } from 'react';

import Button from 'components/button';

const Intro = () => {
	const [clickCount, setClickCount] = useState(0);
	const incrementCount = useCallback(() => setClickCount(prev => prev + 1), [setClickCount]);
	
	return (
		<div className='container'>
			<div className='row'>
				<h1 className='display-1'>Memo Demo Intro</h1>
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

export default Intro;
