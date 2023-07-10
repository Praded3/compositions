import React  from 'react';
import { FeebackContainer, Total, ControlsContainer, ThumbUp, ThumbDown  } from "./Feedback.styled";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import axios from "axios";

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

    getUser = async () => {

        fetch("http://127.0.0.1:8000/users/").then(
    (response) => {
                if (!response.ok) {
          console.log('first', response.status)
          throw new Error(response.status);
          
      }
      return response.json();
    }
  );

        // axios.defaults.baseURL = process.env.BASE_URL;
        // axios.defaults.headers.get['Accepts'] = 'application/json';
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

        // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        // const response = await axios.get('http://127.0.0.1:8000/users/');
        // console.log(response);
    }




    render() {
        return (
            <FeebackContainer>
                <button
                    onClick={this.getUser}
                >get</button>
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

