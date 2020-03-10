import React from 'react'
import { render } from '@testing-library/react'
import DuplicateTable from './DuplicateTable'

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

    const { container } = render(<DuplicateTable people={props} />)
});