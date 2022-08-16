import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../../Api/axiosPrivate";
import Loading from "../../../Shared/Loading/Loading";
const CoverLetterTemplate = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["coverLetter"], () =>
    axiosPrivate.get(`coverLetterInfo/${id}`)
  );
  if (isLoading) {
    return <Loading />;
  }
  const { name, email, experience, jobRole, linkedin, phone, challenge } =
    data?.data;
  const { skillOne, skillTwo, skillThree } = data?.data?.skill;
  const { strengthOne, strengthTwo, strengthThree } = data?.data?.strength;
  return (
    <div>
      <h2>This is cover letter template</h2>
      <h2>Name: {name}</h2>
      <h2>{skillTwo}</h2>
      <h2>{strengthThree}</h2>
    </div>
  );
};

export default CoverLetterTemplate;
