import React from 'react'
import { render } from '@testing-library/react'
import PeopleRow from './PeopleRow'

test('it renders the component', () => {
    const props = {
                display_name: "test",
                email_address: "test",
                title: "test"
            };


    const { container } = render(<PeopleRow person={props} />)
});