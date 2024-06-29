import React from 'react';
import './habits.css'; // Assuming you have a CSS file for this component
import NavBar from '../NavBar.jsx';

const Spiritual = () => {

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Spiritual</h1>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(1)}>Catholic</button>
                <button className="box" onClick={() => handleBoxClick(2)}>Prayer</button>
                <button className="box" onClick={() => handleBoxClick(3)}>Buddhism</button>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(4)}>Islam</button>
                <button className="box" onClick={() => handleBoxClick(5)}>Atheist</button>
                <button className="box" onClick={() => handleBoxClick(6)}>Other</button>
            </div>
            <NavBar />
        </div>
    );
};

export default Spiritual;