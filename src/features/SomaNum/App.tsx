import React, {useState, useEffect} from 'react';
import { Header } from '../../containers/Header/Header'; 
import { Footer } from '../../containers/Footer/Footer'; 
import { Input } from '../../components/Input/Input';
import { Result } from '../../components/Result/Result';
import './App.css'; 

// Aqui a Arrow Function é exportada 
export const App = () => {

    const [numA, setNumA] = useState<string>(""); // Aqui se define o tipo e o valor incial deste. 
    const [numB, setNumB] = useState<string>(""); 

    return (
        <>
           <Header /> 
            <Input numA = {numA} numB = {numB} setNumA = {setNumA} setNumB = {setNumB} /> 
            <Result  numA = {numA} numB = {numB} />
            <Footer />            
        </>
    ); 
} 


