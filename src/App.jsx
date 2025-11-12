import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfinityOminiverse from "./pages/InfinityOminiverse";
import VideoDetails from "./pages/VideoDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<InfinityOminiverse />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
