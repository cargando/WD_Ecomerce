import React from 'react';
import { withRouter } from 'react-router';


function Home(props) {
	const { code } = props.match.params;

	return (
		<h1>HOME { code }</h1>
	)

}

export default withRouter(Home);
