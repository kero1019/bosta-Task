import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SearchComponent from './SearchComponent'; 

export default function Navbar() {
	const [searchBar, setSearchBar] = React.useState(false);
	const [hovered, setHovered] = React.useState(false);
	const [id, setId] = React.useState();
	

	const handleSearchBar = () => {
		setSearchBar(!searchBar); // Toggle the search bar on click
	};

	const handleMouseEnter = () => {
		setHovered(true); 
	};

	const handleMouseLeave = () => {
		if (!searchBar) {
			setHovered(false);
		}
	};

	return (
		<nav className="navbar">
			<div className="last-part">
				<p className="language">ENG</p>
				<p>Login</p>
				<div className="track-container">
					<p
						className="search-paragraph"
						onClick={handleSearchBar}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						Track Your Cargo 
						<IoIosArrowForward className={`arrow-icon ${(hovered || searchBar) ? "Active" : ''}`} />
					</p>
					{searchBar && <SearchComponent setId = {setId}  id = {id} />}
				</div>
			</div>

			<div className="middle-part">
				<p>Call Center</p>
				<p>Prices</p>
				<p>Home</p>
			</div>

			<div className="logo-part">
				<p>Bosta</p>
				<img src="/Logo.png" alt="Photo" />
			</div>
		</nav>
	);
}
