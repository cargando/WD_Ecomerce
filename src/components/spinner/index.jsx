import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';


Spinner.propTypes = {
	type: PropTypes.oneOf(['center', 'inline']),
	color: PropTypes.string,
	size: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};

function Spinner(props) {
	const { type = 'center'} = props;

	const styles = {};

	if (type.toLocaleUpperCase() === 'INLINE') {
		styles.display = 'inline-block';
	} else {
		styles.display = 'flex';
		styles.justifyContent = 'center';
		styles.alignItems = 'center';
		styles.width = '100%';
		styles.height = '100%';
	}

	return (
		<div style={ styles }>
			<Loader
				type={'TailSpin'}
				color={props.color || '#00BFFF'}
				height={props.size || 20}
				width={props.size || 20}
			/>
		</div>);
}

export default React.memo(Spinner);
