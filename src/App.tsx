import React, {useState, useEffect, SetStateAction} from 'react';
import './App.css'; 

// Aqui a Arrow Function é exportada 
export const App = () => {

    const [num1, setNum1] = useState<string>(""); // Aqui se define o tipo e o valor incial deste. 
    const [num2, setNum2] = useState<string>(""); 
    const [soma,setSoma] = useState<number>(0); 

    useEffect(() => {
        console.log(11); 
    }, [num1])

    useEffect (() => {
        console.log(22);
    }, [num2])


    return (
        <div>
           <h1>  {process.env.REACT_APP_TITLE} </h1> 
            <hr /> 
          
          <input id='TN1' type='number' className='num1' onChange={(evt) => setNum1(evt.target.value)} value={num1}/>

          <input id='TN2' type='number' className='num2' onChange={(evt) => setNum2(evt.target.value)} value={num2}/>
          <div>
            <button className='click' onClick = {
                () => setSoma(parseInt(num1) + parseInt(num2))
            } >
                 +
            </button>

            <h2 className='result'> {soma}  </h2>
            </div> 
            <hr /> 
            <h2> {process.env.REACT_APP_FOOTER} </h2>
        </div>
    ); 
} 


