import React,  {useState, useEffect} from 'react';
import './Result.css'

interface ResultProps {
    numA:string; 
    numB:string; 
}

export const Result = ({numA, numB}:ResultProps) => {
    let [soma,setSoma] = useState<number>(0); 

    return (
        <div>

        <button className='click' onClick = {
            () => setSoma(parseInt(numA ? numA : "0") + parseInt(numB ? numB : "0"))
        }>
             +
        </button> 

        <h2 className='result'> {soma}  </h2>
        </div> 

    );
}