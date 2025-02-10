import DropDownMenu from "../atom/dropDownMenu";
import NavbarButton from "../atom/navbarButton";
import { NavLink } from "react-router"; // react-router に変更
import TranslateDropDownMenu from "./translateDropDownMenu";
import NavbarLinks from "./navbarLinks";

const MobileNavMenu = () => {
	return (
		<div className="fixed top-4 right-4 sm:hidden flex gap-2">
			<div>
				<NavbarLinks />
			</div>
			<div>
				<TranslateDropDownMenu />
			</div>
			<div className="mt-1">
				<DropDownMenu
					button={
						<NavbarButton>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</NavbarButton>
					}
					items={[
						{
							contents: (
								<NavLink to="/" className={style.navButton}>
									Home
								</NavLink>
							),
						},
						{
							contents: (
								<NavLink to="/works" className={style.navButton}>
									Works
								</NavLink>
							),
						},
						{
							contents: (
								<NavLink to="/experience" className={style.navButton}>
									Experience
								</NavLink>
							),
						},
					]}
				/>
			</div>
		</div>
	);
};

const style = {
	navButton: "block w-full px-2 py-1 hover:bg-gray-700 rounded-lg",
};

export default MobileNavMenu;
