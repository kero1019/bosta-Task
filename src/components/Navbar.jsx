import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SearchComponent from "./SearchComponent";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import Logo from '../../public/Logo.png'

export default function Navbar() {
	const isSmallScreen = useMediaQuery({ query: "(max-width: 922px)" });

	return <>{isSmallScreen ? <SmallNav /> : <DefaultNav />}</>;
}

function SmallNav() {
	const { t, i18n } = useTranslation();
	const [displaySmallNav, setDisplaySmallNav] = React.useState(false);
	const [id, setId] = React.useState();
	const [searchBar, setSearchBar] = React.useState(false);

	const handelDisplaySmallNav = () => {
		setDisplaySmallNav(!displaySmallNav);
	};

	const handleLanguageChange = () => {
		const newLang = i18n.language === "en" ? "ar" : "en";
		i18n.changeLanguage(newLang);
	};

	return (
		<>
			<nav className="navbar sm">
				<RxHamburgerMenu onClick={handelDisplaySmallNav} />
				<div className="logo-part">
					<p>{t("logo")}</p>
					<img src={Logo} alt="Logo" />
				</div>
				{displaySmallNav && (
					<div className="menu-items">
						<p className="language" onClick={handleLanguageChange}>
							{i18n.language === "en" ? "ENG" : "عربي"}
						</p>
						<p>{t("login")}</p>
						<SearchComponent
							setId={setId}
							id={id}
							handleClose={setDisplaySmallNav}
						/>
						<p>{t("call")}</p>
						<p>{t("price")}</p>
						<p>{t("main")}</p>
					</div>
				)}
			</nav>
		</>
	);
}

function DefaultNav() {
	const { t, i18n } = useTranslation();
	const [searchBar, setSearchBar] = React.useState(false);
	const [hovered, setHovered] = React.useState(false);
	const [id, setId] = React.useState();

	const handleSearchBar = () => {
		setSearchBar(!searchBar);
	};

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		if (!searchBar) {
			setHovered(false);
		}
	};

	const handleLanguageChange = () => {
		const newLang = i18n.language === "en" ? "ar" : "en";
		i18n.changeLanguage(newLang);
	};

	return (
		<nav className="navbar lg">
			<div className="last-part">
				<p className="language" onClick={handleLanguageChange}>
					{i18n.language === "en" ? "ENG" : "عربي"}
				</p>
				<p>{t("login")}</p>
				<div className="track-container">
					<p
						className="search-paragraph"
						onClick={handleSearchBar}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						{t("trackYourCargo")}
						<IoIosArrowForward
							className={`arrow-icon ${hovered || searchBar ? "Active" : ""}`}
						/>
					</p>
					{searchBar && (
						<SearchComponent setId={setId} id={id} handleClose={setSearchBar} />
					)}
				</div>
			</div>

			<div className="middle-part">
				<p>{t("call")}</p>
				<p>{t("price")}</p>
				<p>{t("main")}</p>
			</div>

			<div className="logo-part">
				<p>{t("logo")}</p>
				<img src="/Logo.png" alt="Logo" />
			</div>
		</nav>
	);
}
