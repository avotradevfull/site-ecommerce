import React, { useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap';
import './ToastMessage.css';

const ToastMessage = ({ bg, title, body}) => {
    const [show, setShow] = useState(true);
  return (
    <ToastContainer position='bottom-right' className='toast-container'>
        <Toast bg={bg} onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <strong>{title}</strong>
                <small>now</small>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
        </Toast>
    </ToastContainer>
  )
}

export default ToastMessage