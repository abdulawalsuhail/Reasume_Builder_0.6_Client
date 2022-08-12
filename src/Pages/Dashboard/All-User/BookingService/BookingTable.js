import React from 'react';

const BookingTable = ({booking,index}) => {
    console.log(booking);
    const {name,email,country,paymentId,serviceName,time} = booking
    return (
        <tr>
        <th>{index +1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td className='uppercase'>{serviceName}</td>

        <td>{country}</td>
        <td>{paymentId}</td>
        <td>{time}</td>
      </tr>
    );
};

export default BookingTable;