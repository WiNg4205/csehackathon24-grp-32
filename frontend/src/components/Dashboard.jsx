import React from 'react';
import './Dashboard.css'; // Assuming you have a CSS file for this component
import NavBar from './NavBar.jsx';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBoxClick = (boxId) => {
        if (boxId === 1) {
            navigate("/habits/physical");
        } else if (boxId === 2) {
            navigate("/habits/mental");
        } else if (boxId === 3) {
            navigate("/habits/intellectual");
        } else if (boxId === 4) {
            navigate("/habits/social");
        } else if (boxId === 5) {
            navigate("/habits/financial");
        } else if (boxId === 6) {
            navigate("/habits/spiritual");
        }
    };

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Habits</h1>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(1)}>Physical</button>
                <button className="box" onClick={() => handleBoxClick(2)}>Mental</button>
                <button className="box" onClick={() => handleBoxClick(3)}>Intellectual</button>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(4)}>Social</button>
                <button className="box" onClick={() => handleBoxClick(5)}>Financial</button>
                <button className="box" onClick={() => handleBoxClick(6)}>Spiritual</button>
            </div>
            <NavBar />
        </div>
    );
};

export default Dashboard;