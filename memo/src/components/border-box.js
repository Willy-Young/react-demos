import React from 'react';
import PropTypes from 'prop-types';

const BorderBox = ({ children }) => {
	
	// eslint-disable-next-line no-console
	console.log('Box Render');
	
	return (
		<div style={{ padding: '1em', border: '1px solid grey' }}>
			{ children }
		</div>
	);
};

BorderBox.propTypes = {
	children: PropTypes.node,
};
BorderBox.defaultProps = {
	children: null,
};

export default BorderBox;
