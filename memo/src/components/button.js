import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, id, onClick, style }) => {
	// eslint-disable-next-line no-console
	console.log(`Button Render ${id}`);
	
	return (
		<button type='button' className='btn btn-primary' onClick={ onClick } style={ style }>
			{ children }
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.object,
};

Button.defaultProps = {
	children: null,
	id: '',
	onClick: undefined,
	style: undefined,
};

export default Button;
