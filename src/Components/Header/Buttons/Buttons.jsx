import React, {Component}  from 'react';
import { BtnList, BtnItem, RegBtn, SubBtn } from './Buttons.styled'
import { Modal } from '../../Modal/Modal';
import { LoginForm } from '../../LoginForm/LoginForm';

export class Buttons extends Component{
    state = {
        showModal: false
    };
    
    toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    };
    render() { 
         return (
             
             <BtnList>
                {this.state.showModal &&
                    <Modal toogleModal={this.toogleModal}>
                        <LoginForm/>
                    </Modal>
                }
                <BtnItem>
                    <RegBtn
                        onClick={this.toogleModal}
                        type='button'>
                        Реєстрація
                    </RegBtn>
                </BtnItem>
                <BtnItem>
                    <SubBtn
                        type='button'>
                        Особіистий кабінет
                    </SubBtn>
                </BtnItem>
            </BtnList>

    );
    }
   
} 
