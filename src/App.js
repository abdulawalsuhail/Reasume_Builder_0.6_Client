import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Signup from "./Components/Navbar/Signup";
import AllArticle from "./Pages/CarrerCounceling/AllArticle";
import CarrerConselling from "./Pages/CarrerCounceling/CarrerConselling";
import CarrerCv from "./Pages/CarrerCounceling/CarrerCv";
import CarrerHeader from "./Pages/CarrerCounceling/CarrerHeader";
import CarrerResume from "./Pages/CarrerCounceling/CarrerResume";
import Example from "./Pages/CarrerCounceling/Example";
import Interview from "./Pages/CarrerCounceling/Interview";
import PersonalDev from "./Pages/CarrerCounceling/PersonalDev";
import Stories from "./Pages/CarrerCounceling/Stories";
import Home from "./Pages/Home/Home";
import CoverLetter from "./Pages/Home/ResumeTemplate/CoverLetter";
import Cv from "./Pages/Home/ResumeTemplate/Cv";
import Resume from "./Pages/Home/ResumeTemplate/Resume";
import ResumeTemplate from "./Pages/Home/ResumeTemplate/ResumeTemplate";
import Footer from "./Shared/Footer/Footer";

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
          <Route index element={<CarrerConselling/>}></Route>
          <Route path="all-article" element={<AllArticle/>}></Route>
          <Route path="resume-write" element={<CarrerResume/>}></Route>
          <Route path="cv-write" element={<CarrerCv/>}></Route>
          <Route path="examples" element={<Example/>}/>
          <Route path="personal-development" element={<PersonalDev/>}/>
          <Route path="inspiring-stories" element={<Stories/>}/>
          <Route path="interview-preparation" element={<Interview/>}/>
        </Route>
        <Route path="resumeTemplate" element={<ResumeTemplate />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
