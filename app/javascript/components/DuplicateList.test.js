import React from 'react'
import { render } from '@testing-library/react'
import DuplicateList from './DuplicateList'

test('it renders the component', () => {
    const props = [{
        people: [
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
        ]
    }];

    const { container } = render(<DuplicateList duplicates={props} />)
});