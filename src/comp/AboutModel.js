import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Model(modelProps) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { modelData } = modelProps;
    return (
        <>
        <Button className="text-nowrap" variant="primary" onClick={handleShow}>About Arthur</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body dangerouslySetInnerHTML={{ __html: modelData }}>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}