import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as URL from '../../../router/url';

function Navigation(props) {
	console.log("NAV = ", props);
	const { NAVIGATION } = URL

	const renderItem = (item, index) => {
		return (
			<li
				key={ index }
				className={ props.location.pathname === item.url ? "active" : null }
			>
				<Link to={ item.url }>{ item.title }</Link>
			</li>);
	};

	return (
		<nav className="amado-nav">
			<ul>
				{
					NAVIGATION.map(renderItem)
				}
			</ul>
		</nav>
	);

}

export default withRouter(Navigation);
