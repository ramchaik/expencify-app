import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal 
    isOpen={!!props.selectedOption} 
    onRequestClose={props.onClose}
    contentLabel='Selected Option'>
    <h3>Selected Option</h3>
    { props.selectedOption && <p>{ props.selectedOption }</p> }
    <button onClick={props.onClose}>Okay</button>
  </Modal>
);

export default OptionModal;
