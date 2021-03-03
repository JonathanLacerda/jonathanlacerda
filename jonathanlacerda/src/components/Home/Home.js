import React from "react";
import Social from './../Social/Social';

import './Home.scss';

function Header () {
	return(
		<section className="main">
			<h2 className="main__text" >
				Hi! I'm Jonathan, Developer front-end, based in Florianópolis, Brazil
			</h2>
			<Social />
		</section>
	)
}
export default Header;
