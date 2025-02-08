import React from "react";

interface navButtonProps {
	onClick: () => void;
	isBold?: boolean;
	children: React.ReactNode;
}
const NavbarButton = (props: navButtonProps) => {
	return (
		<button
			className={` text-white font py-2 px-4 hover:underline cursor-pointer ${
				props.isBold ? "font-bold" : ""
			}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default NavbarButton;
