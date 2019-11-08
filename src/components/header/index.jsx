import React from 'react';


function Header(props) {

	return (
		<header className="header-area clearfix">{props.children}</header>
	);

}

export default Header;
