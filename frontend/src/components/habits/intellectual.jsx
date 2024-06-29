import React from 'react';
import './habits.css'; // Assuming you have a CSS file for this component
import NavBar from '../NavBar.jsx';

const Intellectual = () => {

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Intellectual</h1>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(1)}>Reading</button>
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

export default Intellectual;