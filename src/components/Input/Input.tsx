import React,  {useState, useEffect} from 'react';
import './Input.css'; 

interface InputProps {
        numA:string; 
        numB:string; 
        setNumA:(arg: string) => void;
        setNumB:(arg: string) => void; 
}

export const Input = ( {numA, numB, setNumA, setNumB}:InputProps) => {
    
    return (
        <div>
            <input id='TN1' type='number' className='numInput' onChange={(evt) => setNumA(evt.target.value)} value={numA}/>

            <input id='TN2' type='number' className='numInput' onChange={(evt) => setNumB(evt.target.value)} value={numB}/>
<<<<<<< HEAD
        <h2> teste</h2>
=======

            <h2> teste teste</h2>

>>>>>>> d67d76c9381cf4aac08e76ab157c77b4b7e9371a
        </div>
    );
}
