import React  from 'react';
import { DropdownContainer, ShowBtn, DropdownMenu } from "./Dropdown.styled";

export class Dropdown extends React.Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    render() {
        return (
            <DropdownContainer>
                <ShowBtn
                    type='button'
                    // onMouseOver={this.toggle}
                    onClick={this.toggle}
                >
                    {this.state.visible ? 'Hide': 'Show'}
                </ShowBtn>
                {this.state.visible &&
                    <DropdownMenu>Drop menu</DropdownMenu>}
            </DropdownContainer>
        );
    }
}