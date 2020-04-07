import React, { useEffect, useRef } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Footer from "./components/footer";
import AdBootom from "./components/ad_bottom";
import Search from "./components/search";
import Header from "./components/header";
import Logo from "./components/header/logo";
import Navigation from "./components/header/nav";
import NavButtons from "./components/header/buttons";
import NavCart from "./components/header/cart";
import NavSochial from "./components/header/soch";

import Fav from './assets/img/favicon.ico';

function App(props) {

	const ref = useRef();

	useEffect(() => {
		ref.current = document.getElementById('favIcon');
		ref.current.href = Fav;
	}, []);


  return (
	  <React.Fragment>
		  <Search />
		    <div className="main-content-wrapper d-flex clearfix">
				  <Header>
					  <Logo/>
					  <Navigation/>
					  <NavButtons/>
					  <NavCart/>
					  <NavSochial/>
				  </Header>
			    { props.children }
		    </div>
		  <AdBootom />
		  <Footer />
	  </React.Fragment>
  );
}

export default App;
