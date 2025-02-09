import NavbarButton from "../atom/navbarButton";
import TranslateIcon from "@mui/icons-material/Translate";
import { NavLink } from "react-router";
import NavbarLinks from "./navbarLinks";

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 justify-items-center w-full hidden sm:block">
			<div className="absolute inset-0 opacity-10" />
			<div className="relative z-[60] grid grid-cols-5 max-w-4xl mt-2 mx-auto justify-items-center">
				<NavLink to="/">
					<NavbarButton isBold={true} onClick={() => console.log("Hello World")}>
						Home
					</NavbarButton>
				</NavLink>
				<NavLink to="/works">
					<NavbarButton onClick={() => console.log("Hello World")}>Works</NavbarButton>
				</NavLink>
				<NavLink to="/experience">
					<NavbarButton onClick={() => console.log("Hello World")}>Expirence</NavbarButton>
				</NavLink>
				<NavbarLinks />
				<NavbarButton onClick={() => console.log("Hello World")}>
					<div className="">
						<TranslateIcon />
					</div>
				</NavbarButton>
			</div>
		</div>
	);
};

export default Navbar;
