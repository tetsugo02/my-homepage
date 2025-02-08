import NavbarButton from "../atom/navbarButton";

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 justify-items-center w-full">
			<div className="absolute inset-0 opacity-10" />
			<div className="relative z-[60] grid grid-cols-5 max-w-3xl mx-auto">
				<NavbarButton isBold={true} onClick={() => console.log("Hello World")}>
					Tesugo To
				</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>Works</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>Expirence</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>Github</NavbarButton>
				<NavbarButton onClick={() => console.log("Hello World")}>SNS</NavbarButton>
			</div>
		</div>
	);
};

export default Navbar;
