import DropDownMenu from "../atom/dropDownMenu";
import NavbarButton from "../atom/navbarButton";

const NavbarLinks = () => {
	return (
		<div>
			<DropDownMenu
				button={<NavbarButton>Links</NavbarButton>}
				items={[
					{ label: "Edit", onClick: () => console.log("Edit clicked") },
					{ label: "Delete", onClick: () => console.log("Delete clicked") },
				]}
			/>
		</div>
	);
};

export default NavbarLinks;
