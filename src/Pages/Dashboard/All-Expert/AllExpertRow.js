import React from 'react';
import Swal from 'sweetalert2';
import axiosPrivate from '../../Api/axiosPrivate';

const AllExpertRow = ({expert,index,refetch}) => {
    const {email,writer} = expert
    const removeExpert = () => {
        axiosPrivate.patch(`/remove-expert/${email}`)
        .then(response => {
            if (response.data.modifiedCount > 0) {
                Swal.fire({
                  icon: "success",
                  title: "remove expert success",
                  showConfirmButton: false,
                  timer: 1500,
                });
                refetch();
              }
        }).catch( err => {
            if (err.response.status === 403) {
              Swal.fire({
                icon: "error",
                title: "failed to remove expert",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
    }
    return (
        <tr>
        <th>{index +1}</th>
        <td>{email}</td>
        <td className='uppercase font-bold'>{writer}</td>
        <td>
            <button onClick={removeExpert} className='btn btn-xs bg-white text-gray-600 hover:bg-white'>remove expert</button>
        </td>
       </tr>
    );
};

export default AllExpertRow;