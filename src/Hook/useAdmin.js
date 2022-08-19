import { useEffect, useState } from 'react';
import axiosPrivate from '../Pages/Api/axiosPrivate';

const useAdmin = (user) => {

    const [admin,setAdmin]  = useState(false)
    const [adminLoading,setLoading] = useState(true)

    const email = user?.email
   useEffect(()=> {
    
   if(email){
    axiosPrivate.get(`/admin/${email}`)
    .then(res => {
        setAdmin(res.data)
        setLoading(false)
    })
   }
   },[user])
    return [admin,adminLoading]
};

export default useAdmin;