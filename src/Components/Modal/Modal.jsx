import React, {Component} from "react";
import {Backdrop, ModalContainer} from './Modal.styled';


export class Modal extends Component {
    render(){
        return (
            <Backdrop>
                <ModalContainer>
                    {this.props.children}
                </ModalContainer>
            </Backdrop>
        )
    }
}