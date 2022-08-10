import React from 'react';

const AlluserTable = ({user,index}) => {
    return (
        <tr>
        <th>{index +1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
};

export default AlluserTable;