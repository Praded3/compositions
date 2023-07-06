import React, {Component} from "react";
import { Backdrop, ModalContainer, Button } from './Modal.styled';
import {createPortal} from 'react-dom';

const modalRoot = document.querySelector('#modal-root'); 

export class Modal extends Component {
    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.toogleModal();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.toogleModal();
        };
    }

    render() {
        return createPortal(
            <Backdrop onClick={this.handleBackdropClick}>
                <ModalContainer>
                    <Button onClick={() => this.props.toogleModal()}
                    >
                        Off
                    </Button>
                    {this.props.children}
                </ModalContainer>
            </Backdrop>,
            modalRoot,
        );
    }
}