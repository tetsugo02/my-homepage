import DropDownMenu from "../atom/dropDownMenu";
import NavbarButton from "../atom/navbarButton";
import linksItems from "./linksItems";
const NavbarLinks = () => {
	return (
		<div>
			<DropDownMenu button={<NavbarButton>Links</NavbarButton>} items={linksItems} />
		</div>
	);
};

export default NavbarLinks;
