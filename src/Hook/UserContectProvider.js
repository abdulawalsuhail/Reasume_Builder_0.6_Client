import { useQuery } from "@tanstack/react-query";
import { signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';
import axiosPrivate from '../Pages/Api/axiosPrivate';
export const userContext = createContext()
const UserContectProvider = (props) => {
    const [user] = useAuthState(auth)
   
    const [users, setUser] = useState({})
    const { data, isLoading, refetch } = useQuery(["user"], () => {
        axiosPrivate
          .get(`/single/user/${user?.email}`)
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            if (err.response.status === 401 || err.response.status === 403) {
              signOut(auth);
              Navigate("/");
              localStorage.removeItem("userToken");
            }
          });
      });
    return <userContext.Provider value={
        {users:users}
    }>
       
    </userContext.Provider>
};

export default UserContectProvider;