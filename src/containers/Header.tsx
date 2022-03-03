import React from 'react'; 
import './Header.css'

export const Header = () => {
    return (
        <header> 
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <hr /> 
        </header>
    );
}