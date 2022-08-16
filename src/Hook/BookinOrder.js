import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import axiosPrivate from "../Pages/Api/axiosPrivate";

const BookinOrder = () => {
  const [orders, setOrders] = useState([]);

  const [user] = useAuthState(auth);
  useEffect(() => {
    axiosPrivate.get(`/order/${user?.email}`).then((res) => {
      setOrders(res.data);
    });
  }, [user]);
  return [orders];
};

export default BookinOrder;
