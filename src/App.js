import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Signup from "./Components/Navbar/Signup";
import AllArticle from "./Pages/CarrerCounceling/AllArticle";
import CarrerHeader from "./Pages/CarrerCounceling/CarrerHeader";
import Example from "./Pages/CarrerCounceling/Example";
import Interview from "./Pages/CarrerCounceling/Interview";
import PersonalDev from "./Pages/CarrerCounceling/PersonalDev";
import Stories from "./Pages/CarrerCounceling/Stories";
import Home from "./Pages/Home/Home";
import CoverLetterDemo from "./Pages/Home/DemoTemplate/CoverLetterDemo";
import CvDemo from "./Pages/Home/DemoTemplate/CvDemo";
import ResumeDemo from "./Pages/Home/DemoTemplate/ResumeDemo";
import DemoTemplate from "./Pages/Home/DemoTemplate/DemoTemplate";
import Footer from "./Shared/Footer/Footer";
import CarrerResume from "./Pages/CarrerCounceling/CarrerResume";
import CarrerCv from "./Pages/CarrerCounceling/CarrerCv";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ResumeDemo />}></Route>
          <Route path="cv" element={<CvDemo />}></Route>
          <Route path="coverLetter" element={<CoverLetterDemo />}></Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="resumeTemplate" element={<DemoTemplate />} />
        <Route path="/resume" element={<Resume />}></Route>

        {/* nested route career counselling */}
        <Route path="/career-counselling" element={<CarrerHeader />}>
          <Route index element={<AllArticle />}></Route>
          <Route path="resume-write" element={<CarrerResume />}></Route>
          <Route path="cv-write" element={<CarrerCv />}></Route>
          <Route path="examples" element={<Example />} />
          <Route path="personal-development" element={<PersonalDev />} />
          <Route path="inspiring-stories" element={<Stories />} />
          <Route path="interview-preparation" element={<Interview />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
