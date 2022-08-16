import { useEffect, useState } from 'react';
import axiosPrivate from '../Pages/Api/axiosPrivate';

const useExpert = (user) => {
    const [expert,setExpert] = useState(false)
    const [expertLoading,setExpertLoading] = useState(true)

    const email = user?.email
    useEffect(()=> {
    
        if(email){
         axiosPrivate.get(`/expert/${email}`)
         .then(res => {
            console.log(res.data);
             setExpert(res.data)
             setExpertLoading(false)
         })
        }
        },[user])
    return [expert,expertLoading]
};

export default useExpert;