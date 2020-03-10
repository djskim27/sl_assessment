import React from 'react';

const Button = ({title, action}) => {
    return (
        <button className='btn btn-primary' onClick={action}>
            {title}
        </button>
    );
};

export default Button;