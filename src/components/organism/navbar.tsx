import NavbarButton from "../atom/navbarButton";
import { NavLink } from "react-router";
import NavbarLinks from "./navbarLinks";
import TranslateDropDownMenu from "./translateDropDownMenu";

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 justify-items-center w-full hidden sm:block">
			<div className="absolute inset-0 opacity-10" />
			<div className="relative z-[60] grid grid-cols-5 max-w-4xl mt-2 mx-auto justify-items-center">
				<NavLink to="/">
					<NavbarButton isBold={true}>Home</NavbarButton>
				</NavLink>
				<NavLink to="/works">
					<NavbarButton>Works</NavbarButton>
				</NavLink>
				<NavLink to="/experience">
					<NavbarButton>Expirence</NavbarButton>
				</NavLink>
				<NavbarLinks />
				<TranslateDropDownMenu />
			</div>
		</div>
	);
};

export default Navbar;
