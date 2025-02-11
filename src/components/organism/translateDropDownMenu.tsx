import DropDownMenu from "../atom/dropDownMenu";
import NavbarButton from "../atom/navbarButton";
import TranslateIcon from "@mui/icons-material/Translate";
import useChangeLanguage from "../../hooks/useChangeLanguage";
const TranslateDropDownMenu = () => {
	const { handleChangeLanguage } = useChangeLanguage();

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
							<a
								className="block w-full px-2 py-1 hover:bg-gray-700 rounded-lg"
								onClick={() => {
									handleChangeLanguage("ja");
								}}
							>
								日本語
							</a>
						),
					},
					{
						contents: (
							<a
								className="block w-full px-2 py-1 hover:bg-gray-700 rounded-lg"
								onClick={() => {
									handleChangeLanguage("en");
								}}
							>
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
