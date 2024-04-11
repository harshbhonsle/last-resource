import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Subjects from "./pages/Subjects";

const App = () => {
	return (
		<Routes>  
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/subjects" element={<Subjects/>}/>
		</Routes>
	)
}

export default App;
