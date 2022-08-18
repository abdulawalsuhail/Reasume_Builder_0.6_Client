import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../../Api/axiosPrivate";
import Loading from "../../../Shared/Loading/Loading";
import { HiPhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import CoverLetterNavbar from "./CoverLetterNavbar";
const CoverLetterTemplate = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["coverLetter"], () =>
    axiosPrivate.get(`coverLetterInfo/${id}`)
  );

  // download cover letter
  const componentRef = useRef();
  const handelDownload = useReactToPrint({
    content: () => componentRef.current,
  });

  if (isLoading) {
    return <Loading />;
  }
  const { name, email, experience, jobRole, linkedin, phone, challenge } =
    data?.data;
  const { skillOne, skillTwo, skillThree } = data?.data?.skill;
  const { strengthOne, strengthTwo, strengthThree } = data?.data?.strength;
  return (
    <div className="bg-[#f4f7f8] min-h-screen pb-20">
      <CoverLetterNavbar />
      <div className="w-[65%] mx-auto">
        <button
          onClick={handelDownload}
          className="btn btn-danger ml-auto block mt-4 mb-2"
        >
          Download
        </button>
      </div>
      <div className="w-[65%] mx-auto bg-white  ">
        <div ref={componentRef} className="p-16">
          <h2 className="text-3xl poppins-r text-gray-700">{name}</h2>
          <h4 className="text-lg poppins-r text-gray-600">{jobRole}</h4>
          <div className="flex gap-5 my-4 text-[13px] poppins-t">
            <p className="flex gap-1 place-items-center">
              <HiPhone /> {phone}
            </p>
            <p className="flex gap-1 place-items-center">
              <MdOutlineMail /> {email}
            </p>
            <p className="flex gap-1 place-items-center">
              <TbBrandLinkedin /> {linkedin}
            </p>
          </div>
          <div className="text-[15px] poppins-t text-gray-600">
            <p className="mb-4">Dear [Hiring Manager's Name],</p>

            <p className="mb-4">
              You must be receiving floods of resumes for the role of {jobRole}.
              So, I will cut short. I believe I would be a great fit for the{" "}
              {jobRole}
              position at [Company Name]. Here's what makes me confident I can
              pull this off.
            </p>

            <p className="mb-3">
              I've recently finished my internship at [Company Name] [Department
              Name]. This experience was incredibly valuable, as it helped me
              kick off my career in {jobRole} in three different fields:
            </p>

            <ul class="list-disc pl-4 pb-3">
              <li>
                I've further developed my {skillOne} and {skillTwo} I learned
                during my [Education field] at [University Name].
              </li>
              <li>
                I also contributed to the [Project/Responsibility] that allowed
                us to [Improvements].
              </li>
              <li>
                Furthermore, I assisted the department lead and provided
                material for [Project/Responsibility].
              </li>
            </ul>

            <p className="mb-4">
              The reason why I consider the above a defining experience for me
              is the results I was able to achieve. skill three helped me to
              [improvement] by [30%].
            </p>

            <p>
              Additionally, my work at [Previous Company Name] helped me gain
              first-hand experience in {strengthOne}, {strengthTwo} and{" "}
              {strengthThree}.
            </p>
            <p className="my-4">
              Above all requirements, I believe you are looking for a capable
              person who can address challenging tasks such as Biggest Chalange.
              I can fulfil this expectation, because {challenge}
            </p>

            <p className="mb-4">
              Could we grab a coffee and have a chat about how do you see a next
              job develop into an integral part of the [Company Name]'s team?
            </p>
            <div>
              <p>Best Regards,</p>
              <p>
                {name}, {jobRole}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate;
