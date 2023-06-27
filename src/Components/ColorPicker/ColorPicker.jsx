import React from 'react';
import { Fragment } from "react";
import { ColorsList, ColorTitle, ColorBtn, ColorItem } from './ColorPicker.styled';

export class ColorPicker extends React.Component{

    render() {
        return (
            <Fragment>
                <ColorTitle>
                    it is color picker
                </ColorTitle>
                <ColorsList >
                    {this.props.colors.map(({ label, color }) =>
                        <ColorItem key={label}>
                            <ColorBtn color={  color }>
                                {label}
                            </ColorBtn>
                        </ColorItem>
                    )}
                    
                </ColorsList>
            </Fragment>
        )
    }
}

