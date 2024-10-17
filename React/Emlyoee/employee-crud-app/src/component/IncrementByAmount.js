import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../reactredux/counterSlice";

export function IncrementByAmount(){
    const counter3=useSelector((state)=>state.counter.value);
    const amount=useRef();
    const dispatch=useDispatch();
    function increment(){
        let amt=0;
        if(amount.current.value!="")
            amt=parseInt(amount.current.value)
        dispatch(incrementByAmount(amt));
    }
    return(
        <>
        <p> { counter3}</p>
        <label>Increment By:</label><input type="number" ref={amount} ></input>
        <button onClick={increment}>INCREMENT</button>
        </>
    )
}