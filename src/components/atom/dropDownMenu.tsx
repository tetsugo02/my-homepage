import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import Avatar from "./avatar";

type DropDownMenuType = "a" | "button";

interface DropDownMenuProps {
	button: React.ReactNode;
	items: {
		label: string;
		onClick: () => void;
		links?: string;
		avatar?: string; // アバター画像のパスを追加
		type: DropDownMenuType;
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
					className="w-40 origin-top-right rounded-xl border border-white/5 bg-white/20 p-1 text-sm text-white transition duration-100 ease-out focus:outline-none"
				>
					{items.map((item, index) => (
						<MenuItem
							key={index}
							as={item.type}
							onClick={item.onClick}
							{...(item.type === "a" ? { href: item.links, target: "_blank" } : {})}
							className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10"
						>
							{item.avatar && <Avatar src={item.avatar} size="small" />}
							{item.label}
						</MenuItem>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
};

export default DropDownMenu;
