import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { JSX } from "react";

interface DropDownMenuProps {
	button: React.ReactNode;
	items: {
		contents: JSX.Element;
	}[];
}

const DropDownMenu = ({ button, items }: DropDownMenuProps) => {
	return (
		<div>
			<Menu>
				<MenuButton as="div">{button}</MenuButton>
				<MenuItems
					transition
					anchor="bottom end"
					className="w-40 p-1 origin-top-right rounded-xl border border-white bg-gray-800  text-sm text-white transition duration-100 ease-out focus:outline-none"
				>
					{items.map((item, index) => (
						<MenuItem key={index}>{item.contents}</MenuItem>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
};

export default DropDownMenu;
