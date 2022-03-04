import React from 'react'; 
import './Footer.css';

export const Footer = () => {
    return (
        <div className='Footer'>
            <hr /> 
            <h3> {process.env.REACT_APP_FOOTER} </h3>
        </div>
    );
}