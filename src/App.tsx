import Navbar from "./components/organism/navbar";
import Background from "./components/pages/background";
import Experience from "./components/pages/experience";
const App = () => {
	return (
		<div>
			<Background>
				<Navbar />
				<Experience />
			</Background>
		</div>
	);
};

export default App;
