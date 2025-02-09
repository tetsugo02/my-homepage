import DropDownMenu from "../atom/dropDownMenu";
import NavbarButton from "../atom/navbarButton";

const NavbarLinks = () => {
	return (
		<div>
			<DropDownMenu
				button={<NavbarButton>Links</NavbarButton>}
				items={[
					{
						label: "Github",
						type: "a",
						onClick: () => console.log("Github"),
						links: "https://github.com/tetsugo02",
						avatar: "/GrommetIconsGithub.svg",
					},
					{
						label: "Labtory",
						type: "a",
						onClick: () => console.log("laboratory"),
						links: "https://murata-lab.jp/",
						avatar: "https://api.iconify.design/ri:robot-2-line.svg?color=%23ababab",
					},
				]}
			/>
		</div>
	);
};

export default NavbarLinks;
