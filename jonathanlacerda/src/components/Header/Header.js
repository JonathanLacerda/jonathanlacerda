import React from "react";

import { GiWaves } from 'react-icons/gi';

import './Header.scss';

function Header () {
	return(
		<header className="header">
			<div className="header__logo">
				<h1 className="header__text">
					<span>
						J
					</span>
					<span>
						O
					</span>
					<span>
						N
					</span>
					<span>
						A
					</span>
					<span>
						T
					</span>
					<span>
						H
					</span>
					<span>
						A
					</span>
					<span>
						N
					</span>
					<span>
					</span>
					<span>
						L
					</span>
					<span>
						A
					</span>
					<span>
						C
					</span>
					<span>
						E
					</span>
					<span>
						R
					</span>
					<span>
						D
					</span>
					<span>
						A
					</span>
					<span>
						-
					</span>
					<span>
						D
					</span>
					<span>
						E
					</span>
					<span>
						V
					</span>
					<span>
						E
					</span>
					<span>
						L
					</span>
					<span>
						O
					</span>
					<span>
						P
					</span>
					<span>
						E
					</span>
					<span>
						R
					</span>
					<span>
						-
					</span>
				</h1>
				<GiWaves
					className="header__icon"
				/>
			</div>
		</header>
	)
}
export default Header;
