<<<<<<< HEAD
=======
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
>>>>>>> 8c6198fd08242cffc8e131f828c786b4afaf754a
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SignIn from "./Shared/SignIn/SignIn";

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
