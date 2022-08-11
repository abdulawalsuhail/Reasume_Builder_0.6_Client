import React from 'react';

const AlluserTable = ({user,index}) => {
    return (
        <tr>
        <th>{index +1}</th>
        <td>{user.email}</td>
        <td><button className='btn btn-sm btn-primary text-white'>Make Admin</button></td>
        <td><button className='btn btn-sm bg-white hover:bg-white text-black'>Make Expert</button></td>
      </tr>
    );
};

export default AlluserTable;