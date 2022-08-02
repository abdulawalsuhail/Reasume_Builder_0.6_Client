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

import CarrerConselling from "./Pages/CarrerCounceling/CarrerConselling";
import CarrerCv from "./Pages/CarrerCounceling/CarrerCv";
import CarrerResume from "./Pages/CarrerCounceling/CarrerResume";
import CoverLatterTemplate from "./Pages/CoverLatterTemplate/CoverLatterTemplate";
import CvTemplate from "./Pages/CvTemplate/CvTemplate";
import ContactDetails from "./Pages/EditorComponetn/CommonEditorComponent/ContactDetails";
import Start from "./Pages/EditorComponetn/CommonEditorComponent/Start";
import EditResume from "./Pages/EditorComponetn/EditResume";
import Business from "./Pages/Home/Business/Business";
import CoverLetter from "./Pages/Home/Templates/CoverLetter";
import Cv from "./Pages/Home/Templates/Cv";
import Resume from "./Pages/Home/Templates/Resume";
import Templates from "./Pages/Home/Templates/Templates";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";
import Footer from "./Shared/Footer/Footer";
import Certifications from "./Pages/EditorComponetn/CommonEditorComponent/Certifications";
import AdditionalSkills from "./Pages/EditorComponetn/CommonEditorComponent/AdditionalSkills";
import Languages from "./Pages/EditorComponetn/CommonEditorComponent/Languages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Resume />}></Route>
          <Route path="cv" element={<Cv />}></Route>
          <Route path="coverLetter" element={<CoverLetter />}></Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* nested route career counselling */}
        <Route path="/career-counselling" element={<CarrerHeader />}>
          <Route index element={<CarrerConselling />}></Route>
          <Route path="all-article" element={<AllArticle />}></Route>
          <Route path="resume-write" element={<CarrerResume />}></Route>
          <Route path="cv-write" element={<CarrerCv />}></Route>
          <Route path="inspiring-stories" element={<Stories />} />
          <Route path="interview-preparation" element={<Interview />} />
        </Route>
        <Route path="template" element={<Templates />} />
        <Route path="cvTemplate" element={<CvTemplate />}></Route>
        <Route path="resumeTemplate" element={<ResumeTemplate />}></Route>
        <Route path="/coverLatter" element={<CoverLatterTemplate />}></Route>

        {/* Resume Editor route */}
        <Route path="/resume-builder/how-to-start" element={<Start />}></Route>
        <Route path="/resume-builder" element={<EditResume />}>
          <Route path="editor-contact" element={<ContactDetails />}></Route>
          <Route path="certifications" element={<Certifications />}></Route>
          <Route path="additional-skills" element={<AdditionalSkills/>}></Route>
          <Route path="languages" element={<Languages/>}></Route>
        </Route>
      </Routes>

      <Business />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
