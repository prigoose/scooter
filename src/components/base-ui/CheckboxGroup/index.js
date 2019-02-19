import React from 'react';
import { Checkbox } from 'semantic-ui-react'
import { Heading } from '../Heading'

const CheckboxGroup = ({title, options, handleFilter}) => {
    const displayCheckboxes = options.map((option, index) => (
        <div key={index} style={{marginRight: 8, display: 'flex', flexDirection: 'row'}}>
            <Checkbox 
            style={{marginRight: 5}}
            label={option}
            onChange={() => handleFilter(option)}
            />
        </div>
    ));
    return (
        <div>
        <Heading>{title}</Heading>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        {displayCheckboxes}
        </div>
        </div>
    )
}

export default CheckboxGroup;
