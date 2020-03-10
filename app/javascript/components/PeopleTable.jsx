import React from 'react';
import PeopleRow from './PeopleRow';

const PeopleTable = ({people}) => {
    const PeopleRowJsx = people.map( person => <PeopleRow key={person.id} {...person} />);
    return (
        <div>
            <table className='table table-striped responsive'>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Job Title</th>
                    </tr>
                </thead>
                <tbody>
                    {PeopleRowJsx}
                </tbody>
            </table>
        </div>
    );
};

export default PeopleTable;