import React, { useEffect, useState } from 'react'; 
import httpCall from '../../utils/httpCall';
import { DivBox, DivContainer } from '../style';

const Home: React.FC = () => {
   const [counter, setCounter] = useState<number>(1); 
    const fetching = async () => {
       try{
           const response = await httpCall(
               'GET',
               'https:/swapi.dev/api/people',
           );
           console.log(response);
       } catch (err) {
           console.log("err: ", err); 
       }
   }
   useEffect(function() {
       fetching();
   },   []); 
    return ( 
    <h1>AUSTIN</h1> 
    ) 
} 

export default Home; 
