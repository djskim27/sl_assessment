import React from 'react'
import { render } from '@testing-library/react'
import CharacterFrequencyRow from './CharacterFrequencyRow'

test('it renders the component', () => {
    const props = {
        character: 'a',
        frequency: 5
    };

    const { container } = render(<CharacterFrequencyRow character={props.character} frequency={props.frequency} />)
});