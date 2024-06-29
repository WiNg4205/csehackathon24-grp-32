import React from 'react';
import './Dashboard.css'; // Assuming you have a CSS file for this component
import NavBar from './NavBar.jsx';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBoxClick = () => {
    };

    return (
        <div className="dashboard-container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Upload image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <input type="file" name="edit_image" id="update-image" accept="image/png, image/jpg, image/jpeg" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Upload
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="header">
                <h1>Habits</h1>
            </div>
            <div className="row">
                <Button variant="primary" className='box' onClick={handleShow}>Empty</Button>
                <Button variant="primary" className='box' onClick={handleShow}>Empty</Button>
                <Button variant="primary" className='box' onClick={handleShow}>Empty</Button>
            </div>
            <div className="row">
                <Button variant="primary" className='box' onClick={handleShow}>Empty</Button>
                <Button variant="primary" className='box' onClick={handleShow}>Empty</Button>
                <Button variant="primary" className='box' onClick={handleShow}>Empty</Button>
            </div>
            <NavBar />
        </div>
    );
};

export default Dashboard;