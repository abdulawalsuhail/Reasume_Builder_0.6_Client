import React from 'react';
import Swal from 'sweetalert2';
import axiosPrivate from '../../Api/axiosPrivate';

const AlluserTable = ({user,index,refetch}) => {

  const {email,role} = user

  const makeAdmin = () => {
    axiosPrivate.put(`/users/admin/${email}`)
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
    }).catch(function (error) {
      if (error.response.status === 403) {
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
        <td>
          {role === "admin"? <button disabled className='btn btn-secondary btn-xs'>Admin</button> :<button onClick={makeAdmin} className='btn btn-xs btn-primary text-white'>Make Admin</button>
          }
        </td>
        <td><button className='btn btn-xs bg-white hover:bg-white text-black'>Make Expert</button></td>
      </tr>
    );
};

export default AlluserTable;