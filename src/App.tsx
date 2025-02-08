import Navbar from "./components/organism/navbar";
import Background from "./components/pages/background";
import Experience from "./components/pages/experience";
import Works from "./components/pages/works";
import Home from "./components/pages/home";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Background>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/works" element={<Works />} />
						<Route path="/experience" element={<Experience />} />
					</Routes>
				</Background>
			</BrowserRouter>
		</div>
	);
};

export default App;
