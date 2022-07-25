import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Navbar/Signup";
import Home from "./Pages/Home/Home";
import CoverLetter from "./Pages/Home/ResumeTemplate/CoverLetter";
import Cv from "./Pages/Home/ResumeTemplate/Cv";
import Resume from "./Pages/Home/ResumeTemplate/Resume";
import ResumeTemplate from "./Pages/Home/ResumeTemplate/ResumeTemplate";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Resume />}></Route>
          <Route path="cv" element={<Cv />}></Route>
          <Route path="coverLetter" element={<CoverLetter/>}></Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="resumeTemplate" element={<ResumeTemplate />}/>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
