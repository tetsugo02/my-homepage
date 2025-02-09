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
				items={[
					{ label: "日本語", type: "button", onClick: () => console.log("日本語") },
					{ label: "English", type: "button", onClick: () => console.log("English") },
				]}
			/>
		</div>
	);
};

export default TranslateDropDownMenu;
