import React from 'react'
import { render } from '@testing-library/react'
import CharacterFrequencyTable from './CharacterFrequencyTable'

test('it renders the component', () => {
    const props = [{
        character: 'a',
        frequency: 5
    }];

    const { container } = render(<CharacterFrequencyTable characterFrequencies={props} />)
});