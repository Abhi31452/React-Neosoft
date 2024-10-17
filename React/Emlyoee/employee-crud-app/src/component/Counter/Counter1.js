import { useEffect, useRef, useState } from "react";

let Counter1 = ()=>{

    let normalCounter =0 ;
    let [stateCounter ,setstateCounter] =useState(0);
    let refCounter = useRef(0);


    useEffect(()=>{
     console.log("normalCounter :" ,normalCounter);
     console.log("stateCounter :" ,stateCounter);
     console.log("refCounter :" ,refCounter);  
    })

    return (

        <>
        <table>
            <tbody>
                <tr> <th> Normal var :</th> <td> {normalCounter}</td></tr>
                <tr> <th> State var :</th> <td> {stateCounter}</td></tr>
                <tr> <th> Ref var :</th> <td> {refCounter.current}</td></tr>
            </tbody>
        </table>

        <button onClick={()=> normalCounter++}> increment</button>
        <button onClick={()=> setstateCounter( stateCounter++)}> increment</button>
        <button onClick={()=> refCounter.current++}> increment</button>
        </>
    );
 
}

export default Counter1;