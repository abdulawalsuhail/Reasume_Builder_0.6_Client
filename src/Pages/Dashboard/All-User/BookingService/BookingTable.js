import React from 'react';
import axiosPrivate from '../../../Api/axiosPrivate';

const BookingTable = ({booking,index,refetch}) => {
 
    const {_id,name,email,country,paymentId,serviceName,time,paid} = booking
    const handleApprove = (id) => {
      axiosPrivate.patch(`/paidstatus/${id}`)
      .then(res => {
        console.log(res.data);
        if(res.data.matchedCount > 0 ){
          refetch()
        }
      })
    }
    return (
        <tr>
        <th  className='border-2 border-gray-200'>{index +1}</th>
        <td  className='border-2 border-gray-200'>{name}</td>
        <td  className='border-2 border-gray-200'>{email}</td>
        <td className='uppercase border-2 border-gray-200'>{serviceName}</td>

        <td  className='border-2 border-gray-200'>{country}</td>
        <td  className='border-2 border-gray-200'>{paymentId}</td>
        <td  className='border-2 border-gray-200'>{time}</td>
        <td  className='border-2 border-gray-200'>
         {
          paid === true ?  <button disabled  className='btn btn-primary btn-sm text-white'>Approved</button>:<button onClick={()=>handleApprove(_id)} className='btn btn-primary btn-sm text-white'>Approve</button>
         }
        </td>
      </tr>
    );
};

export default BookingTable;