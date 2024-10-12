import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SearchComponent from "./SearchComponent";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
	const isSmallScreen = useMediaQuery({ query: "(max-width: 922px)" });

	return <>{isSmallScreen ? <SmallNav /> : <DefaultNav />}</>;
}

function SmallNav() {
	const [displaySmallNav, setDisplaySmallNav] = React.useState(false);
	const [id, setId] = React.useState();

	const handelDisplaySmallNav = () => {
		setDisplaySmallNav(!displaySmallNav);
	};

	return (
		<>
			<nav className="navbar sm">
				<RxHamburgerMenu onClick={handelDisplaySmallNav} />
				<div className="logo-part">
					<p>Bosta</p>
					<img src="/Logo.png" alt="Photo" />
				</div>
				{displaySmallNav && (
					<div className="menu-items">
						<p className="language">ENG</p>
						<p>Login</p>
						<SearchComponent setId={setId} id={id} />
						<p>Call Center</p>
						<p>Prices</p>
						<p>Home</p>
					</div>
				)}
			</nav>
		</>
	);
}

function DefaultNav() {
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
		<nav className="navbar lg">
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
						<IoIosArrowForward
							className={`arrow-icon ${hovered || searchBar ? "Active" : ""}`}
						/>
					</p>
					{searchBar && <SearchComponent setId={setId} id={id} />}
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
