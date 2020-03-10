import React from 'react';

const CharacterFrequencyRow = ({character, frequency}) => {
    return (
        <tr>
            <td>{character}</td>
            <td>{frequency}</td>
        </tr>
    );
};

export default CharacterFrequencyRow;