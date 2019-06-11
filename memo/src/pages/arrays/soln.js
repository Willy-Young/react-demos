import React, { memo, useCallback, useState } from 'react';

import Button from 'components/button';
import ClickedList from 'components/clicked-list';

const MemoButton = memo(Button);
const MemoList = memo(ClickedList);

const Soln = () => {
	const [todoCount, setTodoCount] = useState(6);
	const [todos, setTodos] = useState([
		'Todo1',
		'Todo2',
		'Todo3',
		'Todo4',
		'Todo5',
	]);
	const handleAddTodo = useCallback(() => {
		setTodos(prev => [...prev, `Todo${prev.length + 1}`]);
		setTodoCount(prev => prev + 1);
	}, []);
	
	// eslint-disable-next-line no-console
	console.log('Page Render');
	
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm'>
					<div className='jumbotron'>
						<h1 className='display-4'>Watch out for arrays</h1>
						<p className='lead'>
							Watch out for reference equality
						</p>
						<hr className='my-4' />
						<p>When mutating things be sure to use new objects.</p>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm'>
					<span>Next Todo: </span>
					<span>{ todoCount }</span>
				</div>
				<div className='col-sm'>
					<MemoButton onClick={ handleAddTodo }>Add a Todo</MemoButton>
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

export default Soln;
