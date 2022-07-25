import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Navbar/Login";
import Signup from "./Components/Navbar/Signup";
import AllArticle from "./Pages/CarrerCounceling/AllArticle";
import CarrerHeader from "./Pages/CarrerCounceling/CarrerHeader";
import Cv from "./Pages/CarrerCounceling/Cv";
import Example from "./Pages/CarrerCounceling/Example";
import Interview from "./Pages/CarrerCounceling/Interview";
import PersonalDev from "./Pages/CarrerCounceling/PersonalDev";
import Resume from "./Pages/CarrerCounceling/Resume";
import Stories from "./Pages/CarrerCounceling/Stories";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* nested route career counselling */}
        <Route path="/career-counselling" element={<CarrerHeader/>}>
          <Route index element={<AllArticle/>}></Route>
          <Route path="resume-write" element={<Resume/>}/>
          <Route path="cv-write" element={<Cv/>}/>
          <Route path="examples" element={<Example/>}/>
          <Route path="personal-development" element={<PersonalDev/>}/>
          <Route path="inspiring-stories" element={<Stories/>}/>
          <Route path="interview-preparation" element={<Interview/>}/>
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
