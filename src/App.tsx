import Navbar from "./components/organism/navbar"
import Background from "./components/pages/background";
import HomeContainer from "./components/pages/homeContainer";
const App = () => {
	return (
		<div>
			<Background>
				<Navbar />
				<HomeContainer />
			</Background>
		</div>
	);
};

export default App;
