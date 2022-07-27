import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Signup from "./Components/Navbar/Signup";
import AllArticle from "./Pages/CarrerCounceling/AllArticle";
import CarrerHeader from "./Pages/CarrerCounceling/CarrerHeader";
import Interview from "./Pages/CarrerCounceling/Interview";
import Stories from "./Pages/CarrerCounceling/Stories";
import Home from "./Pages/Home/Home";

import CoverLetter from "./Pages/Home/Templates/CoverLetter";
import Cv from "./Pages/Home/Templates/Cv";
import Resume from "./Pages/Home/Templates/Resume";
import Footer from "./Shared/Footer/Footer";
import CarrerResume from "./Pages/CarrerCounceling/CarrerResume";
import CarrerCv from "./Pages/CarrerCounceling/CarrerCv";
import Templates from "./Pages/Home/Templates/Templates";
import CvTemplate from "./Pages/CvTemplate/CvTemplate";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Resume />}></Route>
          <Route path="cv" element={<Cv />}></Route>
          <Route path="coverLetter" element={<CoverLetter/>}></Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* nested route career counselling */}
        <Route path="/career-counselling" element={<CarrerHeader/>}>
          <Route index element={<AllArticle/>}></Route>
          <Route path="resume-write" element={<CarrerResume/>}></Route>
          <Route path="cv-write" element={<CarrerCv/>}></Route>
          <Route path="inspiring-stories" element={<Stories/>}/>
          <Route path="interview-preparation" element={<Interview/>}/>
        </Route>
        <Route path="template" element={<Templates />} />
        <Route path="cvTemplate" element={<CvTemplate/>}></Route>
        <Route path="resumeTemplate" element={<ResumeTemplate/>}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
