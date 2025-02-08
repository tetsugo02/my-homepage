import NavbarButton from "../atom/navbarButton";
import TranslateIcon from "@mui/icons-material/Translate";
const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 justify-items-center w-full">
			<div className="absolute inset-0 opacity-10" />
			<div className="relative z-[60] grid grid-cols-5 max-w-3xl mt-2 mx-auto justify-items-center">
				<NavbarButton isBold={true} onClick={() => console.log("Hello World")}>
					Tesugo To
				</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>Works</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>Expirence</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>Links</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>
					<div className="">
						<TranslateIcon />
					</div>
				</NavbarButton>
			</div>
		</div>
	);
};

export default Navbar;
