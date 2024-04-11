import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Subjects from "./pages/Subjects";
import Subject from "./pages/Subject";
const App = () => {
	return (
		<Routes>  
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/subjects" element={<Subjects/>}/>
			<Route path="/subjects/:subjectID" element={<Subject/>}/>
		</Routes>
	)
}

export default App;
