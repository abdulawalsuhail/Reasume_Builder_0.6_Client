import { useEffect, useState } from "react";
import axiosFetch from "../Pages/Api/axiosFetch";

const useToken = (user) => {
  const [token, setToken] = useState("");
 
  const email = user?.currentUser?.email;
  console.log(email);
  useEffect(() => {
    const currentUser = { email: email };

    if (email) {
     axiosFetch.put(`users/${email}`, currentUser)
     .then(response => {
        console.log(response);
        const accessToken = response.data.token
        localStorage.setItem("userToken",accessToken)
        setToken(accessToken)
        
     })
      
    }
  }, [user]);

  return token;
};

export default useToken;
