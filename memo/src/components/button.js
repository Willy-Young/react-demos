import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
	<button type='button' className='btn btn-primary' onClick={ onClick }>
		{ children }
	</button>
);

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	children: null,
	onClick: undefined,
};

export default Button;
