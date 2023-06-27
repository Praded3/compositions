import React  from 'react';
import { FeebackContainer, Total, ControlsContainer, ThumbUp, ThumbDown  } from "./Feedback.styled";
import { HiThumbUp, HiThumbDown  } from "react-icons/hi";

export class Feedback extends React.Component{

    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        //
    }

    state = {
        value: this.props.initialValue,
    };

    // if need new value
    // handleIncrement = () => {
    //     this.setState({
    //         value:10,
    //     });

        
    // };

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
    };

    handleDecrement = (event) => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            };
        });
    };

    render() {
        return (
            <FeebackContainer>
                <Total>
                    {this.state.value}
                </Total>
                <ControlsContainer>
                    <ThumbUp type='button'
                        onClick={this.handleIncrement}>
                        <HiThumbUp/>
                    </ThumbUp>
                    <ThumbDown type='button'
                        onClick={this.handleDecrement}>
                        <HiThumbDown/>
                    </ThumbDown>
                </ControlsContainer>
            </FeebackContainer>
        );
    }
};

