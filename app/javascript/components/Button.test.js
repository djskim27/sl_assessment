import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

test('it renders the component', () => {
    const title = "test";
    function action(){
        console.log("HELLO")
    };

    const { container } = render(<Button title={title} action={()=>{action()}} />)
});