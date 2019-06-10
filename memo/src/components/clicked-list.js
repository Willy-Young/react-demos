import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

const ClickedList = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	
	return (
		<div>
			<div>
				<span>Active Clicked Index:</span>
				<span>{ activeIndex }</span>
			</div>
			<ul className='list-group'>
				{ data.map((itm, index) => (
					<li
						className={ classname('list-group-item', { active: activeIndex === index }) }
						key={ index }
						onClick={ () => setActiveIndex(index) }>
						{ itm }
					</li>
				)) }
			</ul>
		</div>
	);
};

ClickedList.propTypes = {
	data: PropTypes.array,
};

ClickedList.defaultProps = {
	data: [],
};

export default ClickedList;
