import React from 'react';
import './habits.css'; // Assuming you have a CSS file for this component
import NavBar from '../NavBar.jsx';

const Physical = () => {

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Physical</h1>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(1)}>Soccer</button>
                <button className="box" onClick={() => handleBoxClick(2)}>Oztag</button>
                <button className="box" onClick={() => handleBoxClick(3)}>Running</button>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(4)}>Cricket</button>
                <button className="box" onClick={() => handleBoxClick(5)}>Gym</button>
                <button className="box" onClick={() => handleBoxClick(6)}>Basketball</button>
            </div>
            <NavBar />
        </div>
    );
};

export default Physical;