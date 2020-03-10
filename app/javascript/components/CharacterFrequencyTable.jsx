import React from 'react';
import CharacterFrequencyRow from './CharacterFrequencyRow'

const CharacterFrequencyTable = ({characterFrequencies}) => {
    const CharFreqRowJsx = characterFrequencies.map( (character, index) => <CharacterFrequencyRow key={index} character={character.character} frequency={character.frequency} />);

    return (
        <div>
            <div>
                <table className='table table-striped responsive'>
                    <thead>
                    <tr>
                        <th>Character</th>
                        <th>Frequency</th>
                    </tr>
                    </thead>
                    <tbody>
                        {CharFreqRowJsx}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CharacterFrequencyTable;