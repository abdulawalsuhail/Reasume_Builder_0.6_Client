import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import axiosPrivate from "../../Api/axiosPrivate";
import AllExpertRow from "./AllExpertRow";

const AllExpert = () => {
  const [experts, setExperts] = useState([]);
  const { data, isLoading, refetch } = useQuery(["expert"], () => {
    axiosPrivate
      .get("/expert?writer=expert")
      .then((res) => {
        setExperts(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      });
  });
  return (
    <div>
      <h1 className="text-4xl text-center mt-4">Expert</h1>

      <div class="overflow-x-auto mt-6">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Email</th>
              <th>role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {experts.map((expert, index) => (
              <AllExpertRow
                key={expert._id}
                expert={expert}
                index={index}
                refetch={refetch}
              ></AllExpertRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllExpert;
