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

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MessengerCustomerChat from "react-messenger-customer-chat";
import CarrerConselling from "./Pages/CarrerCounceling/CarrerConselling";
import CarrerCv from "./Pages/CarrerCounceling/CarrerCv";
import CarrerPayment from "./Pages/CarrerCounceling/CarrerPayment";
import CarrerResume from "./Pages/CarrerCounceling/CarrerResume";
import CheckoutForm from "./Pages/CarrerCounceling/CheckoutForm";
import PaymentInformation from "./Pages/CarrerCounceling/PaymentInformation";
import PaymentOption from "./Pages/CarrerCounceling/PaymentOption";
import CoverLatterTemplate from "./Pages/CoverLatterTemplate/CoverLatterTemplate";
import CvTemplate from "./Pages/CvTemplate/CvTemplate";
import AdditionalSkills from "./Pages/EditorComponetn/CommonEditorComponent/AdditionalSkills";
import Certifications from "./Pages/EditorComponetn/CommonEditorComponent/Certifications";
import ContactDetails from "./Pages/EditorComponetn/CommonEditorComponent/ContactDetails";
import DragAndDropFile from "./Pages/EditorComponetn/CommonEditorComponent/DragAndDropFile";
import Template1 from "./Pages/EditorComponetn/CommonEditorComponent/DummyTemplate/Template1";
import Template2 from "./Pages/EditorComponetn/CommonEditorComponent/DummyTemplate/Template2";
import EditorCareerObjective from "./Pages/EditorComponetn/CommonEditorComponent/EditorCareerObjective";
import Education from "./Pages/EditorComponetn/CommonEditorComponent/Education";
import Experience from "./Pages/EditorComponetn/CommonEditorComponent/Experience";
import Languages from "./Pages/EditorComponetn/CommonEditorComponent/Languages";
import Reference from "./Pages/EditorComponetn/CommonEditorComponent/Reference";
import ShouldAddReference from "./Pages/EditorComponetn/CommonEditorComponent/ShouldAddReference";
import Start from "./Pages/EditorComponetn/CommonEditorComponent/Start";
import EditResume from "./Pages/EditorComponetn/EditResume";
import CoverLetter from "./Pages/Home/Templates/CoverLetter";
import Cv from "./Pages/Home/Templates/Cv";
import Resume from "./Pages/Home/Templates/Resume";
import Templates from "./Pages/Home/Templates/Templates";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";
import HowWriteCoverLetter from "./Pages/CoverLatterTemplate/CoverLetter/HowWriteCoverLetter";

const stripePromise = loadStripe(
  "pk_test_51L0e7DJVuUKdOSgodXlRxjzrt9f8fKWzD9Jum98GewskqXtaZ9Mx725bepiQ7zjAuEpcALdbkJEVHlNIG0RTIanM00m74yy2rn"
);
function App() {
  return (
    <div>
      <Routes>
        {/* Nested Routing for Templates Section of our Homepage */}
        <Route path="/" element={<Home />}>
          <Route index element={<Resume />}></Route>
          <Route path="cv" element={<Cv />}></Route>
          <Route path="coverLetter" element={<CoverLetter />}></Route>
        </Route>
        {/* End of Nested Routing for Templates Section of our Homepage */}

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
        <Route path="/final-resume" element={<Template1 />}></Route>
        <Route path="/resume-builder/how-to-start" element={<Start />}></Route>
        <Route
          path="/resume-builder/drag-and-drop-file"
          element={<DragAndDropFile />}
        ></Route>
        <Route path="/resume-builder" element={<EditResume />}>
          <Route path="editor-contact" element={<ContactDetails />}></Route>
          <Route path="editor-experience" element={<Experience />}></Route>
          <Route path="editor-education" element={<Education />}></Route>
          <Route path="certifications" element={<Certifications />}></Route>
          <Route
            path="additional-skills"
            element={<AdditionalSkills />}
          ></Route>
          <Route path="languages" element={<Languages />}></Route>
          <Route
            path="career-objective"
            element={<EditorCareerObjective />}
          ></Route>
          <Route
            path="reference/should_add_reference"
            element={<ShouldAddReference />}
          ></Route>
          <Route path="reference" element={<Reference />}></Route>
          <Route path="template1" element={<Template1 />}></Route>
          <Route path="template2" element={<Template2 />}></Route>
        </Route>

        {/* cover letter route */}
        <Route
          path="/how-write-cover-letter"
          element={<HowWriteCoverLetter />}
        ></Route>
        <Route
          path="/resume-builder/career-counselling/:id"
          element={<CarrerPayment />}
        >
          <Route index element={<PaymentInformation />}></Route>
          <Route path="method" element={<PaymentOption />}></Route>
          <Route
            path="checkout-form"
            element={
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            }
          ></Route>
        </Route>
      </Routes>
      {/* facebook live chat */}
      <MessengerCustomerChat
        pageId="105555438910537"
        appId="1225310258009219"
      />
      {/* <Footer /> */}
      <Toaster />
    </div>
  );
}

export default App;
