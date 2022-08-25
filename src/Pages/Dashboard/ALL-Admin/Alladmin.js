import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import UserInformation from "../../../Hook/UserInformation";
import axiosPrivate from "../../Api/axiosPrivate";
import AdminRow from "./AdminRow";

const Alladmin = () => {
  const [user] = useAuthState(auth)
  const [users] = UserInformation(user)
    const [admins,setAdmin] = useState([])
    const {data,isLoading,refetch} = useQuery(["admin"],()=> {
        axiosPrivate.get('/admin?role=admin')
        .then(res => {
            setAdmin(res.data)
        }).catch(err => {
            if(err.response.status === 401 || err.response.status){
                signOut(auth)
                Navigate("/")
                localStorage.removeItem("userToken")
            }
        })
    })
    return (
        <div>
            <h1 className="text-4xl text-center mt-4">Admin</h1>

             <div class="overflow-x-auto mt-6">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Email</th>
                <th>Role</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
             {
                admins.map((admin,index) => <AdminRow 
                key={admin._id} 
                admin={admin}
                index={index}
                refetch={refetch}
                currentUser={users?._id}
                >

                </AdminRow>)
             }
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default Alladmin;