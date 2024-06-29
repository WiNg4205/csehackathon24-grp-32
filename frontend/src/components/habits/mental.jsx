import React from 'react';
import './habits.css'; // Assuming you have a CSS file for this component
import NavBar from '../NavBar.jsx';

const Mental = () => {

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Mental</h1>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(1)}>Meditation</button>
                <button className="box" onClick={() => handleBoxClick(2)}>Journalling</button>
                <button className="box" onClick={() => handleBoxClick(3)}>Gardening</button>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(4)}>Deep breathing</button>
                <button className="box" onClick={() => handleBoxClick(5)}>Cuddling</button>
                <button className="box" onClick={() => handleBoxClick(6)}>Drawing</button>
            </div>
            <NavBar />
        </div>
    );
};

export default Mental;