import React, { useState } from "react";
import CoverLetterNavbar from "./CoverLetterNavbar";
import welcome from "../../../assets/cover-letter-welcome.gif";
import NextBtn from "./NextBtn";
import { FcIdea } from "react-icons/fc";
import { MdOutlineCreate } from "react-icons/md";

const CoverLetterInput = () => {
  const [section, setSection] = useState("name");
  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");
  const [strengthOne, setStrengthOne] = useState("");
  const [strengthTwo, setStrengthTwo] = useState("");
  const [strengthThree, setStrengthThree] = useState("");
  const [challenge, setChallenge] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [email, setEmail] = useState("");

  const createCoverLetter = () => {
    const skill = { skillOne, skillTwo, skillThree };
    const strength = { strengthOne, strengthTwo, strengthThree };
    const coverLetterInfo = {
      name,
      phone,
      email,
      linkedin,
      jobRole,
      experience,
      skill,
      strength,
      challenge,
    };
    console.log(coverLetterInfo);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f8a6]">
      <CoverLetterNavbar />
      <img src={welcome} className="w-fit mx-auto mt-10" alt="" />

      {/* name input */}
      {section === "name" && (
        <div>
          <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-8 mt-4 poppins-i text-gray-500">
            Please enter your name as you’d like it to appear on your cover
            letter
          </h3>
          <div className="flex justify-center gap-3 px-5">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name here"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success"
            />
            {name && <NextBtn section={"jobRole"} setSection={setSection} />}
          </div>
        </div>
      )}

      {/* Job Role */}
      {section === "jobRole" && (
        <div>
          <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-8 mt-4 poppins-i text-gray-500">
            What is your next job role?
          </h3>
          <div className="flex justify-center gap-3 px-5">
            <input
              type="text"
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="Ex: Web Developer"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success"
            />
            {jobRole && (
              <NextBtn section={"experience"} setSection={setSection} />
            )}
          </div>
        </div>
      )}
      {/* work experience */}
      {section === "experience" && (
        <div>
          <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-8 mt-4 poppins-i text-gray-500">
            How much experience do you have?
          </h3>
          <div className="flex justify-center gap-3 px-5">
            <select
              onChange={(e) => setExperience(e.target.value)}
              className="select select-success w-full max-w-xs"
            >
              <option disabled selected>
                How much experience do you have?
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>10+</option>
            </select>
            {experience && (
              <NextBtn section={"skills"} setSection={setSection} />
            )}
          </div>
        </div>
      )}

      {/* 3 major skills */}
      {section === "skills" && (
        <div className="pb-16">
          <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-1 mt-4 poppins-i text-gray-500">
            What are your skills?
          </h3>
          <p className="text-gray-500 md:text-center mt-3 mb-6">
            Enter your top 3 skills which make you a great candidate in your
            role.
          </p>
          <div className="px-5 lg:max-w-xl md:max-w-lg w-full mx-auto">
            <input
              type="text"
              onChange={(e) => setSkillOne(e.target.value)}
              placeholder="Skill One"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success my-3 block"
            />
            <input
              type="text"
              onChange={(e) => setSkillTwo(e.target.value)}
              placeholder="Skill Two"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success my-3 block"
            />
            <input
              type="text"
              onChange={(e) => setSkillThree(e.target.value)}
              placeholder="Skill Three"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success my-3 block"
            />
            {skillOne && skillTwo && skillThree && (
              <NextBtn section={"strengths"} setSection={setSection} />
            )}
          </div>
        </div>
      )}

      {/* work Strengths */}
      {section === "strengths" && (
        <div className="pb-10">
          <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-8 mt-4 poppins-i text-gray-500">
            How about your strengths?
          </h3>
          <div className=" px-5 md:max-w-md mx-auto">
            <select
              onChange={(e) => setStrengthOne(e.target.value)}
              className="select select-success w-full max-w-md my-3"
            >
              <option disabled selected>
                Strength One
              </option>
              <option>Coaching</option>
              <option>Collaboration</option>
              <option>Communication</option>
              <option>Critical Thinking</option>
              <option>Customer Service</option>
              <option>Decision-making</option>
              <option>Delegation</option>
              <option>Innovation</option>
              <option>Leadership</option>
              <option>Management</option>
              <option>Organization</option>
              <option>Time management</option>
              <option>Team-work</option>
              <option>Problem-solving</option>
              <option>Planning</option>
              <option>Observation</option>
            </select>
            <select
              onChange={(e) => setStrengthTwo(e.target.value)}
              className="select select-success w-full max-w-md my-3"
            >
              <option disabled selected>
                Strength Two
              </option>
              <option>Coaching</option>
              <option>Collaboration</option>
              <option>Communication</option>
              <option>Critical Thinking</option>
              <option>Customer Service</option>
              <option>Decision-making</option>
              <option>Delegation</option>
              <option>Innovation</option>
              <option>Leadership</option>
              <option>Management</option>
              <option>Organization</option>
              <option>Time management</option>
              <option>Team-work</option>
              <option>Problem-solving</option>
              <option>Planning</option>
              <option>Observation</option>
            </select>
            <select
              onChange={(e) => setStrengthThree(e.target.value)}
              className="select select-success w-full max-w-md mt-3 mb-5"
            >
              <option disabled selected>
                Strength Three
              </option>
              <option>Coaching</option>
              <option>Collaboration</option>
              <option>Communication</option>
              <option>Critical Thinking</option>
              <option>Customer Service</option>
              <option>Decision-making</option>
              <option>Delegation</option>
              <option>Innovation</option>
              <option>Leadership</option>
              <option>Management</option>
              <option>Organization</option>
              <option>Time management</option>
              <option>Team-work</option>
              <option>Problem-solving</option>
              <option>Planning</option>
              <option>Observation</option>
            </select>
            {strengthOne && strengthTwo && strengthThree && (
              <NextBtn section={"challenge"} setSection={setSection} />
            )}
          </div>
        </div>
      )}

      {/* Bigger Challenge */}
      {section === "challenge" && (
        <div className="pb-10">
          <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-4 mt-4 poppins-i text-gray-500">
            What is the biggest challenge of your next role?
          </h3>
          <p className="text-gray-500 md:text-center my-1 mb-2 poppins-b px-5">
            Write down what you think would be the most challenging task of your
            next job.
          </p>
          <p className="text-rose-500 md:text-center mb-8 poppins-b flex justify-center items-center px-5 gap-2">
            <FcIdea className="text-lg " />
            Tip: Find the most important requirement in the job description.
          </p>
          <div className="lg:max-w-xl md:max-w-lg mx-auto px-5">
            <textarea
              onChange={(e) => setChallenge(e.target.value)}
              className="textarea textarea-success w-full mb-4"
              placeholder="We Suggest Type here (max 300 characters)"
              rows="5"
            ></textarea>
            {challenge && (
              <NextBtn section={"contact"} setSection={setSection} />
            )}
          </div>
        </div>
      )}

      {/* Your contact details */}
      {section === "contact" && (
        <div className="pb-16">
          <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-1 mt-4 poppins-i text-gray-500">
            Add your contact details
          </h3>
          <p className="text-gray-500 md:text-center mt-3 mb-6">
            Please Give your authentic contact information
          </p>
          <div className="px-5 lg:max-w-xl md:max-w-lg w-full mx-auto">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success my-3 block"
            />
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success my-3 block"
            />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success my-3 block"
            />
            <input
              type="text"
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="Linkedin profile URL"
              className="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success my-3 block"
            />
            {phone && linkedin && email && name && (
              <button
                onClick={createCoverLetter}
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full flex items-center gap-2 text-left text-[16px] text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Build my cover letter <MdOutlineCreate />
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoverLetterInput;
