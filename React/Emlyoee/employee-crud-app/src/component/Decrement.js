import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../reactredux/counterSlice";
export function Decrement(){
    const counter2=useSelector((storestate)=>storestate.counter.value);
    const dispatch=useDispatch();
    return (
        <>
        <p>
            {counter2}
        </p>
        <button onClick={()=>dispatch(decrement())}>DECREMENT by 1</button>
        </>
    );
}