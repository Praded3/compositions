import React from 'react';
import { MaterialItem } from '../MaterialItem/MaterialItem';

export const MaterialsContainer = ({ items, ...otherProps}) => {
    return (
        <ul >
            {items.map(item =>(
                <li key={item.id}>
                    <MaterialItem item={item} {...otherProps} />
                    <hr />
                    
                </li>
            ))}
        </ul>
    );
};
