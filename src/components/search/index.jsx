import React from "react";

function Search(props) {
	const visibility = props.show ? "block" : "none";
	return (
		<div className="search-wrapper-on">
		<div className="search-wrapper section-padding-100" style={{display: visibility}}>
		<div className="search-close">
			<i className="fa fa-close" aria-hidden="true"></i>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="search-content">
						<form action="#" method="get">
							<input type="search" name="search" id="search" placeholder="Type your keyword..." />
								<button type="submit"><img src="img/core-img/search.png" alt="" /></button>
						</form>
					</div>
				</div>
			</div>
		</div>
		</div></div>)

}

export default Search;
