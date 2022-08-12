import React from 'react';

const BookingTable = ({booking,index}) => {
    console.log(booking);
    const {name,email,country,paymentId,serviceName,time} = booking
    return (
        <tr>
        <th  className='border-2 border-gray-200'>{index +1}</th>
        <td  className='border-2 border-gray-200'>{name}</td>
        <td  className='border-2 border-gray-200'>{email}</td>
        <td className='uppercase border-2 border-gray-200'>{serviceName}</td>

        <td  className='border-2 border-gray-200'>{country}</td>
        <td  className='border-2 border-gray-200'>{paymentId}</td>
        <td  className='border-2 border-gray-200'>{time}</td>
      </tr>
    );
};

export default BookingTable;