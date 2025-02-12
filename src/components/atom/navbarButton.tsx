import React from "react";

interface navButtonProps {
	onClick?: () => void;
	isBold?: boolean;
	children: React.ReactNode;
	style?: string;
}
const NavbarButton = (props: navButtonProps) => {
	return (
		<button
			className={
				props.style ??
				` text-white text-xl py-2 px-4 hover:underline cursor-pointer flex ${
					props.isBold ? "font-bold" : ""
				}`
			}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default NavbarButton;
