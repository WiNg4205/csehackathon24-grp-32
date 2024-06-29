import React from 'react';
import './habits.css'; // Assuming you have a CSS file for this component
import NavBar from '../NavBar.jsx';

const Financial = () => {

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Financial</h1>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(1)}>Working overtime</button>
                <button className="box" onClick={() => handleBoxClick(2)}>Adding to savings account</button>
                <button className="box" onClick={() => handleBoxClick(3)}>Side hustle</button>
            </div>
            <div className="row">
                <button className="box" onClick={() => handleBoxClick(4)}>Business</button>
                <button className="box" onClick={() => handleBoxClick(5)}>Cutting down on expenses</button>
                <button className="box" onClick={() => handleBoxClick(6)}>Loanshark</button>
            </div>
            <NavBar />
        </div>
    );
};

export default Financial;