import React from 'react';
import DuplicateTable from './DuplicateTable'

const DuplicateList = ({duplicates}) => {
    const DuplicateTableJsx = duplicates.map( (people, index) => <DuplicateTable key={index} {...people} />);

    return (
        <div>
            {DuplicateTableJsx}
        </div>
    );
};

export default DuplicateList;