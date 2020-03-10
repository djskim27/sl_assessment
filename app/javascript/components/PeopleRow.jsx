import React from 'react';

const PeopleRow = (props) => {
    return (
        <tr>
            <td>{props.display_name}</td>
            <td>{props.email_address}</td>
            <td>{props.title}</td>
        </tr>
    );
};

export default PeopleRow;