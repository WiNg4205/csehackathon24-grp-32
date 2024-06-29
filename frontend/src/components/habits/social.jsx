import React from 'react';
import './habits.css'; // Assuming you have a CSS file for this component
import NavBar from '../NavBar.jsx';

const Social = () => {

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Social</h1>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(1)}>Cooking</button>
                <button className="box" onClick={() => handleBoxClick(2)}>Dance class</button>
                <button className="box" onClick={() => handleBoxClick(3)}>Volunteering</button>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(4)}>Pool</button>
                <button className="box" onClick={() => handleBoxClick(5)}>Gaming with the boys</button>
                <button className="box" onClick={() => handleBoxClick(6)}>Late night maccas run</button>
            </div>
            <NavBar />
        </div>
    );
};

export default Social;