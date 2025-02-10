import DropDownMenu from "../atom/dropDownMenu";
import NavbarButton from "../atom/navbarButton";
import TranslateIcon from "@mui/icons-material/Translate";

const TranslateDropDownMenu = () => {
	return (
		<div>
			<DropDownMenu
				button={
					<NavbarButton>
						<TranslateIcon />
					</NavbarButton>
				}
				items={[
					{
						contents: (
							<a href="#" className="block w-full px-2 py-1 hover:bg-gray-700 rounded-lg">
								日本語
							</a>
						),
					},
					{
						contents: (
							<a href="#" className="block w-full px-2 py-1 hover:bg-gray-700 rounded-lg">
								English
							</a>
						),
					},
				]}
			/>
		</div>
	);
};

export default TranslateDropDownMenu;
