import Home from "./pages/Home";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Roadtrip from "./category/Roadtrip";
import Trekking from "./category/Trekking";
import Spritiual from "./category/Spritiual";
import Group from "./category/Group";
import Honeymoon from "./category/Honeymoon";
import Party from "./category/Party";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category/road trip" element={<Roadtrip />} />
          <Route path="/category/trekking" element={<Trekking />} />
          <Route path="/category/spritiual tour" element={<Spritiual />} />
          <Route path="/category/honeymoon" element={<Honeymoon />} />
          <Route path="/category/party" element={<Party />} />
          <Route path="/category/group tour" element={<Group />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
