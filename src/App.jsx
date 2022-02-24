import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ImageDetails from "./pages/ImageDetails";
function App() {
  return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:imageId" element={<ImageDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
