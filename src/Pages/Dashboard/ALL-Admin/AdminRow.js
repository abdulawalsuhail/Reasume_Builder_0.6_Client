import React from 'react';
import Swal from 'sweetalert2';
import axiosPrivate from '../../Api/axiosPrivate';

const AdminRow = ({admin,index,refetch}) => {
    const {role,email} = admin
    const removeAdmin = () => {
        axiosPrivate.patch(`/remove-admin/${email}`)
        .then(response => {
            if (response.data.modifiedCount > 0) {
                Swal.fire({
                  icon: "success",
                  title: "successfully make a admin",
                  showConfirmButton: false,
                  timer: 1500,
                });
                refetch();
              }
        }).catch( err => {
            if (err.response.status === 403) {
              Swal.fire({
                icon: "error",
                title: "failed to make an admin",
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
        <td className='uppercase font-bold'>{role}</td>
        <td>
            <button onClick={removeAdmin} className='btn btn-xs bg-white text-gray-600 hover:bg-white'>remove admin</button>
        </td>
       </tr>
    );
};

export default AdminRow;