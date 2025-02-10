import DropDownMenu from "../atom/dropDownMenu";
import NavbarButton from "../atom/navbarButton";
import TranslateIcon from "@mui/icons-material/Translate";

const TranslateDropDownMenu = () => {
	return (
		<div>
			<DropDownMenu
				button={
					<NavbarButton>
						<div className="">
							<TranslateIcon />
						</div>
					</NavbarButton>
				}
				items={[{ contents: <a>日本語</a> }, { contents: <a>English</a> }]}
			/>
		</div>
	);
};

export default TranslateDropDownMenu;
