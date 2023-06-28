import React from 'react';
import { ColorsContsiner, ColorsList, ColorTitle, ColorBtn, ColorItem } from './ColorPicker.styled';

export class ColorPicker extends React.Component{

    state = {
        activeOptionIndex: 1,
    }

    setActiveIndex = (index) => {
        this.setState({ activeOptionIndex: index });
    }
    
    render() {
        const {label} = this.props.colors[this.state.activeOptionIndex];        
        
        return (
            <ColorsContsiner>
                <ColorTitle>
                    it is  {label} color
                </ColorTitle>
                <ColorsList >
                    {this.props.colors.map(({ label, color },  index) =>
                        <ColorItem
                            key={label}
                        >
                            <ColorBtn
                                color={color}
                                // index={index}
                                style={{border:
                                index === this.state.activeOptionIndex ?
                                    `4px solid black` : `none`
                                }}
                                onClick={()=>{this.setActiveIndex(index)}}
                            >
                                {/* {label} */}
                            </ColorBtn>
                        </ColorItem>
                    )}
                    
                </ColorsList>
            </ColorsContsiner>
            
        )
    }
}

