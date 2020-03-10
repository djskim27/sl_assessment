import React from 'react'
import { render } from '@testing-library/react'
import PeopleTable from './PeopleTable'

test('it renders the component', () => {
    const props = [
        {
            display_name: "test",
            email_address: "test",
            title: "test"
        },
        {
            display_name: "test",
            email_address: "test",
            title: "test"
        }
    ];

    const { container } = render(<PeopleTable people={props} />)
});