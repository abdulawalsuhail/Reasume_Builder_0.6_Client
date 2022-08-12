import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../../../Shared/Loading/Loading";
import axiosPrivate from "../../../Api/axiosPrivate";
import BookingTable from "./BookingTable";

const BookingService = () => {
  const [bookings, setBooking] = useState([]);
  const { data, isLoading, refetch } = useQuery(["booking-service"], () => {
    axiosPrivate.get(`/booking-service`).then(
      (response) => {
        setBooking(response.data);
      },
      (err) => {
        if (err.response.status === 401 || err.response.status) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      }
    );
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-4xl text-center mt-4">All Booking</h1>
      <div class="overflow-x-auto mt-6">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service Name</th>
                <th>Country</th>
                <th>Transaction ID</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <BookingTable key={booking._id} booking={booking} index={index} />
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default BookingService;
