import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Signup from "./Components/Navbar/Signup";
import AllArticle from "./Pages/CarrerCounceling/AllArticle";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/all-article" element={<AllArticle/>}/>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
