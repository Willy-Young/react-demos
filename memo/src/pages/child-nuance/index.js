import React, { memo, useCallback, useState } from 'react';

import Button from 'components/button';

const MemoBtn = memo(Button);

const ChildNuance = () => {
	const [clickCount, setClickCount] = useState(0);
	const incrementCount = useCallback(() => setClickCount(prev => prev + 1), [setClickCount]);
	
	const icon = <i className='fas fa-beer' />;
	
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
					<MemoBtn onClick={ incrementCount }>{ icon }</MemoBtn>
				</div>
			</div>
		</div>
	);
};

export default ChildNuance;
