import React from 'react';

const CharacterFrequencyRow = (props) => {
    return (
        <tr>
            <td>{props.character}</td>
            <td>{props.frequency}</td>
        </tr>
    );
};

export default CharacterFrequencyRow;