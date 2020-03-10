import React from 'react';
import PeopleRow from "./PeopleRow";

const DuplicateTable = ({people}) => {
    const DuplicateRowJsx = people.map( person => <PeopleRow key={person.id} {...person} />);

    return (
        <div className="mb-5 card">
            <table className='table table-striped responsive'>
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Job Title</th>
                </tr>
                </thead>
                <tbody>
                    {DuplicateRowJsx}
                </tbody>
            </table>
        </div>
    );
};

export default DuplicateTable;