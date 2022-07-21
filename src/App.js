import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
