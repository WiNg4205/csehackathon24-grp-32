import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import NavBar from './NavBar.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const Dashboard = () => {
    const [habitNames, setHabitNames] = useState(['habit1', 'habit2', 'habit3', 'habit4', 'habit5', 'habit6']);
    const [habitIds, setHabitIds] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [show, setShow] = useState(false);
    const [selectedHabitId, setSelectedHabitId] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (habitId) => {
        setSelectedHabitId(habitNames[habitIds.indexOf(habitId)]);
        setShow(true);
    };

    // const fileToDataUrl = async (file) => {
    //     const reader = new FileReader();
    //     const dataUrlPromise = new Promise((resolve, reject) => {
    //       reader.onerror = reject;
    //       reader.onload = () => resolve(reader.result);
    //     });
    //     reader.readAsDataURL(file);
    //     return dataUrlPromise;
    // };


    const handleFileChange = async(event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile && selectedHabitId) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('userId', localStorage.getItem('userId'));
            formData.append('habitId', selectedHabitId);

            try {
                const response = await axios.post('http://localhost:3000/uploadStreak', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File uploaded successfully:', response.data);
            } catch (error) {
                console.error('Error uploading file:', error);
            }

            setShow(false);
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const habitList = [];
        axios.get(`http://localhost:3000/userDetails?userId=${userId}`).then((response) => {
            const habits = response.data.habits;
            const habitKeys = Object.keys(habits);
            setHabitIds(habitKeys);
            const habitPromises = habitKeys.map(key => {
                return axios.get(`http://localhost:3000/habitDetails?habitId=${key}`);
            });
        
            Promise.all(habitPromises).then((responses) => {
                responses.forEach(response2 => {
                    const habit = response2.data;
                    habitList.push(habit.name);
                });
                while (habitList.length < 6) {
                    habitList.push('empty');
                }
                setHabitNames(habitList);
            });
        });        
    }, []);

    return (
        <div className="dashboard-container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Upload image for {selectedHabitId}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <input
                        type="file"
                        name="edit_image"
                        id="update-image"
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={handleFileChange}
                    />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpload}>
                    Upload
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="header">
                <h1>Habits</h1>
            </div>
            <div className="row">
            {habitNames.slice(0, 3).map((habit, index) => (
                <Button key={index} variant="primary" className='box' onClick={() => handleShow(habitIds[index])}>
                    {habit}
                </Button>
            ))}
            </div>
            <div className="row">
                {habitNames.slice(3, 6).map((habit, index) => (
                    <Button key={index + 3} variant="primary" className='box' onClick={() => handleShow(habitIds[index + 3])}>
                        {habit}
                    </Button>
                ))}
            </div>
            <NavBar />
        </div>
    );
};

export default Dashboard;
