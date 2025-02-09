import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface DropDownMenuProps {
	button: React.ReactNode;
	items: { label: string; onClick: () => void }[];
}

const DropDownMenu = ({ button, items }: DropDownMenuProps) => {
	return (
		<div>
			<Menu>
				<MenuButton as="div">{button}</MenuButton>
				<MenuItems
					transition
					anchor="bottom end"
					className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm text-white transition duration-100 ease-out focus:outline-none"
				>
					{items.map((item, index) => (
						<MenuItem
							key={index}
							as="button"
							onClick={item.onClick}
							className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10"
						>
							{item.label}
						</MenuItem>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
};

export default DropDownMenu;
