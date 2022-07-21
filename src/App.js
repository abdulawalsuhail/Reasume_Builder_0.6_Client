import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Navbar/Signup";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Login />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
